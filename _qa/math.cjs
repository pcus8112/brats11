const assert = require('node:assert/strict');
const fs = require('node:fs');
const E = require('../assets/engine.js');
const report = {integerInputs:0, rationalInputs:0, exactRoutes:0, codeRoundTrips:0, invalidCodes:0, rfdTasks:0, softTasks:0, fullTasks:0};
const valid = [['0',0],['-0',0],['000',0],['+0',0],['330',330],['0330',330],['+330',330],[' 330 ',330],['330.0',330],['330,0',330],['330.000000000000',330],['3,30',null],['3.30',null],['3,63',null],['3.63',null],['363',363],['363.000000000001',null],['-363',-363],['−363',-363],['-00363.00',-363],['1 234',1234],['1’234',1234],["1'234",1234],['1\u202f234',1234],['1\u00a0234',1234],['12 345 678',12345678],['1,234',null],['1.234',null],['1 234,00',1234],['1 234.00',1234],['1234,000',1234],['660/2',330],['-660/-2',330],['660.0 / 2,0',330],['0/2',0],['1/0',null],['0/0',null],['',null],[' ',null],['abc',null],['1a2',null],['1e3',null],['NaN',null],['Infinity',null],['0x10',null],['3,6,3',null],['3.6.3',null],['1,234.00',null],['1.234,00',null],['33 0',null],["3'30",null],['--3',null],['3-',null],['12/3/2',null],['9007199254740991',9007199254740991],['9007199254740992',null],['9007199254740991.1',null],['363.0000000000001',null],['1 234\u202f567',null],['3 30',null],['3 63',null],['1/3',null],['-1.5',null],['0.000000000001',null],['+1’234,0',1234]];
for (const [input,expected] of valid) {assert.equal(E.integerValue(input),expected,input); report.integerInputs++;}
for (const [input,n,d] of [['0',0,1],['3,30',33,10],['3.63',363,100],['-1/2',-1,2],['1/-2',-1,2],['-1/-2',1,2],['6/4',3,2],['0.125',1,8],['0,333333333333',333333333333,1000000000000],['1 000.5',2001,2]]) {const x=E.parseRational(input); assert.equal(x.numerator,BigInt(n),input);assert.equal(x.denominator,BigInt(d),input);report.rationalInputs++;}
const routes=[
[['48','30','1'],['+','-'],'normal',77,true],
[['83','30','1'],['-','+'],'normal',54,true],
[['30','7','14'],['*','-'],'normal',196,true],
[['120','6','6'],['/','+'],'normal',26,true],
[['48','12','6'],['+','/'],'left',10,true],
[['48','12','6'],['+','/'],'normal',50,true],
[['48','12','6'],['+','/'],'right',50,true],
[['24','6','2'],['/','/'],'normal',2,true],
[['24','6','2'],['/','/'],'right',8,true],
[['0','33'],['+'],'normal',33,true],
[['-3','11'],['*'],'normal',-33,true],
[['-3','-11'],['*'],'normal',33,true],
[['1/3','3'],['*'],'normal',1,true],
[['0,1','0.2','10'],['+','*'],'left',3,true],
[['363.000000000001','0'],['+'],'normal',363,false],
[['33','11','oops'],['*','+'],'normal',363,false],
[['33','0'],['/'],'normal',363,false],
[['1','2','2'],['/','*'],'normal',1,true],
[['1','2'],['/'],'normal',1,false],
[['33','11'],['*'],'normal',363,true],
[['33','11'],['*'],'normal',364,false],
[['77','1','-1'],['+','+'],'normal',77,true]];
for (const [values,ops,group,expected,correct] of routes){assert.equal(E.routeEquals(values,ops,group,expected),correct,JSON.stringify(values));report.exactRoutes++;}
const decode=code=>[...code].reduce((total,digit)=>total*11+(digit==='X'?10:Number(digit)),0);
for(const [length,min,max] of [[2,10,99],[3,100,999]])for(let n=min;n<=max;n++){
 const code=E.makeCode(n,length);assert.equal(code.text.length,length);assert.equal(decode(code.text),n);assert.equal(E.parseCode(code.text,length).text,code.text);assert.equal(E.parseCode(' '+code.text.toLowerCase()+' ',length).text,code.text);
 assert.equal(code.anchor+code.remainder,n);assert.ok(code.digits.every(d=>Number.isInteger(d)&&d>=0&&d<=10));report.codeRoundTrips++;
}
for(const [input,length] of [['',2],['1',2],['123',2],['1.2',2],['1,2',2],['1 2',2],['1Y',2],['-1',2],['26!',2],['0910',3],['09',3],['0XX!',3],['0 X',3],['<x>',3]]){assert.equal(E.parseCode(input,length),null,input);report.invalidCodes++;}
// Deterministic independent sample set; seed is recorded for reproducibility.
let seed=20261009; Math.random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};
const fixtures={rfd:[],soft:[],full:[]};
for(let level=1;level<=3;level++)for(const op of ['add','sub','mul','div','mixed'])for(let i=0;i<300;i++){
 const task=E.rfdTask(level,op); fixtures.rfd.push({level,op,...task});
 for(const route of task.alternatives) assert.ok(E.routeEquals(route.numbers.map(String),route.operators,route.grouping,task.result));
 report.rfdTasks++;
}
for(let level=1;level<=3;level++)for(let i=0;i<1000;i++){fixtures.soft.push({level,...E.softTask(level)});report.softTasks++;}
for(let i=0;i<1000;i++){fixtures.full.push(E.fullTask());report.fullTasks++;}
fs.writeFileSync('_qa/math-fixtures.json',JSON.stringify(fixtures));fs.writeFileSync('_qa/math-results.json',JSON.stringify(report,null,2));console.log(report);
