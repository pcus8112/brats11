import { Window } from 'happy-dom';
import fs from 'node:fs';
import assert from 'node:assert/strict';

const files = ['index.html','rfd.html','killer-move.html','b11-soft.html','b11.html','legal.html'];
const report = {method:'Source checks and Happy DOM simulation; no visual browser rendering',staticPages:0,hydratedPages:0,selfModeCases:0,rfdDefaults:0,buttonContrast:{},failures:[]};
let w;
async function load(file, lang='en', scripts=true) {
  if (w) await w.happyDOM.close();
  w = new Window({url:`https://brats11.com/${file}?lang=${lang}`, settings:{disableJavaScriptFileLoading:true,disableCSSFileLoading:true,enableJavaScriptEvaluation:true,suppressInsecureJavaScriptEnvironmentWarning:true}});
  w.document.write(fs.readFileSync(file,'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,''));
  await w.happyDOM.whenAsyncComplete();
  if (scripts) for (const f of ['engine.js','common.js','app.js']) w.eval(fs.readFileSync('assets/'+f,'utf8'));
}
const $ = selector => w.document.querySelector(selector);
const type = (id,value) => { const input=$('#'+id); input.value=value; input.dispatchEvent(new w.Event('input',{bubbles:true})); };
function contrast(hex) {
  const rgb=hex.match(/[a-f\d]{2}/gi).map(x=>parseInt(x,16)/255).map(x=>x<=0.04045?x/12.92:((x+0.055)/1.055)**2.4);
  return 1.05/(0.2126*rgb[0]+0.7152*rgb[1]+0.0722*rgb[2]+0.05);
}
try {
  const sitemap=fs.readFileSync('sitemap.xml','utf8');
  assert.equal((sitemap.match(/<loc>/g)||[]).length,files.length);
  assert.ok(fs.readFileSync('robots.txt','utf8').includes('Sitemap: https://brats11.com/sitemap.xml'));
  for (const file of files) {
    await load(file,'en',false);
    const doc=w.document, url='https://brats11.com/'+(file==='index.html'?'':file);
    assert.ok($('h1').textContent.trim());
    assert.equal(doc.querySelectorAll('.main-nav a').length,5);
    assert.ok($('#site-footer').textContent.includes('SIREN 131 236 408'));
    assert.ok(!doc.body.textContent.includes('en cours d’attribution'));
    for (const node of doc.querySelectorAll('[data-i18n]')) { assert.ok(node.textContent.trim()); assert.notEqual(node.textContent,node.dataset.i18n); }
    if ($('#learning-guide')) assert.ok($('#learning-guide details li'));
    assert.equal(doc.querySelectorAll('.booklet-note').length,file==='legal.html'?0:1);
    assert.equal($('link[rel="canonical"]').href,url);
    assert.equal($('meta[property="og:url"]').content,url);
    assert.equal($('meta[property="og:title"]').content,doc.title);
    assert.equal($('meta[property="og:description"]').content,$('meta[name="description"]').content);
    assert.equal($('meta[name="twitter:title"]').content,doc.title);
    assert.ok(sitemap.includes(`<loc>${url}</loc>`));
    for (const node of doc.querySelectorAll('link[href^="assets/"]')) assert.ok(fs.existsSync(node.getAttribute('href').split('?')[0]));
    const source=fs.readFileSync(file,'utf8');
    assert.ok(source.includes('.language-switcher, .trainer-card, .learning-actions { display: none !important; }'));
    assert.ok(!source.includes('20261009-2'));
    for (const match of source.matchAll(/src="(assets\/[^?]+)\?v=20261009-3"/g)) assert.ok(fs.existsSync(match[1]));
    report.staticPages++;
    for (const lang of ['en','fr','de']) {
      await load(file,lang);
      assert.equal(w.document.querySelectorAll('.booklet-note').length,file==='legal.html'?0:1);
      assert.equal(w.document.querySelectorAll('.main-nav').length,1);
      assert.equal(w.document.querySelectorAll('.site-footer').length,1);
      if(file==='index.html' && lang==='fr') assert.equal($('h1').textContent,'Trouve un chemin plus simple.');
      if(file==='rfd.html') { assert.equal($('#rfd-operation').value,'add'); assert.equal($('#rfd-level').value,'1'); assert.ok($('#problem').textContent.includes('+')); report.rfdDefaults++; }
      report.hydratedPages++;
    }
  }
  for (const [file,len,base,target,code] of [['b11-soft.html',2,47,28,'26'],['b11.html',3,347,256,'213']]) {
    for (const lang of ['en','fr','de']) {
      await load(file,lang);
      w.B11Engine[len===2?'softTask':'fullTask']=()=>({left:base,right:target,base,target,code:w.B11Engine.makeCode(target,len),result:base*target});
      $('#new-problem').click();
      const symbolicIds=len===2?['km1','sum1']:['km1','sum1','km2','sum2'];
      const guided=$('#km1-label').textContent;
      assert.ok(guided.includes(String(base*Number(code[0]))));
      $('#mode-full').click();
      const symbolic=symbolicIds.map(id=>$('#'+id+'-label').textContent);
      for (const entered of ['',code,len===2?'3X':'3X5']) {
        type('code',entered);
        assert.deepEqual(symbolicIds.map(id=>$('#'+id+'-label').textContent),symbolic,'independent labels must not precompute answers');
        for (const label of symbolic) for (const n of label.match(/\d+/g)||[]) assert.ok(['1','2','11'].includes(n),'unexpected calculated number in '+label);
        assert.ok(!$('#result').textContent.trim());
        assert.ok($('#given-code').classList.contains('hidden'));
        report.selfModeCases++;
      }
      $('#mode-apply').click();
      assert.equal($('#km1-label').textContent,guided,'guided hints remain available');
      $('#mode-full').click();
      assert.deepEqual(symbolicIds.map(id=>$('#'+id+'-label').textContent),symbolic);
      w.B11Site.setLanguage(lang==='de'?'en':'de');
      assert.ok(!$('#km1-label').textContent.includes(String(base*Number(code[0]))),'language change must not restore answers');
    }
  }
  const css=fs.readFileSync('assets/styles.css','utf8');
  const normal=css.match(/\.button-primary \{ background: var\((--[^)]+)\)/)[1];
  const normalColor=css.match(new RegExp(normal+': (#[a-fA-F0-9]+)'))[1];
  const hoverColor=css.match(/\.button-primary:hover \{ background: (#[a-fA-F0-9]+)/)[1];
  for(const [state,color] of [['normal',normalColor],['hover',hoverColor]]) { const ratio=contrast(color); assert.ok(ratio>=4.5); report.buttonContrast[state]={background:color,foreground:'#ffffff',ratio:Number(ratio.toFixed(3))}; }
} catch (error) { report.failures.push(error.stack); process.exitCode=1; }
finally { if (w) await w.happyDOM.close(); fs.writeFileSync('_qa/update-results.json',JSON.stringify(report,null,2)); console.log(JSON.stringify(report,null,2)); }
