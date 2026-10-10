OPTIONALE TESTS – NICHT FÜR DEN WEBSITEBETRIEB ERFORDERLICH

Aus dem entpackten Website-Hauptverzeichnis ausführen:
  node _qa/math.cjs
  python3 _qa/oracle.py

Für DOM-/CSS-Simulation zusätzlich Node.js >= 20.19 und das Testpaket installieren:
  npm install --prefix _qa
  node _qa/dom-tests.mjs
  node _qa/css-tests.mjs
  node _qa/update-tests.mjs
  node _qa/killer-tests.mjs

Die Website selbst benötigt diese Installation nicht. DOM/CSS-Simulation
ist kein echter Browser- oder Gerätetest. Die Testprogramme schreiben ihre
Ergebnisdateien nach _qa. math.cjs erzeugt außerdem math-fixtures.json für
die unabhängige Fraction-Prüfung mit Python.

Nach Änderungen an Übersetzungen oder Lernbeispielen das statische englische
HTML aus dem Website-Hauptverzeichnis neu erzeugen:
  node _qa/build-static.mjs
Danach DOM- und Update-Prüfungen erneut ausführen. Der Generator führt engine.js
und common.js für die festen Beispiele aus; app.js läuft dabei nicht.
Es werden keine zufälligen Übungsaufgaben oder deren Lösungen ins HTML geschrieben.
