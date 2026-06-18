import fs from 'node:fs';
import path from 'node:path';
const ok=(v,m)=>{if(!v)throw new Error(m)};
const html=[];function walk(d){for(const x of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,x.name);if(x.isDirectory())walk(p);else if(x.name.endsWith('.html'))html.push(p)}}walk('dist');
for(const f of html){const t=fs.readFileSync(f,'utf8');ok(t.includes('<link rel="canonical" href="https://cya.badjoke-lab.com'),'canonical '+f);ok(t.includes('hreflang="en"'),'hreflang '+f);ok(t.includes('application/ld+json'),'jsonld '+f);ok(t.includes('/data/platforms.json'),'discovery '+f)}
const map=fs.readFileSync('dist/sitemap.xml','utf8'),robots=fs.readFileSync('dist/robots.txt','utf8');ok(!map.includes('pages.dev'),'pages origin in sitemap');ok(robots.includes('https://cya.badjoke-lab.com/sitemap.xml'),'robots sitemap');
for(const f of ['dist/index.html','dist/stats/index.html','dist/version.json','dist/data/manifest.json','dist/llms.txt','dist/ai.txt']){const t=fs.readFileSync(f,'utf8');ok(!/\b20 platforms\b/i.test(t),'old text '+f);ok(!/Platforms:\s*20\b/.test(t),'old count '+f);ok(!/"(?:platforms|primary_records)"\s*:\s*20\b/.test(t),'old json '+f)}
console.log(JSON.stringify({html_pages:html.length,ok:true}));
