// Rebuild the English static content after changing translations or lessons.
// Only common.js runs: no random exercise or solution is embedded in HTML.
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
  w.eval(fs.readFileSync('assets/common.js', 'utf8'));
  fs.writeFileSync(file, '<!doctype html>\n' + w.document.documentElement.outerHTML + '\n');
  await w.happyDOM.close();
  console.log(`Static content: ${file}`);
}
