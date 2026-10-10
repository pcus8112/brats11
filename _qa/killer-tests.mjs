import { Window } from 'happy-dom';
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const require=createRequire(import.meta.url), E=require('../assets/engine.js');
const report={method:'BigInt arithmetic oracle and Happy DOM integration; no visual browser rendering',arithmeticCases:0,fixedTraces:0,trainerCases:0,languagePreservation:0,staticDiagrams:0,invalidValues:0,failures:[]};
let w;
function verify(n){
 const t=E.killerTrace(n);
 assert.equal(t.result,String(BigInt(n)*11n));
 const rawValue=t.raw.reduce((sum,x)=>sum*10n+BigInt(x),0n);
 assert.equal(rawValue,BigInt(n)*11n);
 assert.ok(t.columns.every(c=>c.digit>=0&&c.digit<=9&&c.outgoing>=0&&c.outgoing<=1));
 report.arithmeticCases++;
}
const $=selector=>w.document.querySelector(selector);
function fill(id,value){const f=$('#'+id);f.value=String(value);f.dispatchEvent(new w.Event('input',{bubbles:true}));}
function submit(good){$('form').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));assert.ok($('#result').classList.contains(good?'success':'failure'),$('#result').textContent);report.trainerCases++;}
async function load(n,lang){
 if(w)await w.happyDOM.close();
 w=new Window({url:`https://brats11.test/killer-move.html?lang=${lang}`,settings:{disableJavaScriptFileLoading:true,disableCSSFileLoading:true,enableJavaScriptEvaluation:true,suppressInsecureJavaScriptEnvironmentWarning:true}});
 w.document.write(fs.readFileSync('killer-move.html','utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,''));
 await w.happyDOM.whenAsyncComplete();
 for(const file of ['engine.js','common.js','app.js'])w.eval(fs.readFileSync('assets/'+file,'utf8'));
 w.B11Engine.randomInt=()=>n;$('#new-problem').click();
}
try{
 for(let n=0;n<=9999;n++)verify(n);
 let seed=11092026;for(let i=0;i<2500;i++){seed=(1664525*seed+1013904223)>>>0;verify(10000+seed%990000);}
 verify(Math.floor(Number.MAX_SAFE_INTEGER/11));
 for(const n of [-1,1.5,NaN,Infinity,Number.MAX_SAFE_INTEGER,'121']){assert.throws(()=>E.killerTrace(n),RangeError);report.invalidValues++;}
 for(const [n,raw,result,incoming] of [[121,[1,3,3,1],'1331',[0,0,0,0]],[78,[7,15,8],'858',[1,0,0]],[99,[9,18,9],'1089',[1,0,0]],[123456,[1,3,5,7,9,11,6],'1358016',[0,0,0,1,1,0,0]]]){
  const t=E.killerTrace(n);assert.deepEqual(t.raw,raw);assert.equal(t.result,result);assert.deepEqual(t.columns.map(c=>c.incoming),incoming);report.fixedTraces++;
 }
 for(const lang of ['en','fr','de'])for(const n of [10,33,78,99,121,109,9999,123456,999999]){
  await load(n,lang);const digits=String(n).split('').map(Number),sums=digits.slice(1).map((digit,i)=>digits[i]+digit);
  assert.equal(w.document.querySelectorAll('#killer-pairs input').length,digits.length-1);
  assert.equal($('#killer-tenfold'),null);
  assert.ok([...w.document.querySelectorAll('#killer-pairs input')].every(e=>e.value===''));
  assert.equal($('#result').textContent,'');
  const examples=w.document.querySelectorAll('#learning-guide .km-diagram');assert.equal(examples.length,4);report.staticDiagrams+=examples.length;
  for(const figure of examples){const rows=figure.querySelectorAll('.km-diagram-row');assert.equal(rows[0].children.length,rows[1].children.length,'aligned place values');}
  sums.forEach((value,i)=>fill('killer-pair-'+i,value));fill('killer-final',String(BigInt(n)*11n));submit(true);
  assert.equal($('#result .km-resolved').textContent,String(BigInt(n)*11n));
  for(const next of ['en','fr','de']){w.B11Site.setLanguage(next);assert.ok($('#result').classList.contains('success'));assert.equal($('#killer-final').value,String(BigInt(n)*11n));assert.equal($('#killer-pair-0').value,String(sums[0]));report.languagePreservation++;}
  fill('killer-pair-0',sums[0]+1);assert.equal($('#result').textContent,'');submit(false);
  // A two-digit neighbour sum must stay whole in stage 1; its units alone fail.
  const carryPair=sums.findIndex(x=>x>=10);
  sums.forEach((value,i)=>fill('killer-pair-'+i,value));
  if(carryPair>=0){fill('killer-pair-'+carryPair,sums[carryPair]%10);submit(false);fill('killer-pair-'+carryPair,sums[carryPair]);}
  fill('killer-final',n*11+1);submit(false);
  fill('killer-final',n*11);fill('killer-pair-0','oops');submit(false);
  $('#new-problem').click();assert.ok([...w.document.querySelectorAll('input[type="text"]')].every(e=>e.value===''));assert.equal($('#result').textContent,'');
 }
 // Verify the static no-JavaScript examples contain the actual digit method.
 const html=fs.readFileSync('killer-move.html','utf8');assert.ok(html.includes('1358016'));assert.ok(html.includes('km-incoming'));assert.ok(!html.includes('killer-tenfold'));assert.ok(!html.includes('10x + x'));
 for(const lang of ['en','fr','de']){w.B11Site.setLanguage(lang);assert.notEqual(w.B11Site.t('legal.sections'),'legal.sections');}
}catch(error){report.failures.push(error.stack);process.exitCode=1;}
finally{if(w)await w.happyDOM.close();fs.writeFileSync('_qa/killer-results.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));}
