const fs = require('fs');
const html = fs.readFileSync('dist/airports/index.html', 'utf8');
const matches = [...html.matchAll(/<a\s+[^>]*?href=["']#["'][^>]*>/gi)];
console.log('Empty links count in airports/index.html:', matches.length);
if (matches.length > 0) {
  matches.slice(0, 3).forEach(m => console.log(m[0]));
}

const allMatches = [];
const walk = (d) => {
  for (const f of fs.readdirSync(d)) {
    const p = d + '/' + f;
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) {
      const c = fs.readFileSync(p, 'utf8');
      const m = [...c.matchAll(/<a\s+[^>]*?href=["']#["'][^>]*>/gi)];
      if (m.length > 0) allMatches.push({ file: p, count: m.length, tag: m[0][0] });
    }
  }
};
walk('dist');
console.log('All files with href="#" count:', allMatches);
