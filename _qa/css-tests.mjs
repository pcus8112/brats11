import {Window} from 'happy-dom';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const checks=[];
for(const width of [320,375,390,768,900,1050,1280]){
 const w=new Window({width,height:900});w.document.write('<!doctype html><html><head><style>'+fs.readFileSync('assets/styles.css','utf8')+'</style></head><body><div class="header-inner"><nav class="main-nav"><a href="#">Test</a></nav></div><div class="fields"><div class="field"><input></div></div></body></html>');
 const style=w.getComputedStyle(w.document.querySelector('.main-nav'));assert.equal(style.display,'flex','navigation '+width);checks.push({width,navigation:style.display,grid:w.getComputedStyle(w.document.querySelector('.header-inner')).gridTemplateColumns});await w.happyDOM.close();
}
fs.writeFileSync('_qa/css-results.json',JSON.stringify({method:'CSS rule resolution only; no layout renderer',checks},null,2));console.log(checks);
