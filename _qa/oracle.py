import json
from fractions import Fraction
from pathlib import Path
f=json.loads(Path('_qa/math-fixtures.json').read_text())
def op(a,o,b):
 a,b=Fraction(a),Fraction(b)
 return {'+':lambda:a+b,'-':lambda:a-b,'*':lambda:a*b,'/':lambda:a/b}[o]()
def route(r):
 n=r['numbers']; o=r['operators']; g=r['grouping']
 if len(n)==2:return op(n[0],o[0],n[1])
 # Independent shunting-yard evaluation, with explicit grouping.
 if g=='left':return op(op(n[0],o[0],n[1]),o[1],n[2])
 if g=='right':return op(n[0],o[0],op(n[1],o[1],n[2]))
 stack=[Fraction(n[0])]; ops=[]
 for oper,num in zip(o,n[1:]):
  while ops and ('*/'.find(ops[-1])>=0 or oper in '+-'):
   right=stack.pop();left=stack.pop();stack.append(op(left,ops.pop(),right))
  ops.append(oper); stack.append(Fraction(num))
 while ops:
  right=stack.pop();left=stack.pop();stack.append(op(left,ops.pop(),right))
 return stack[0]
counts={'rfdIndependentTasks':0,'rfdAlternativeRoutes':0,'softIndependentProducts':0,'fullIndependentProducts':0}
for t in f['rfd']:
 assert op(t['a'],{'add':'+','sub':'-','mul':'*','div':'/'}[t['type']],t['b'])==t['result']
 for r in t['alternatives']:assert route(r)==t['result'];counts['rfdAlternativeRoutes']+=1
 if t['type']=='div':assert 10**t['level']<=t['a']<10**(t['level']+1)
 counts['rfdIndependentTasks']+=1
for kind in ['soft','full']:
 for t in f[kind]:
  digits=t['code']['digits']; base=t['base']
  decoded=sum(d*11**i for i,d in enumerate(reversed(digits)))
  assert decoded==t['target']
  value=0
  for d in digits:value=value*11+base*d
  assert value==t['left']*t['right']==t['result']
  assert t['code']['anchor']+t['code']['remainder']==t['target']
  counts[kind+'IndependentProducts']+=1
Path('_qa/oracle-results.json').write_text(json.dumps(counts,indent=2));print(counts)
