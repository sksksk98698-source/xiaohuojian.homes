const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = walk('dist');
console.log('Total HTML files scanned:', htmlFiles.length);

const results = {
  canonicalErrors: [],
  externalLinksWithoutNofollow: [],
  brokenInternalLinks: [],
  emptyLinks: [],
  localPathLeaks: [],
  studioPulseLeaks: [],
  thinContentPages: [],
  titleDups: {},
  descDups: {},
  schemaErrors: [],
  blogPlaceholders: []
};

for (const f of htmlFiles) {
  const relPath = path.relative('dist', f).replace(/\\/g, '/');
  const html = fs.readFileSync(f, 'utf8');

  // 1. Canonical check
  const canMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (!canMatch) {
    results.canonicalErrors.push({ file: relPath, issue: 'Missing canonical' });
  } else {
    const canHref = canMatch[1];
    if (!canHref.startsWith('https://xiaohuojian.homes')) {
      results.canonicalErrors.push({ file: relPath, issue: 'Not starting with https://xiaohuojian.homes: ' + canHref });
    }
  }

  // 2. Links check
  const linkMatches = [...html.matchAll(/<a\s+([^>]*?)href=["']([^"']*)["']([^>]*?)>/gi)];
  for (const m of linkMatches) {
    const fullTag = m[0];
    const href = m[2].trim();
    if (!href || href === '#') {
      if (!fullTag.includes('data-target') && !fullTag.includes('navbar-burger')) {
        results.emptyLinks.push({ file: relPath, tag: fullTag.slice(0, 100) });
      }
      continue;
    }
    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.includes('xiaohuojian.homes') && 
          !href.startsWith('https://apps.apple.com') && 
          !href.startsWith('https://github.com') && 
          !href.startsWith('https://schema.org') &&
          !href.startsWith('https://fast.com') &&
          !href.startsWith('https://nssurge.com')) {
        // Commercial / affiliate or external partner
        const relMatch = fullTag.match(/rel=["']([^"']*)["']/i);
        const rel = relMatch ? relMatch[1] : '';
        if (!rel.includes('nofollow')) {
          results.externalLinksWithoutNofollow.push({ file: relPath, href, rel });
        }
      }
    } else if (href.startsWith('/')) {
      const cleanHref = href.split('#')[0];
      if (cleanHref && cleanHref !== '/') {
        const targetPath1 = path.join('dist', cleanHref, 'index.html');
        const targetPath2 = path.join('dist', cleanHref);
        if (!fs.existsSync(targetPath1) && !fs.existsSync(targetPath2)) {
          results.brokenInternalLinks.push({ file: relPath, href: cleanHref });
        }
      }
    }
  }

  // 3. Sensitive leaks
  if (/c:[\\\/]users/i.test(html) || /desktop[\\\/]/i.test(html)) {
    results.localPathLeaks.push(relPath);
  }
  if (/studio-pulse/i.test(html) || /DomeT99/i.test(html)) {
    results.studioPulseLeaks.push(relPath);
  }

  // 4. Content thickness (pure chinese chars in body)
  const bodyMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyText = (bodyMatch ? bodyMatch[1] : html)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ');
  const zhCount = (bodyText.match(/[\u4e00-\u9fa5]/g) || []).length;
  if (zhCount < 1000) {
    results.thinContentPages.push({ file: relPath, zhCount });
  }

  // Check if blog posts contain placeholder text from original clone
  if (relPath.startsWith('blog/')) {
    if (html.includes('Lorem ipsum') || html.includes('Branding for Startups') || html.includes('Digital Campaigns')) {
      results.blogPlaceholders.push(relPath);
    }
  }

  // 5. Title & Desc
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  if (title) {
    results.titleDups[title] = (results.titleDups[title] || []).concat(relPath);
  }
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const desc = descMatch ? descMatch[1].trim() : '';
  if (desc) {
    results.descDups[desc] = (results.descDups[desc] || []).concat(relPath);
  }

  // 6. JSON-LD syntax
  const jsonLdMatches = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const jm of jsonLdMatches) {
    try {
      JSON.parse(jm[1]);
    } catch (e) {
      results.schemaErrors.push({ file: relPath, err: e.message });
    }
  }
}

console.log('--- AUDIT SCAN RESULTS ---');
console.log('1. Canonical Errors:', results.canonicalErrors.length);
if (results.canonicalErrors.length > 0) console.log(results.canonicalErrors);

console.log('2. External Commercial Links Missing Nofollow:', results.externalLinksWithoutNofollow.length);
if (results.externalLinksWithoutNofollow.length > 0) console.log(results.externalLinksWithoutNofollow);

console.log('3. Broken Internal Links:', results.brokenInternalLinks.length);
if (results.brokenInternalLinks.length > 0) console.log(results.brokenInternalLinks);

console.log('4. Empty Links (# / empty):', results.emptyLinks.length);

console.log('5. Local OS Path Leaks (c:\\users):', results.localPathLeaks);
console.log('6. Original Studio Pulse Leaks:', results.studioPulseLeaks);

console.log('7. Blog Placeholders (original clone articles):', results.blogPlaceholders);

console.log('8. Thin Content Pages (<1000 Chinese Chars):', results.thinContentPages.length);
console.log(results.thinContentPages);

console.log('9. Schema JSON-LD Syntax Errors:', results.schemaErrors.length);

const dupTitles = Object.entries(results.titleDups).filter(([k, v]) => v.length > 1);
console.log('10. Duplicate Titles Count:', dupTitles.length);
if (dupTitles.length > 0) {
  console.log('Duplicate Title samples:', dupTitles);
}

const dupDescs = Object.entries(results.descDups).filter(([k, v]) => v.length > 1);
console.log('11. Duplicate Descriptions Count:', dupDescs.length);
if (dupDescs.length > 0) {
  console.log('Duplicate Description samples:', dupDescs.map(([k, v]) => ({ desc: k.slice(0, 45), count: v.length, files: v.slice(0, 3) })));
}

// Robots and Sitemap verification
const robotsPath = path.join('dist', 'robots.txt');
console.log('12. robots.txt exists:', fs.existsSync(robotsPath));
if (fs.existsSync(robotsPath)) {
  console.log('robots.txt content:\n', fs.readFileSync(robotsPath, 'utf8'));
}

const sitemapPath = path.join('dist', 'sitemap-index.xml');
console.log('13. sitemap-index.xml exists:', fs.existsSync(sitemapPath));
const sitemap0Path = path.join('dist', 'sitemap-0.xml');
console.log('14. sitemap-0.xml exists:', fs.existsSync(sitemap0Path));
if (fs.existsSync(sitemap0Path)) {
  const smXml = fs.readFileSync(sitemap0Path, 'utf8');
  const urls = [...smXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  console.log('Total URLs in sitemap-0.xml:', urls.length);
  const sampleUrls = urls.slice(0, 5);
  console.log('Sample sitemap URLs:', sampleUrls);
}
