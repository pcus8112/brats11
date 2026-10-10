import {Window} from 'happy-dom';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import path from 'node:path';
const root=path.resolve('.');
const report={environment:'Happy DOM 20.14.6 (DOM simulation, no visual browser rendering)',configurationRuns:0,distinctConfigurations:31,answerSubmissions:0,languageFeedbackChecks:0,pageLanguageChecks:0,translatedElements:0,localLinks:0,formLabels:0,storageBlocked:0,failures:[]};
let w,d;
const $=s=>d.querySelector(s);
async function load(file,lang='en',storageBlocked=false){
 if(w)await w.happyDOM.close();
 w=new Window({url:`https://brats11.test/${file}?lang=${lang}`,settings:{disableJavaScriptFileLoading:true,disableCSSFileLoading:true,enableJavaScriptEvaluation:true,suppressInsecureJavaScriptEnvironmentWarning:true}});
 d=w.document;d.write(fs.readFileSync(path.join(root,file),'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,''));await w.happyDOM.whenAsyncComplete();
 if(storageBlocked)Object.defineProperty(w,'localStorage',{get(){throw new Error('Storage blocked');}});
 for(const script of ['engine.js','common.js','app.js'])w.eval(fs.readFileSync(path.join(root,'assets',script),'utf8'));
 assert.equal($('.main-nav').children.length,5);
}
function fill(id,value){const el=$('#'+id);el.value=String(value);el.dispatchEvent(new w.Event('input',{bubbles:true}));}
function select(id,value){const el=$('#'+id);el.value=value;el.dispatchEvent(new w.Event('change',{bubbles:true}));}
function mode(value){$('#mode-'+value).click();}
function visible(el){return !el.closest('.hidden');}
function submit(good,label){$('form').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));assert.ok($('#result').classList.contains(good?'success':'failure'),label+': '+$('#result').textContent);report.answerSubmissions++;}
function numbers(){return $('#problem').textContent.match(/\d+/g).map(Number);}
function codeOf(n,len){let code='';for(let i=0;i<len;i++){let digit=n%11;code=(digit===10?'X':digit)+code;n=Math.floor(n/11);}return code;}
function fields(base,target,len){const digits=[...codeOf(target,len)].map(d=>d==='X'?10:Number(d)),start=base*digits[0],km1=start*11,add1=base*digits[1],sum1=km1+add1;return {anchor:Math.floor(target/(len===2?11:121))*(len===2?11:121),remainder:target%(len===2?11:121),code:codeOf(target,len),start,km1,add1,sum1,...(len===3?{km2:sum1*11,add2:base*digits[2],sum2:base*target}:{})};}
function fillVisible(expected){for(const [id,value] of Object.entries(expected))if(visible($('#'+id)))fill(id,value);}
try{
 for(const lang of ['en','fr','de']){
  await load('rfd.html',lang);
  for(const level of ['1','2','3'])for(const op of ['add','sub','mul','div','mixed']){
   select('rfd-level',level);select('rfd-operation',op);const [a,b]=numbers(),text=$('#problem').textContent;
   const operator=text.includes('+')?'+':text.includes('−')?'-':text.includes('×')?'*':'/';
   const result=operator==='+'?a+b:operator==='-'?a-b:operator==='*'?a*b:a/b;
   fill('route-a',a);fill('route-b',b);select('route-op-1',operator);fill('route-result',result);submit(true,`RFD ${lang} ${level} ${op}`);
   fill('route-result',result+1);submit(false,'wrong result');fill('route-result',result);fill('route-c','oops');submit(false,'invalid optional field');
   fill('route-c','');fill('route-b',b+1);submit(false,'wrong route');report.configurationRuns++;
  }
  await load('killer-move.html',lang);
  for(const level of ['1','2','3','4']){
   select('killer-level',level);const [n]=numbers(),digits=String(n).split('').map(Number);digits.slice(1).forEach((digit,i)=>fill('killer-pair-'+i,digits[i]+digit));fill('killer-final',n*11);submit(true,'killer '+level);fill('killer-final',n*11+1);submit(false,'killer wrong');report.configurationRuns++;
  }
  for(const [file,len,levels] of [['b11-soft.html',2,['1','2','3']],['b11.html',3,[null]]]){
   await load(file,lang);
   for(const level of levels){if(level)select('b11-level',level);
    for(const m of ['apply','create','full']){
     mode(m);const [left,right]=numbers(),expected=fields(Math.max(left,right),Math.min(left,right),len);
     fillVisible(expected);submit(true,`${file} ${lang} ${level} ${m}`);
     const wrong=m==='create'?'remainder':len===2?'sum1':'sum2';fill(wrong,expected[wrong]+1);submit(false,'B11 wrong');
     if(m==='full'){fill(wrong,expected[wrong]);fill('code','X!');submit(false,'invalid code retained');assert.equal($('#code').value,'X!');}
     report.configurationRuns++;
    }
   }
  }
 }
 await load('killer-move.html');w.B11Engine.randomInt=()=>33;$('#new-problem').click();
 for(const [a,b,good] of [['6','363',true],['0,06','3.63',false],['0.06','3,63',false],['6,0','363.0',true],['06','+0363',true],['12/2','726/2',true],['-6','-363',false],['0','0',false],['','',false],['6x','363!',false],['6','363.000000000001',false],['0 06','3 63',false]]){fill('killer-pair-0',a);fill('killer-final',b);submit(good,'input regression '+a);}
 for(const [lang,text] of [['fr','Vérifie les champs indiqués.'],['de','Prüfe die markierten Felder.'],['en','Review the marked fields.']]){$(`[data-language="${lang}"]`).click();assert.ok($('#result').textContent.includes(text));assert.equal($('#killer-final').value,'3 63');report.languageFeedbackChecks++;}
 await load('rfd.html');w.B11Engine.rfdTask=()=>({a:33,b:11,type:'mul',result:363,alternatives:[{numbers:[330,33],operators:['+'],grouping:'normal',result:363}]});$('#new-problem').click();
 for(const [a,b,c,op1,op2,g,good] of [['330','33','', '+','+','normal',true],['-363','-1','', '*','+','normal',true],['726/2','0','', '+','+','normal',true],['36.3','10','', '*','+','normal',true],['36,3','10','', '*','+','normal',true],['300','33','30', '+','+','normal',true],['330','33','1', '+','*','left',true],['33','10','1','*','+','right',true],['363.000000000001','0','', '+','+','normal',false],['363','0','', '/','+','normal',false],['33','11','0','*','/','normal',false]]){
  fill('route-a',a);fill('route-b',b);fill('route-c',c);fill('route-result',363);select('route-op-1',op1);select('route-op-2',op2);select('route-grouping',g);submit(good,'RFD edge '+a);
 }
 for(const [lang,text] of [['fr','Vérifie tous les champs remplis'],['de','Prüfe alle ausgefüllten Zahlenfelder'],['en','Check every filled number field']]){$(`[data-language="${lang}"]`).click();assert.ok($('#result').textContent.includes(text));report.languageFeedbackChecks++;}
 for(const [file,len,base,target] of [['b11-soft.html',2,47,10],['b11.html',3,200,120],['b11.html',3,347,256]]){
  await load(file);const expected=fields(base,target,len);w.B11Engine[len===2?'softTask':'fullTask']=()=>({left:base,right:target,base,target,code:w.B11Engine.makeCode(target,len),result:base*target});$('#new-problem').click();
  for(const m of ['apply','create','full']){
   mode(m);fillVisible(expected);submit(true,`code edge ${file} ${m}`);
   for(const [lang,text] of [['fr','Tout est juste.'],['de','Alles richtig.'],['en','All correct.']]){$(`[data-language="${lang}"]`).click();assert.ok($('#result').classList.contains('success'));assert.ok($('#result').textContent.includes(text));report.languageFeedbackChecks++;}
  }
  // Each individual visible checkpoint must reject a wrong value and an invalid format.
  mode('full');
  for(const [id,value] of Object.entries(expected)){
   fillVisible(expected);fill(id,id==='code'?'XXX':value+1);submit(false,'individual wrong '+id);
   fill(id,'oops');submit(false,'individual invalid '+id);
  }
  fillVisible(expected);submit(true,'restore correct');fill('start',999);assert.equal($('#result').textContent,'','stale feedback after edit');
 }
 for(const file of ['index.html','rfd.html','killer-move.html','b11-soft.html','b11.html','legal.html'])for(const lang of ['en','fr','de']){
  await load(file,lang);assert.equal(d.documentElement.lang,lang==='fr'?'fr-CA':lang==='en'?'en-US':'de');
  for(const el of d.querySelectorAll('[data-i18n]')){assert.ok(el.textContent.trim());assert.notEqual(el.textContent,el.dataset.i18n);report.translatedElements++;}
  for(const el of d.querySelectorAll('[data-i18n-aria]')){assert.ok(el.getAttribute('aria-label'));assert.notEqual(el.getAttribute('aria-label'),el.dataset.i18nAria);}
  for(const el of d.querySelectorAll('input,select')){assert.ok(el.getAttribute('aria-label')||d.querySelector(`label[for="${el.id}"]`),`unlabelled ${file} ${el.id}`);report.formLabels++;}
  for(const el of d.querySelectorAll('a[href]')){const href=el.getAttribute('href');if(/^(https?:|mailto:|tel:)/.test(href))continue;const [filename,fragment]=href.split('#');assert.ok(fs.existsSync(path.join(root,filename||file)),href);if(fragment){const source=filename&&filename!==file?fs.readFileSync(path.join(root,filename),'utf8'):d.documentElement.outerHTML;assert.ok(source.includes(`id="${fragment}"`),href);}report.localLinks++;}
  if(file!=='legal.html')assert.equal($('.booklet-note a').href,'https://singershamrock.com/booklets.html');
  if($('#learning-guide'))assert.ok($('#learning-guide').querySelectorAll('li').length>=3);
  report.pageLanguageChecks++;
 }
 for(const file of ['index.html','rfd.html','killer-move.html','b11-soft.html','b11.html','legal.html']){await load(file,'en',true);$('[data-language="fr"]').click();assert.equal(d.documentElement.lang,'fr-CA');report.storageBlocked++;}
 console.log(JSON.stringify(report,null,2));
}catch(error){report.failures.push(error.stack);console.error(error);process.exitCode=1;}finally{if(w)await w.happyDOM.close();fs.writeFileSync('_qa/dom-results.json',JSON.stringify(report,null,2));}
