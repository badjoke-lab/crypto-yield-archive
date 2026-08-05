import { checkProduction } from './check-production-once.mjs';

const base=(process.env.CYA_BASE_URL||'https://cya.badjoke-lab.com').replace(/\/$/,'');
const hasExplicitCommit=Object.prototype.hasOwnProperty.call(process.env,'CYA_EXPECTED_COMMIT');
const explicitCommit=process.env.CYA_EXPECTED_COMMIT?.trim()||null;
const commit=hasExplicitCommit?explicitCommit:(process.env.GITHUB_SHA||null);
const attempts=Number(process.env.CYA_SMOKE_ATTEMPTS||12);
const delay=Number(process.env.CYA_SMOKE_DELAY_MS||15000);
let lastError;
for(let i=1;i<=attempts;i+=1){
  try{const result=await checkProduction(base,commit);console.log(JSON.stringify({...result,attempt:i},null,2));process.exit(0)}
  catch(error){lastError=error;console.error(`Production check ${i}/${attempts}: ${error.message}`);if(i<attempts)await new Promise((resolve)=>setTimeout(resolve,delay))}
}
throw lastError;
