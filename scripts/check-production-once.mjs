import fs from 'node:fs';
import path from 'node:path';

const load=(n)=>fs.readdirSync('data').filter((f)=>f===`${n}.json`||(f.startsWith(`${n}-batch-`)&&f.endsWith('.json'))).flatMap((f)=>JSON.parse(fs.readFileSync(path.join('data',f),'utf8')));
const p=load('platforms'),e=load('events'),v=load('evidence'),o=load('outcomes'),r=load('products'),t=load('terms-risk');
const ongoing=o.filter((x)=>x.outcome_status==='claims_ongoing').length;
const expected={primary_records:p.length,platforms:p.length,events:e.length,evidence:v.length,customer_outcomes:o.length,product_profiles:r.length,terms_risk_records:t.length};
const ok=(x,m)=>{if(!x)throw new Error(m)};
const sharedSupportWallets={
  btc:'bc1qk3y8x72me37aj8d236z9v0gu42t8xxr2ytspmd',
  evm:'0xea2a0fb0def0473d161b7958f6d584533db9202d',
  sol:'9e9kZkwA6tYYAfCzb76aimta26yyPEgR39GZK2oBVH3q',
  doge:'DP1m7675rSCZC5s5wzWSHNaA9bLVpsyjse',
  xrp:'rUHSmDUteyPSr7FDq4p3BzQV627gSiJdCr'
};

async function readText(base,route,type){
  const separator=route.includes('?')?'&':'?';
  const res=await fetch(`${base}${route}${separator}production_audit=${Date.now()}`,{headers:{accept:type,'cache-control':'no-cache','user-agent':'cya-production-audit/3.0'}});
  ok(res.ok,`${route} HTTP ${res.status}`);
  ok((res.headers.get('content-type')||'').includes(type),`${route} type`);
  return {body:await res.text(),headers:res.headers,url:res.url};
}
async function readJson(base,route){return JSON.parse((await readText(base,route,'application/json')).body)}

export async function checkProduction(base,commit,sourceCommit){
  const host=new URL(base).hostname;
  const preview=host.endsWith('.crypto-yield-archive.pages.dev')&&host!=='crypto-yield-archive.pages.dev';
  const version=await readJson(base,'/version.json'),manifest=await readJson(base,'/data/manifest.json');
  ok(version.schema_version==='1.2.0','version schema');ok(version.canonical_origin==='https://cya.badjoke-lab.com','origin');ok(version.canonical_only===true,'canonical only');
  ok(version.data.public_files?.platform_record==='/data/platform/{slug}.json','version record-level route');
  ok(JSON.stringify(version.data.record_counts)===JSON.stringify(expected),'version counts');ok(version.data.derived_counts.claims_ongoing===ongoing,'derived claims');
  if(commit)ok(version.build.commit===commit,`commit ${version.build.commit} != ${commit}`);
  let deployedSourceCommit=null;
  if(sourceCommit){
    deployedSourceCommit=(await readText(base,'/cya-source-commit.txt','text/plain')).body.trim();
    ok(deployedSourceCommit===sourceCommit,`source commit ${deployedSourceCommit} != ${sourceCommit}`);
  }
  ok(manifest.generated_at===version.data.generated_at,'manifest time');ok(JSON.stringify(manifest.record_counts)===JSON.stringify(expected),'manifest counts');
  ok(manifest.public_files?.platform_record==='/data/platform/{slug}.json','manifest record-level route');
  const files=[['/data/platforms.json',p.length],['/data/events.json',e.length],['/data/evidence.json',v.length],['/data/customer-outcomes.json',o.length],['/data/outcomes.json',o.length],['/data/products.json',r.length],['/data/terms-risk.json',t.length]];
  for(const [route,count] of files){const data=await readJson(base,route);ok(data.canonical_only===true,`${route} canonical`);ok(data.generated_at===version.data.generated_at,`${route} time`);ok(data.record_count===count,`${route} count`)}

  const recordSamples=p.length>1?[p[0],p[p.length-1]]:p;
  for(const platform of recordSamples){
    const route=`/data/platform/${platform.slug}.json`;
    const data=await readJson(base,route);
    ok(data.schema_version===version.schema_version,`${route} schema`);
    ok(data.dataset==='platform_record',`${route} dataset`);
    ok(data.canonical_only===true,`${route} canonical`);
    ok(data.generated_at===version.data.generated_at,`${route} time`);
    ok(data.record_key?.platform_id===platform.id&&data.record_key?.slug===platform.slug,`${route} key`);
    ok(data.record?.id===platform.id&&data.record?.slug===platform.slug,`${route} primary record`);
    ok(data.canonical_page===`/platform/${platform.slug}/`,`${route} canonical page`);
    ok(data.self===route,`${route} self`);
    ok(Array.isArray(data.supporting_records?.events),`${route} events`);
    ok(Array.isArray(data.supporting_records?.evidence),`${route} evidence`);
    ok(Array.isArray(data.supporting_records?.products),`${route} products`);
    const serialized=JSON.stringify(data);
    ok(!serialized.includes('candidate_id'),`${route} candidate leakage`);
    ok(!serialized.includes('data-staging'),`${route} staging leakage`);
  }

  const homeResponse=await readText(base,'/','text/html');
  const platformsResponse=await readText(base,'/platforms/','text/html');
  const supportResponse=await readText(base,'/support/','text/html');
  const statsResponse=await readText(base,'/stats/','text/html');
  const timelineResponse=await readText(base,'/timeline/','text/html');
  const home=homeResponse.body,platforms=platformsResponse.body,support=supportResponse.body,stats=statsResponse.body,timeline=timelineResponse.body;

  ok(home.includes(`<dt>Platforms</dt><dd>${p.length}</dd>`),'home platform count');
  ok(home.includes(`<dt>Claims ongoing</dt><dd>${ongoing}</dd>`),'home claims');
  ok(home.includes('href="/platforms/"'),'home platforms route');
  ok(home.includes('href="/support/"'),'home support route');
  ok([...home.matchAll(/class="home-record-card"/g)].length<=18,'home record card limit');
  ok(!home.includes('id="registryTable"'),'home must not contain complete registry table');
  ok(platforms.includes(`all ${p.length} reviewed platform records`),'platform registry total');
  ok(platforms.includes('id="previousPage"')&&platforms.includes('id="nextPage"'),'platform pagination');
  for(const platform of p)ok(platforms.includes(`/platform/${platform.slug}/`),`platform registry missing ${platform.slug}`);
  ok(support.includes('What support does not buy'),'support independence');
  ok(support.includes('Shared BadJoke-Lab support wallets'),'support shared-wallet disclosure');
  ok(support.includes('Primary options'),'support primary options');
  ok(support.includes('Additional networks'),'support additional networks');
  ok(support.includes('ETH · USDT · USDC'),'support EVM asset group');
  for(const [asset,address] of Object.entries(sharedSupportWallets))ok(support.includes(address),`support ${asset} address`);
  ok(!support.includes('A dedicated CYA payment address or payment link is not currently published'),'stale unpublished-payment notice');
  ok([...timeline.matchAll(/class=(?:"timeline-record"|timeline-record)/g)].length===e.length,'timeline count');
  for(const n of [p.length,e.length,v.length,o.length,r.length,t.length])ok(stats.includes(`<strong>${n}</strong>`),`stats ${n}`);
  ok(home.includes('https://cya.badjoke-lab.com/'),'home canonical');

  const sitemap=(await readText(base,'/sitemap.xml','application/xml')).body,robotsResponse=await readText(base,'/robots.txt','text/plain'),robots=robotsResponse.body;
  ok([...sitemap.matchAll(/<loc>https:\/\/cya\.badjoke-lab\.com\/platform\//g)].length===p.length,'sitemap count');
  ok(sitemap.includes('<loc>https://cya.badjoke-lab.com/platforms/</loc>'),'platforms sitemap route');
  ok(sitemap.includes('<loc>https://cya.badjoke-lab.com/support/</loc>'),'support sitemap route');
  if(preview){ok(robots.includes('Disallow: /'),'preview robots');ok((homeResponse.headers.get('x-robots-tag')||'').includes('noindex'),'preview noindex header')}
  else ok(robots.includes('https://cya.badjoke-lab.com/sitemap.xml'),'production robots');
  const guides=[(await readText(base,'/llms.txt','text/plain')).body,(await readText(base,'/ai.txt','text/plain')).body];for(const guide of guides)ok(guide.includes(`Platforms: ${p.length}`),'guide count');
  for(const body of [home,platforms,support,stats,JSON.stringify(version),JSON.stringify(manifest),...guides])ok(!/\b20 platforms\b|Platforms:\s*20\b|"(?:platforms|primary_records)"\s*:\s*20\b/i.test(body),'stale 20 count');
  return {ok:true,base_url:base,preview,build:version.build,deployed_source_commit:deployedSourceCommit,record_counts:expected,derived_counts:{claims_ongoing:ongoing},record_level_json_samples:recordSamples.map((platform)=>platform.slug),ui:{home_record_cards:[...home.matchAll(/class="home-record-card"/g)].length,platform_registry:p.length,support_page:true,shared_support_wallets:true}};
}
