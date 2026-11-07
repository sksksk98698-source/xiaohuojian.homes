const fs = require('fs');
const html = fs.readFileSync('dist/airports/guangsu/index.html', 'utf8');
const schemas = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
console.log('Schemas in airports/guangsu:', schemas.length);
schemas.forEach((s, idx) => {
  console.log(`Schema #${idx+1}:`, JSON.parse(s[1]));
});
