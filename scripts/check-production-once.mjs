import fs from 'node:fs';
import path from 'node:path';

const load=(n)=>fs.readdirSync('data').filter((f)=>f===`${n}.json`||(f.startsWith(`${n}-batch-`)&&f.endsWith('.json'))).flatMap((f)=>JSON.parse(fs.readFileSync(path.join('data',f),'utf8')));
const p=load('platforms'),e=load('events'),v=load('evidence'),o=load('outcomes'),r=load('products'),t=load('terms-risk');
const ongoing=o.filter((x)=>x.outcome_status==='claims_ongoing').length;
const expected={primary_records:p.length,platforms:p.length,events:e.length,evidence:v.length,customer_outcomes:o.length,product_profiles:r.length,terms_risk_records:t.length};
const ok=(x,m)=>{if(!x)throw new Error(m)};

async function readText(base,route,type){
  const res=await fetch(`${base}${route}`,{headers:{accept:type,'user-agent':'cya-production-audit/2.0'}});
  ok(res.ok,`${route} HTTP ${res.status}`);
  ok((res.headers.get('content-type')||'').includes(type),`${route} type`);
  return {body:await res.text(),headers:res.headers,url:res.url};
}
async function readJson(base,route){return JSON.parse((await readText(base,route,'application/json')).body)}

export async function checkProduction(base,commit){
  const host=new URL(base).hostname;
  const preview=host.endsWith('.crypto-yield-archive.pages.dev')&&host!=='crypto-yield-archive.pages.dev';
  const version=await readJson(base,'/version.json'),manifest=await readJson(base,'/data/manifest.json');
  ok(version.schema_version==='1.1.0','version schema');ok(version.canonical_origin==='https://cya.badjoke-lab.com','origin');ok(version.canonical_only===true,'canonical only');
  ok(JSON.stringify(version.data.record_counts)===JSON.stringify(expected),'version counts');ok(version.data.derived_counts.claims_ongoing===ongoing,'derived claims');
  if(commit)ok(version.build.commit===commit,`commit ${version.build.commit} != ${commit}`);
  ok(manifest.generated_at===version.data.generated_at,'manifest time');ok(JSON.stringify(manifest.record_counts)===JSON.stringify(expected),'manifest counts');
  const files=[['/data/platforms.json',p.length],['/data/events.json',e.length],['/data/evidence.json',v.length],['/data/customer-outcomes.json',o.length],['/data/outcomes.json',o.length],['/data/products.json',r.length],['/data/terms-risk.json',t.length]];
  for(const [route,count] of files){const data=await readJson(base,route);ok(data.canonical_only===true,`${route} canonical`);ok(data.generated_at===version.data.generated_at,`${route} time`);ok(data.record_count===count,`${route} count`)}
  const homeResponse=await readText(base,'/','text/html'),statsResponse=await readText(base,'/stats/','text/html'),timelineResponse=await readText(base,'/timeline/','text/html');
  const home=homeResponse.body,stats=statsResponse.body,timeline=timelineResponse.body;
  ok(home.includes(`of <strong>${p.length}</strong> platforms`),'home count');ok(home.includes(`<dt>Claims ongoing</dt><dd>${ongoing}</dd>`),'home claims');ok([...timeline.matchAll(/class=(?:"timeline-record"|timeline-record)/g)].length===e.length,'timeline count');
  for(const n of [p.length,e.length,v.length,o.length,r.length,t.length])ok(stats.includes(`<strong>${n}</strong>`),`stats ${n}`);
  ok(home.includes('https://cya.badjoke-lab.com/'),'home canonical');ok(home.includes('/data/platforms.json'),'home discovery');
  const sitemap=(await readText(base,'/sitemap.xml','application/xml')).body,robotsResponse=await readText(base,'/robots.txt','text/plain'),robots=robotsResponse.body;
  ok([...sitemap.matchAll(/<loc>https:\/\/cya\.badjoke-lab\.com\/platform\//g)].length===p.length,'sitemap count');
  if(preview){ok(robots.includes('Disallow: /'),'preview robots');ok((homeResponse.headers.get('x-robots-tag')||'').includes('noindex'),'preview noindex header')}
  else ok(robots.includes('https://cya.badjoke-lab.com/sitemap.xml'),'production robots');
  const guides=[(await readText(base,'/llms.txt','text/plain')).body,(await readText(base,'/ai.txt','text/plain')).body];for(const guide of guides)ok(guide.includes(`Platforms: ${p.length}`),'guide count');
  for(const body of [home,stats,JSON.stringify(version),JSON.stringify(manifest),...guides])ok(!/\b20 platforms\b|Platforms:\s*20\b|"(?:platforms|primary_records)"\s*:\s*20\b/i.test(body),'stale 20 count');
  return {ok:true,base_url:base,preview,build:version.build,record_counts:expected,derived_counts:{claims_ongoing:ongoing}};
}
