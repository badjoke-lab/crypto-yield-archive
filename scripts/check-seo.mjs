import fs from 'node:fs';
import path from 'node:path';
const ok=(v,m)=>{if(!v)throw new Error(m)};
const html=[];const js=[];
function walk(d){for(const x of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,x.name);if(x.isDirectory())walk(p);else if(x.name.endsWith('.html'))html.push(p);else if(x.name.endsWith('.js'))js.push(p)}}
walk('dist');
for(const f of html){
  const t=fs.readFileSync(f,'utf8');
  ok(/rel=(?:"canonical"|canonical)/.test(t)&&t.includes('https://cya.badjoke-lab.com'),'canonical '+f);
  ok(/hreflang=(?:"en"|en)/.test(t),'hreflang '+f);
  ok(/application\/ld\+json/.test(t),'jsonld '+f);
  ok(t.includes('/data/platforms.json'),'discovery '+f);
  ok(t.includes('googletagmanager.com/gtag/js?id=G-LWCGTDBY6W'),'ga4 tag '+f);
}
const expectedEvents=['platform_view','registry_search','filter_change','archive_click','outbound_evidence_click','correction_click'];
const analyticsFile=js.find((f)=>{const t=fs.readFileSync(f,'utf8');return expectedEvents.every((eventName)=>t.includes(eventName))});
ok(analyticsFile,'analytics bundle');
const analytics=fs.readFileSync(analyticsFile,'utf8');
ok(!analytics.includes('search_term'),'analytics must not collect raw registry search text');
const analyticsHref='/'+path.relative('dist',analyticsFile).split(path.sep).join('/');
for(const f of html){const t=fs.readFileSync(f,'utf8');ok(t.includes(analyticsHref),'analytics bundle reference '+f)}
const map=fs.readFileSync('dist/sitemap.xml','utf8'),robots=fs.readFileSync('dist/robots.txt','utf8');
ok(!map.includes('pages.dev'),'pages origin in sitemap');
ok(robots.includes('https://cya.badjoke-lab.com/sitemap.xml'),'robots sitemap');
for(const f of ['dist/index.html','dist/stats/index.html','dist/version.json','dist/data/manifest.json','dist/llms.txt','dist/ai.txt']){
  const t=fs.readFileSync(f,'utf8');
  ok(!/\b20 platforms\b/i.test(t),'old text '+f);
  ok(!/Platforms:\s*20\b/.test(t),'old count '+f);
  ok(!/"(?:platforms|primary_records)"\s*:\s*20\b/.test(t),'old json '+f);
}
console.log(JSON.stringify({html_pages:html.length,ga4:true,analytics_bundle:analyticsHref,analytics_events:true,ok:true}));
