import {Window} from 'happy-dom';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const checks=[];
for(const width of [320,375,390,768,900,1050,1280]){
 const w=new Window({width,height:900});w.document.write('<!doctype html><html><head><style>'+fs.readFileSync('assets/styles.css','utf8')+'</style></head><body><div class="header-inner"><nav class="main-nav"><a href="#">Test</a></nav></div><div class="km-input-grid" style="--km-columns:7"><div class="field km-input-cell"><label>5 + 6</label><input></div></div><div class="footer-inner"><div class="sse-signet">Singer Shamrock Enterprises</div><div class="footer-links"><span>Registration</span></div></div></body></html>');
 const style=w.getComputedStyle(w.document.querySelector('.main-nav'));assert.equal(style.display,'flex','navigation '+width);
 const footer=w.getComputedStyle(w.document.querySelector('.footer-inner')).gridTemplateColumns;
 assert.equal(footer,width<=680?'1fr':'minmax(240px, .8fr) minmax(0, 1.6fr)');
 const input=w.document.querySelector('input'),inputStyle=w.getComputedStyle(input);assert.equal(inputStyle.backgroundColor,'#0b0c11');assert.equal(inputStyle.minWidth,'0');
 input.className='wrong';assert.equal(w.getComputedStyle(input).borderTopColor,'#ff7070');
 checks.push({width,navigation:style.display,grid:w.getComputedStyle(w.document.querySelector('.header-inner')).gridTemplateColumns,footer,killerInputBackground:inputStyle.backgroundColor});await w.happyDOM.close();
}
fs.writeFileSync('_qa/css-results.json',JSON.stringify({method:'CSS rule resolution only; no layout renderer',checks},null,2));console.log(checks);
