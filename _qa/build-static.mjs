// Rebuild the English static content after changing translations or lessons.
// Engine and common.js render fixed examples; app.js never runs here.
import { Window } from 'happy-dom';
import fs from 'node:fs';

for (const file of ['index.html', 'rfd.html', 'killer-move.html', 'b11-soft.html', 'b11.html', 'legal.html']) {
  const source = fs.readFileSync(file, 'utf8');
  const w = new Window({ url: `https://brats11.com/${file}?lang=en`, settings: {
    disableJavaScriptFileLoading: true, disableCSSFileLoading: true,
    enableJavaScriptEvaluation: true, suppressInsecureJavaScriptEnvironmentWarning: true
  }});
  w.document.write(source);
  await w.happyDOM.whenAsyncComplete();
  w.eval(fs.readFileSync('assets/engine.js', 'utf8'));
  w.eval(fs.readFileSync('assets/common.js', 'utf8'));
  w.document.body.innerHTML = w.document.body.innerHTML.trimEnd() + '\n';
  fs.writeFileSync(file, '<!doctype html>\n' + w.document.documentElement.outerHTML + '\n');
  await w.happyDOM.close();
  console.log(`Static content: ${file}`);
}
