(() => {
  "use strict";

  const messages = {
    de: {
      "meta.index": "BRATS 11 — Home of the B11 Method",
      "meta.rfd": "RFD Training — BRATS 11",
      "meta.killer": "Killer Move ×11 — BRATS 11",
      "meta.soft": "B11 Soft — BRATS 11",
      "meta.full": "Full B11 — BRATS 11",
      "meta.legal": "Rechtliches — BRATS 11",
      "nav.home": "Start",
      "nav.rfd": "RFD",
      "nav.killer": "×11",
      "nav.soft": "B11 Soft",
      "nav.full": "Full B11",
      "nav.legal": "Rechtliches",
      "brand.method": "Home of the B11 Method",
      "brand.sse": "Singer Shamrock Enterprises",
      "brand.est": "Eine Marke von Pierre Christian Ulrich Singer, Entrepreneur individuel (EI) · EST. 2026",
      "lang.de": "Deutsch",
      "lang.en": "Englisch (USA)",
      "lang.fr": "Französisch (Kanada)",
      "footer.imprint": "Impressum",
      "footer.privacy": "Datenschutz",
      "footer.terms": "Nutzungsbedingungen",
      "footer.marketing": "Betrieben von Pierre Christian Ulrich Singer, Entrepreneur individuel (EI) · SIREN 131 236 408 · RCS Chalon-sur-Saône",
      "index.eyebrow": "Vier Trainingsstufen · eine Methode",
      "index.titleA": "Finde den",
      "index.titleB": "kürzeren Weg.",
      "index.lead": "BRATS 11 trainiert nicht das sture Abarbeiten einer Rechnung. Du lernst, Zahlen umzubauen, den Killer Move zu beherrschen und beide Fähigkeiten in der vollständigen B11-Methode zusammenzuführen.",
      "index.thought": "Hinterfrage die Regel. Behalte die Wahrheit. Streiche den Aufwand.",
      "index.card1.kicker": "01 · Grundlage",
      "index.card1.title": "RFD Training",
      "index.card1.text": "Zerlege Additionen, Subtraktionen, Multiplikationen und Divisionen in freundlichere Rechnungen.",
      "index.card2.kicker": "02 · Werkzeug",
      "index.card2.title": "Killer Move ×11",
      "index.card2.text": "Trainiere die Operation, die jede Stufe der B11-Leiter antreibt.",
      "index.card3.kicker": "03 · Vorstufe",
      "index.card3.title": "B11 Soft",
      "index.card3.text": "Wende die Methode mit einem zweistelligen B11-Faktor schrittweise an.",
      "index.card4.kicker": "04 · Methode",
      "index.card4.title": "Full B11",
      "index.card4.text": "Codiere einen dreistelligen Faktor und führe die vollständige Killer Ladder aus.",
      "common.level": "Schwierigkeitsstufe",
      "common.level1": "Stufe 1",
      "common.level2": "Stufe 2",
      "common.level3": "Stufe 3",
      "common.operation": "Rechenart",
      "common.mixed": "Gemischt",
      "common.addition": "Addition",
      "common.subtraction": "Subtraktion",
      "common.multiplication": "Multiplikation",
      "common.division": "Division",
      "common.task": "Aufgabe",
      "common.check": "Prüfen",
      "common.new": "Neue Aufgabe",
      "common.result": "Resultat",
      "common.correct": "Richtig.",
      "common.incorrect": "Noch nicht richtig.",
      "common.expected": "Richtig: {value}",
      "common.alternatives": "Kurze gültige Wege",
      "common.otherAlternatives": "Weitere kurze Wege",
      "common.routeValid": "Dein Rechenweg ist mathematisch gültig.",
      "common.routeDirect": "Das Resultat stimmt. Unten siehst du Wege, die die Rechnung zuerst vereinfachen.",
      "common.routeWrong": "Hier sind korrekte RFD-Wege für diese Aufgabe.",
      "common.mode": "Trainingsmodus",
      "common.modeApply": "Code anwenden",
      "common.modeCreate": "Code erstellen",
      "common.modeFull": "Alles selbst",
      "common.anchor": "Anker",
      "common.remainder": "Rest über dem Anker",
      "common.code": "B11-Code (X = 10)",
      "common.givenCode": "Vorgegebener Code",
      "common.start": "Startwert",
      "common.kmResult": "Killer-Move-Ergebnis",
      "common.addProduct": "Zusatzprodukt",
      "common.newTotal": "Neue Summe",
      "common.final": "Endergebnis",
      "common.allCorrect": "Alles richtig. Nächste Aufgabe!",
      "common.reviewFields": "Prüfe die markierten Felder.",
      "rfd.eyebrow": "Grundlage · Recursive Friendly Decomposition",
      "rfd.title": "Make it friendly.",
      "rfd.intro": "Baue die gegebene Rechnung in einen leichteren, aber gleichwertigen Weg um. Drei Zahlenfelder stehen für deine Abkürzung bereit; das vierte Feld gehört dem Resultat.",
      "rfd.routeTitle": "Deine Abkürzung",
      "rfd.routeHint": "Das dritte Zahlenfeld ist optional. Wähle bei Bedarf die Klammerstruktur.",
      "rfd.number1": "Zahl 1",
      "rfd.number2": "Zahl 2",
      "rfd.number3": "Zahl 3 (optional)",
      "rfd.structure": "Struktur",
      "rfd.structureNormal": "Normale Rechenregeln",
      "rfd.structureLeft": "(A ○ B) ○ C",
      "rfd.structureRight": "A ○ (B ○ C)",
      "rfd.preview": "Dein Weg erscheint hier.",
      "rfd.level1": "2-stellige Aufgaben",
      "rfd.level2": "3-stellige Aufgaben",
      "rfd.level3": "4-stellige Aufgaben",
      "killer.eyebrow": "Werkzeug · Eleven Move",
      "killer.title": "Killer Move ×11",
      "killer.intro": "Jede vollständige B11-Rechnung bewegt ihren Zwischenstand mit ×11 weiter. Trainiere zuerst die feste Identität 11x = 10x + x.",
      "killer.tenfold": "Zehnfacher Wert: {n} × 10",
      "killer.finalLabel": "Dann + {n}",
      "killer.level1": "2-stellige Zahlen",
      "killer.level2": "3-stellige Zahlen",
      "killer.level3": "4-stellige Zahlen",
      "killer.rule": "Killer Move",
      "killer.ruleText": "Verschiebe den Wert um eine Dezimalstelle und addiere den ursprünglichen Wert genau einmal.",
      "soft.eyebrow": "Vorstufe · zweistelliger B11-Faktor",
      "soft.title": "B11 Soft",
      "soft.intro": "Ein zweistelliger Faktor wird als 11a + b codiert. Ein Startprodukt, ein Killer Move und ein Zusatzprodukt führen zum Ergebnis.",
      "soft.level1": "2-stellig × 2-stellig",
      "soft.level2": "3-stellig × 2-stellig",
      "soft.level3": "4-stellig × 2-stellig",
      "soft.codeHint": "Soft-Codes haben zwei Stellen. X steht für den Wert zehn.",
      "soft.anchorLabel": "Größter 11-Anker",
      "soft.kmLabel": "Startwert × 11",
      "soft.addLabel": "Großer Faktor × zweite Codeziffer",
      "soft.sumLabel": "Killer Move + Zusatzprodukt",
      "full.eyebrow": "Methode · dreistellig × dreistellig",
      "full.title": "Full B11",
      "full.intro": "Codiere den kleineren Faktor als 121a + 11b + c. Danach folgen Start, zwei Killer Moves und zwei kontrollierte Additionen.",
      "full.codeHint": "Full-B11-Codes haben drei Stellen. Bei Zahlen unter 121 beginnt der Code mit 0; X steht für zehn.",
      "full.anchorLabel": "Größter 121-Anker",
      "full.km1": "Killer Move 1",
      "full.add1": "Zusatzprodukt mit b",
      "full.sum1": "Erste Summe",
      "full.km2": "Killer Move 2",
      "full.add2": "Zusatzprodukt mit c",
      "full.sum2": "Zweite Summe",
      "legal.eyebrow": "BRATS 11",
      "legal.title": "Rechtliche Informationen",
      "legal.intro": "Impressum, Datenschutz und Bedingungen für die Trainingsseiten.",
      "legal.imprintTitle": "Impressum",
      "legal.operator": "Verantwortlich für diese Website",
      "legal.operatorValue": "Pierre Christian Ulrich Singer, Entrepreneur individuel (EI)",
      "legal.idea": "Markenstatus",
      "legal.ideaValue": "Singer Shamrock Enterprises — eine Marke von Pierre Christian Ulrich Singer, Entrepreneur individuel (EI). EST. 2026 ist Bestandteil des Brandings.",
      "legal.contact": "Kontakt und ladungsfähige Anschrift",
      "legal.registration": "SIREN 131 236 408 · RCS Chalon-sur-Saône",
      "legal.hosting": "Hosting",
      "legal.hostingValue": "Diese Website wird über GitHub Pages von GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, bereitgestellt.",
      "legal.privacyTitle": "Datenschutz",
      "legal.privacy1": "Diese statische Version verarbeitet Aufgaben und Eingaben ausschließlich im Browser. Sie übermittelt keine Trainingsantworten an einen Server und setzt keine Analyse- oder Werbe-Cookies.",
      "legal.privacy2": "Die gewählte Sprache kann lokal im Browser gespeichert werden. Diese Einstellung bleibt auf dem jeweiligen Gerät und kann durch Löschen der Browserdaten entfernt werden.",
      "legal.privacy3": "Falls später Benutzerkonten, Reichweitenmessung, Zahlungsdienste oder externe Inhalte ergänzt werden, muss diese Datenschutzerklärung vor deren Aktivierung angepasst werden.",
      "legal.termsTitle": "Nutzungsbedingungen",
      "legal.terms1": "BRATS 11 ist ein Lern- und Übungsangebot für strategisches Kopfrechnen. Die dargestellten Wege dienen dem Training mathematisch gleichwertiger Umformungen.",
      "legal.terms2": "Trotz sorgfältiger Prüfung kann keine Gewähr für ununterbrochene Verfügbarkeit oder vollständige Fehlerfreiheit übernommen werden. Entscheidungen mit finanziellen, rechtlichen, medizinischen oder sicherheitsrelevanten Folgen dürfen nicht allein auf Ausgaben dieser Seite gestützt werden.",
      "legal.terms3": "Inhalte, Gestaltung, Namen und Trainingslogik dürfen ohne Erlaubnis nicht als eigenes Produkt vervielfältigt oder kommerziell verbreitet werden. Gesetzlich zulässige private Nutzung und zwingende Schranken des Urheberrechts bleiben unberührt.",
      "legal.version": "Stand: 23. September 2026"
    },
    en: {
      "meta.index": "BRATS 11 — Home of the B11 Method",
      "meta.rfd": "RFD Training — BRATS 11",
      "meta.killer": "Killer Move ×11 — BRATS 11",
      "meta.soft": "B11 Soft — BRATS 11",
      "meta.full": "Full B11 — BRATS 11",
      "meta.legal": "Legal — BRATS 11",
      "nav.home": "Home", "nav.rfd": "RFD", "nav.killer": "×11", "nav.soft": "B11 Soft", "nav.full": "Full B11", "nav.legal": "Legal",
      "brand.method": "Home of the B11 Method", "brand.sse": "Singer Shamrock Enterprises", "brand.est": "A brand of Pierre Christian Ulrich Singer, Entrepreneur individuel (EI) · EST. 2026",
      "lang.de": "German", "lang.en": "English (USA)", "lang.fr": "French (Canada)",
      "footer.imprint": "Legal notice", "footer.privacy": "Privacy", "footer.terms": "Terms", "footer.marketing": "Operated by Pierre Christian Ulrich Singer, Entrepreneur individuel (EI) · SIREN 131 236 408 · RCS Chalon-sur-Saône",
      "index.eyebrow": "Four training stages · one method", "index.titleA": "Find the", "index.titleB": "shorter route.",
      "index.lead": "BRATS 11 does not train you to grind through a calculation. Learn to rebuild numbers, master the Killer Move, and combine both skills in the complete B11 Method.",
      "index.thought": "Question the rule. Keep the truth. Cut the grind.",
      "index.card1.kicker": "01 · Foundation", "index.card1.title": "RFD Training", "index.card1.text": "Rebuild addition, subtraction, multiplication, and division as friendlier calculations.",
      "index.card2.kicker": "02 · Tool", "index.card2.title": "Killer Move ×11", "index.card2.text": "Train the operation that drives every step of the B11 ladder.",
      "index.card3.kicker": "03 · Bridge", "index.card3.title": "B11 Soft", "index.card3.text": "Apply the method step by step with a two-digit B11 factor.",
      "index.card4.kicker": "04 · Method", "index.card4.title": "Full B11", "index.card4.text": "Code a three-digit factor and execute the complete Killer Ladder.",
      "common.level": "Difficulty", "common.level1": "Level 1", "common.level2": "Level 2", "common.level3": "Level 3",
      "common.operation": "Operation", "common.mixed": "Mixed", "common.addition": "Addition", "common.subtraction": "Subtraction", "common.multiplication": "Multiplication", "common.division": "Division",
      "common.task": "Problem", "common.check": "Check", "common.new": "New problem", "common.result": "Result", "common.correct": "Correct.", "common.incorrect": "Not yet correct.", "common.expected": "Correct: {value}",
      "common.alternatives": "Short valid routes", "common.otherAlternatives": "Other short routes", "common.routeValid": "Your route is mathematically valid.", "common.routeDirect": "Your result is correct. Below are routes that simplify the problem first.", "common.routeWrong": "Here are correct RFD routes for this problem.",
      "common.mode": "Training mode", "common.modeApply": "Apply code", "common.modeCreate": "Build code", "common.modeFull": "Do everything",
      "common.anchor": "Anchor", "common.remainder": "Remainder above anchor", "common.code": "B11 code (X = 10)", "common.givenCode": "Given code",
      "common.start": "Starting value", "common.kmResult": "Killer Move result", "common.addProduct": "Added product", "common.newTotal": "New total", "common.final": "Final result",
      "common.allCorrect": "All correct. Next problem!", "common.reviewFields": "Review the marked fields.",
      "rfd.eyebrow": "Foundation · Recursive Friendly Decomposition", "rfd.title": "Make it friendly.",
      "rfd.intro": "Rebuild the given problem as an easier but equivalent route. Three number fields are available for your shortcut; the fourth field is for the result.",
      "rfd.routeTitle": "Your shortcut", "rfd.routeHint": "The third number is optional. Choose a grouping when needed.",
      "rfd.number1": "Number 1", "rfd.number2": "Number 2", "rfd.number3": "Number 3 (optional)", "rfd.structure": "Grouping",
      "rfd.structureNormal": "Standard order of operations", "rfd.structureLeft": "(A ○ B) ○ C", "rfd.structureRight": "A ○ (B ○ C)", "rfd.preview": "Your route appears here.",
      "rfd.level1": "2-digit problems", "rfd.level2": "3-digit problems", "rfd.level3": "4-digit problems",
      "killer.eyebrow": "Tool · Eleven Move", "killer.title": "Killer Move ×11", "killer.intro": "Every complete B11 calculation advances its running total with ×11. First master the fixed identity 11x = 10x + x.",
      "killer.tenfold": "Tenfold value: {n} × 10", "killer.finalLabel": "Then + {n}", "killer.level1": "2-digit numbers", "killer.level2": "3-digit numbers", "killer.level3": "4-digit numbers",
      "killer.rule": "Killer Move", "killer.ruleText": "Shift the value one decimal place and add the original value exactly once.",
      "soft.eyebrow": "Bridge · two-digit B11 factor", "soft.title": "B11 Soft", "soft.intro": "A two-digit factor is coded as 11a + b. One starting product, one Killer Move, and one added product lead to the answer.",
      "soft.level1": "2-digit × 2-digit", "soft.level2": "3-digit × 2-digit", "soft.level3": "4-digit × 2-digit", "soft.codeHint": "Soft codes have two digits. X represents ten.",
      "soft.anchorLabel": "Largest 11 anchor", "soft.kmLabel": "Starting value × 11", "soft.addLabel": "Large factor × second code digit", "soft.sumLabel": "Killer Move + added product",
      "full.eyebrow": "Method · 3-digit × 3-digit", "full.title": "Full B11", "full.intro": "Code the smaller factor as 121a + 11b + c. Then execute the start, two Killer Moves, and two controlled additions.",
      "full.codeHint": "Full B11 codes have three digits. Numbers below 121 begin with 0; X represents ten.", "full.anchorLabel": "Largest 121 anchor",
      "full.km1": "Killer Move 1", "full.add1": "Added product with b", "full.sum1": "First total", "full.km2": "Killer Move 2", "full.add2": "Added product with c", "full.sum2": "Second total",
      "legal.eyebrow": "BRATS 11", "legal.title": "Legal information", "legal.intro": "Legal notice, privacy information, and terms for the training site.",
      "legal.imprintTitle": "Legal notice", "legal.operator": "Responsible for this website", "legal.operatorValue": "Pierre Christian Ulrich Singer, Entrepreneur individuel (EI)",
      "legal.idea": "Brand status", "legal.ideaValue": "Singer Shamrock Enterprises — a brand of Pierre Christian Ulrich Singer, Entrepreneur individuel (EI). EST. 2026 is part of the branding.",
      "legal.contact": "Contact and service address", "legal.registration": "SIREN 131 236 408 · RCS Chalon-sur-Saône",
      "legal.hosting": "Hosting", "legal.hostingValue": "This website is hosted through GitHub Pages by GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States.",
      "legal.privacyTitle": "Privacy", "legal.privacy1": "This static version processes problems and answers entirely in the browser. It does not send training answers to a server and does not use analytics or advertising cookies.",
      "legal.privacy2": "The selected language may be stored locally in the browser. It remains on that device and can be removed by clearing browser data.",
      "legal.privacy3": "If user accounts, audience measurement, payment services, or external content are added later, this notice must be updated before those services are activated.",
      "legal.termsTitle": "Terms of use", "legal.terms1": "BRATS 11 is a learning and practice tool for strategic mental arithmetic. The displayed routes are intended to train mathematically equivalent transformations.",
      "legal.terms2": "Although the site is checked carefully, uninterrupted availability and complete freedom from errors cannot be guaranteed. Do not base financial, legal, medical, or safety-critical decisions solely on this site's output.",
      "legal.terms3": "The content, design, names, and training logic may not be reproduced or commercially distributed as another product without permission. Statutory private use and mandatory copyright exceptions remain unaffected.",
      "legal.version": "Last updated: September 23, 2026"
    },
    fr: {
      "meta.index": "BRATS 11 — Accueil de la méthode B11", "meta.rfd": "Entraînement RFD — BRATS 11", "meta.killer": "Killer Move ×11 — BRATS 11", "meta.soft": "B11 Soft — BRATS 11", "meta.full": "B11 complet — BRATS 11", "meta.legal": "Mentions légales — BRATS 11",
      "nav.home": "Accueil", "nav.rfd": "RFD", "nav.killer": "×11", "nav.soft": "B11 Soft", "nav.full": "B11 complet", "nav.legal": "Mentions légales",
      "brand.method": "Accueil de la méthode B11", "brand.sse": "Singer Shamrock Enterprises", "brand.est": "Une marque de Pierre Christian Ulrich Singer, Entrepreneur individuel (EI) · EST. 2026",
      "lang.de": "Allemand", "lang.en": "Anglais (É.-U.)", "lang.fr": "Français (Canada)",
      "footer.imprint": "Mentions légales", "footer.privacy": "Confidentialité", "footer.terms": "Conditions", "footer.marketing": "Exploité par Pierre Christian Ulrich Singer, Entrepreneur individuel (EI) · SIREN 131 236 408 · RCS Chalon-sur-Saône",
      "index.eyebrow": "Quatre étapes d’entraînement · une méthode", "index.titleA": "Trouve un", "index.titleB": "chemin plus simple.",
      "index.lead": "BRATS 11 ne t’entraîne pas à suivre mécaniquement un calcul. Apprends à reconstruire les nombres, à maîtriser le Killer Move et à réunir les deux habiletés dans la méthode B11 complète.",
      "index.thought": "Remets la règle en question. Garde ce qui est vrai. Coupe le superflu.",
      "index.card1.kicker": "01 · Fondation", "index.card1.title": "Entraînement RFD", "index.card1.text": "Transforme additions, soustractions, multiplications et divisions en calculs plus faciles.",
      "index.card2.kicker": "02 · Outil", "index.card2.title": "Killer Move ×11", "index.card2.text": "Entraîne l’opération qui fait avancer chaque étape de l’échelle B11.",
      "index.card3.kicker": "03 · Passage", "index.card3.title": "B11 Soft", "index.card3.text": "Applique la méthode étape par étape avec un facteur B11 à deux chiffres.",
      "index.card4.kicker": "04 · Méthode", "index.card4.title": "B11 complet", "index.card4.text": "Code un facteur à trois chiffres et exécute toute la Killer Ladder.",
      "common.level": "Niveau de difficulté", "common.level1": "Niveau 1", "common.level2": "Niveau 2", "common.level3": "Niveau 3",
      "common.operation": "Opération", "common.mixed": "Mélangé", "common.addition": "Addition", "common.subtraction": "Soustraction", "common.multiplication": "Multiplication", "common.division": "Division",
      "common.task": "Exercice", "common.check": "Vérifier", "common.new": "Nouvel exercice", "common.result": "Résultat", "common.correct": "Exact.", "common.incorrect": "Pas encore exact.", "common.expected": "Réponse : {value}",
      "common.alternatives": "Chemins courts valides", "common.otherAlternatives": "Autres chemins courts", "common.routeValid": "Ton chemin est mathématiquement valide.", "common.routeDirect": "Ton résultat est exact. Voici des chemins qui simplifient d’abord le calcul.", "common.routeWrong": "Voici des chemins RFD exacts pour cet exercice.",
      "common.mode": "Mode d’entraînement", "common.modeApply": "Appliquer le code", "common.modeCreate": "Créer le code", "common.modeFull": "Tout faire",
      "common.anchor": "Ancrage", "common.remainder": "Reste au-dessus de l’ancrage", "common.code": "Code B11 (X = 10)", "common.givenCode": "Code fourni",
      "common.start": "Valeur de départ", "common.kmResult": "Résultat du Killer Move", "common.addProduct": "Produit à ajouter", "common.newTotal": "Nouveau total", "common.final": "Résultat final",
      "common.allCorrect": "Tout est exact. Prochain exercice!", "common.reviewFields": "Vérifie les champs indiqués.",
      "rfd.eyebrow": "Fondation · Recursive Friendly Decomposition", "rfd.title": "Rends-le facile.",
      "rfd.intro": "Transforme le calcul donné en un chemin plus facile, mais équivalent. Trois champs numériques servent à ton raccourci; le quatrième sert au résultat.",
      "rfd.routeTitle": "Ton raccourci", "rfd.routeHint": "Le troisième nombre est facultatif. Choisis le regroupement au besoin.",
      "rfd.number1": "Nombre 1", "rfd.number2": "Nombre 2", "rfd.number3": "Nombre 3 (facultatif)", "rfd.structure": "Regroupement",
      "rfd.structureNormal": "Priorité normale des opérations", "rfd.structureLeft": "(A ○ B) ○ C", "rfd.structureRight": "A ○ (B ○ C)", "rfd.preview": "Ton chemin apparaîtra ici.",
      "rfd.level1": "Exercices à 2 chiffres", "rfd.level2": "Exercices à 3 chiffres", "rfd.level3": "Exercices à 4 chiffres",
      "killer.eyebrow": "Outil · Eleven Move", "killer.title": "Killer Move ×11", "killer.intro": "Chaque calcul B11 complet fait avancer son total avec ×11. Maîtrise d’abord l’identité fixe 11x = 10x + x.",
      "killer.tenfold": "Valeur décuplée : {n} × 10", "killer.finalLabel": "Puis + {n}", "killer.level1": "Nombres à 2 chiffres", "killer.level2": "Nombres à 3 chiffres", "killer.level3": "Nombres à 4 chiffres",
      "killer.rule": "Killer Move", "killer.ruleText": "Décale la valeur d’une position décimale, puis ajoute la valeur originale une seule fois.",
      "soft.eyebrow": "Passage · facteur B11 à deux chiffres", "soft.title": "B11 Soft", "soft.intro": "Un facteur à deux chiffres est codé sous la forme 11a + b. Un produit de départ, un Killer Move et un produit ajouté donnent la réponse.",
      "soft.level1": "2 chiffres × 2 chiffres", "soft.level2": "3 chiffres × 2 chiffres", "soft.level3": "4 chiffres × 2 chiffres", "soft.codeHint": "Les codes Soft ont deux positions. X représente dix.",
      "soft.anchorLabel": "Plus grand ancrage de 11", "soft.kmLabel": "Valeur de départ × 11", "soft.addLabel": "Grand facteur × deuxième chiffre du code", "soft.sumLabel": "Killer Move + produit ajouté",
      "full.eyebrow": "Méthode · 3 chiffres × 3 chiffres", "full.title": "B11 complet", "full.intro": "Code le plus petit facteur sous la forme 121a + 11b + c. Exécute ensuite le départ, deux Killer Moves et deux additions contrôlées.",
      "full.codeHint": "Les codes B11 complets ont trois positions. Les nombres sous 121 commencent par 0; X représente dix.", "full.anchorLabel": "Plus grand ancrage de 121",
      "full.km1": "Killer Move 1", "full.add1": "Produit ajouté avec b", "full.sum1": "Premier total", "full.km2": "Killer Move 2", "full.add2": "Produit ajouté avec c", "full.sum2": "Deuxième total",
      "legal.eyebrow": "BRATS 11", "legal.title": "Informations juridiques", "legal.intro": "Mentions légales, confidentialité et conditions des pages d’entraînement.",
      "legal.imprintTitle": "Mentions légales", "legal.operator": "Responsable de ce site", "legal.operatorValue": "Pierre Christian Ulrich Singer, Entrepreneur individuel (EI)",
      "legal.idea": "Statut de la marque", "legal.ideaValue": "Singer Shamrock Enterprises — une marque de Pierre Christian Ulrich Singer, Entrepreneur individuel (EI). EST. 2026 fait partie de l’identité visuelle.",
      "legal.contact": "Coordonnées et adresse de signification", "legal.registration": "SIREN 131 236 408 · RCS Chalon-sur-Saône",
      "legal.hosting": "Hébergement", "legal.hostingValue": "Ce site est hébergé par GitHub Pages, un service de GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.",
      "legal.privacyTitle": "Confidentialité", "legal.privacy1": "Cette version statique traite les exercices et les réponses entièrement dans le navigateur. Elle ne transmet aucune réponse d’entraînement à un serveur et n’utilise aucun témoin analytique ou publicitaire.",
      "legal.privacy2": "La langue choisie peut être enregistrée localement dans le navigateur. Ce réglage reste sur l’appareil et peut être supprimé en effaçant les données de navigation.",
      "legal.privacy3": "Si des comptes, des mesures d’audience, des services de paiement ou du contenu externe sont ajoutés plus tard, le présent avis devra être mis à jour avant leur activation.",
      "legal.termsTitle": "Conditions d’utilisation", "legal.terms1": "BRATS 11 est un outil d’apprentissage et de pratique du calcul mental stratégique. Les chemins affichés servent à entraîner des transformations mathématiquement équivalentes.",
      "legal.terms2": "Malgré une vérification attentive, la disponibilité continue et l’absence totale d’erreurs ne peuvent être garanties. Aucune décision financière, juridique, médicale ou liée à la sécurité ne doit reposer uniquement sur les résultats de ce site.",
      "legal.terms3": "Le contenu, la conception, les noms et la logique d’entraînement ne peuvent être reproduits ou distribués commercialement comme un autre produit sans autorisation. Les usages privés et exceptions obligatoires prévus par la loi demeurent inchangés.",
      "legal.version": "Mise à jour : 23 septembre 2026"
    }
  };

  const refinements = {"en": {"index.lead": "Free mental-math practice: turn awkward calculations into manageable steps. Start with RFD, practise ×11, then build up to two- and three-digit multiplication with B11.", "index.thought": "A useful route depends on the problem. Learn the method, then choose what works for you.", "home.example": "Try the idea: 48 + 29 = 48 + 30 − 1 = 77. Round 29 up by 1, then subtract that extra 1.", "home.start": "Start here: RFD", "home.free": "Free · No account · Practise at your own pace", "booklet": "Need more explanation? Explore our learning booklets at Singer Shamrock.", "learn.title": "How it works — explained step by step", "learn.try": "Go to the exercises", "learn.next": "Next stage", "common.inputHelp": "Numbers: . or , is a decimal separator, never a thousands separator. For thousands use 1 234 or 1’234, or write 1234. Fractions such as 6/2 are allowed. Answers must have the exact requested value; no rounding.", "common.invalidNumber": "Enter an exact whole-number value (for example 330, 330.0 or 660/2). Check the separators; an empty field is not zero.", "common.invalidRoute": "Check every filled number field and the grouping. Decimals and fractions are allowed; division by zero is not. Leave the optional third field empty if unused.", "common.invalidCode": "Use exactly two symbols for Soft or three for Full B11: 0–9 or X (ten). Keep leading zeros; no spaces inside the code.", "common.codeFirst": "Correct the code first, then check the ladder again. The ladder labels follow your entered code.", "common.navLabel": "Main navigation", "common.languageLabel": "Language", "common.trainingLabel": "Training stages", "common.operator1": "First operator", "common.operator2": "Second operator", "soft.ladder": "Start → ×11 → add (base × b)", "full.ladder": "Start → ×11 → add (base × b) → ×11 → add (base × c)", "common.allCorrect": "All correct. You can review the steps or try another problem.", "killer.ruleText": "Each box is one decimal place. For a total of 10 or more, keep the units digit and carry 1 to the box on the left. Include any incoming carry: it can trigger another carry. The first digit can change, and an extra leading digit can appear.", "legal.version": "Last updated: October 9, 2026", "killer.intro": "Multiply by 11 using neighbouring digits. Keep the outside digits, add each neighbouring pair, then resolve carries from right to left.", "killer.rule": "Neighbour-digit trick", "killer.pairsTitle": "1. Add neighbouring digits", "killer.pairsHelp": "Fill each middle box with the full sum of the pair above it (0–18). The first and last digits are supplied. Keep 11 as 11 at this stage; handle carries in the final answer.", "killer.resultTitle": "2. Resolve carries and write the result", "killer.finalLabel": "Result after all carries", "killer.first": "First", "killer.last": "Last", "killer.pairAria": "Neighbour pair {position}: {a} plus {b}", "killer.rawLabel": "Neighbour sums and outside digits — one box per place", "killer.resolvedLabel": "After resolving carries from right to left", "killer.carryLegend": "A small +1 above a box is a carry arriving from the right. Highlighted boxes pass a carry to the left.", "killer.carryWalk": "Follow the carries, from right to left", "killer.carryStep": "Place {position} from the left: {raw} + {incoming} incoming carry = {total}. Write {digit}; carry {outgoing} to the left.", "killer.leadingCarry": "Write the remaining carry {value} as a new digit at the far left.", "killer.level4": "5–6-digit numbers", "index.card2.text": "Multiply by 11 using neighbouring digit sums and carries — the Killer Move used throughout B11.", "legal.sections": "Legal sections"}, "de": {"index.lead": "Kostenlos Kopfrechnen üben: Zerlege schwierige Rechnungen in überschaubare Schritte. Starte mit RFD, übe ×11 und lerne anschließend mit B11 zwei- und dreistellige Zahlen zu multiplizieren.", "index.thought": "Welcher Weg hilft, hängt von der Aufgabe ab. Lerne die Methode und entscheide, was für dich passt.", "home.example": "Probiere die Idee: 48 + 29 = 48 + 30 − 1 = 77. Erhöhe 29 um 1 und ziehe diese zusätzliche 1 danach wieder ab.", "home.start": "Hier beginnen: RFD", "home.free": "Kostenlos · Ohne Anmeldung · In deinem Tempo", "booklet": "Mehr Erklärungen gewünscht? Entdecke unsere Lernhefte bei Singer Shamrock.", "learn.title": "So funktioniert es — Schritt für Schritt", "learn.try": "Zu den Übungen", "learn.next": "Nächste Lernstufe", "common.inputHelp": "Zahlen: Punkt oder Komma ist ein Dezimalzeichen, niemals ein Tausenderzeichen. Schreibe für Tausender 1 234, 1’234 oder 1234. Brüche wie 6/2 sind erlaubt. Antworten müssen den exakten gefragten Wert haben; nicht runden.", "common.invalidNumber": "Gib einen exakten ganzzahligen Wert ein (z. B. 330, 330,0 oder 660/2). Prüfe die Trennzeichen; ein leeres Feld ist nicht Null.", "common.invalidRoute": "Prüfe alle ausgefüllten Zahlenfelder und die Klammerstruktur. Dezimalzahlen und Brüche sind erlaubt; Division durch Null nicht. Lasse das optionale dritte Feld bei Nichtgebrauch leer.", "common.invalidCode": "Verwende genau zwei Zeichen für Soft oder drei für Full B11: 0–9 oder X (zehn). Führende Nullen bleiben erhalten; keine Leerzeichen im Code.", "common.codeFirst": "Korrigiere zuerst den Code und prüfe dann die Leiter erneut. Die Beschriftungen folgen deinem eingegebenen Code.", "common.navLabel": "Hauptnavigation", "common.languageLabel": "Sprache", "common.trainingLabel": "Lernstufen", "common.operator1": "Erste Rechenoperation", "common.operator2": "Zweite Rechenoperation", "soft.ladder": "Start → ×11 → (Grundfaktor × b) addieren", "full.ladder": "Start → ×11 → (Grundfaktor × b) addieren → ×11 → (Grundfaktor × c) addieren", "common.allCorrect": "Alles richtig. Schau dir die Schritte nochmals an oder wähle eine neue Aufgabe.", "rfd.title": "Mach es einfacher.", "killer.ruleText": "Jedes Kästchen steht für eine Dezimalstelle. Ab 10 bleibt die Einerziffer stehen; 1 geht als Übertrag ins linke Kästchen. Rechne ankommende Überträge mit: Sie können weitere Überträge auslösen. Auch die erste Ziffer kann sich ändern; vorne kann eine neue Ziffer entstehen.", "legal.version": "Stand: 9. Oktober 2026", "killer.intro": "Multipliziere mit 11 über benachbarte Ziffern. Übernimm die Randziffern, addiere jedes Nachbarpaar und verarbeite anschließend die Überträge von rechts nach links.", "killer.rule": "Nachbarziffern-Trick", "killer.pairsTitle": "1. Benachbarte Ziffern addieren", "killer.pairsHelp": "Trage in jedes mittlere Kästchen die vollständige Summe des darüberstehenden Ziffernpaars ein (0–18). Erste und letzte Ziffer sind vorgegeben. Lasse eine 11 hier als 11 stehen; die Überträge verarbeitest du beim Endergebnis.", "killer.resultTitle": "2. Überträge verarbeiten und Ergebnis eintragen", "killer.finalLabel": "Ergebnis nach allen Überträgen", "killer.first": "Erste", "killer.last": "Letzte", "killer.pairAria": "Nachbarpaar {position}: {a} plus {b}", "killer.rawLabel": "Nachbarsummen und Randziffern – ein Kästchen je Stelle", "killer.resolvedLabel": "Nach den Überträgen von rechts nach links", "killer.carryLegend": "Eine kleine +1 über einem Kästchen kommt als Übertrag von rechts. Hervorgehobene Kästchen geben einen Übertrag nach links weiter.", "killer.carryWalk": "Überträge von rechts nach links nachvollziehen", "killer.carryStep": "Stelle {position} von links: {raw} + {incoming} ankommender Übertrag = {total}. Schreibe {digit}; übertrage {outgoing} nach links.", "killer.leadingCarry": "Schreibe den verbleibenden Übertrag {value} als neue Ziffer ganz nach links.", "killer.level4": "5–6-stellige Zahlen", "index.card2.text": "Mit Nachbarziffernsummen und Überträgen mal 11 rechnen – der Killer Move für die B11-Leiter.", "legal.sections": "Rechtliche Abschnitte"}, "fr": {"index.lead": "Entraîne-toi gratuitement au calcul mental : transforme les calculs difficiles en étapes simples. Commence par RFD, entraîne-toi à multiplier par 11, puis apprends à multiplier des nombres à deux et trois chiffres avec B11.", "index.thought": "La méthode la plus pratique dépend du calcul. Apprends les étapes, puis choisis ce qui te convient.", "home.example": "Essaie cette idée : 48 + 29 = 48 + 30 − 1 = 77. Augmente 29 de 1, puis retire ce 1 ajouté en trop.", "home.start": "Commencer par RFD", "home.free": "Gratuit · Sans inscription · À ton rythme", "booklet": "Besoin d'explications supplémentaires ? Découvrez nos livrets pédagogiques sur Singer Shamrock.", "learn.title": "Comprendre la méthode — étape par étape", "learn.try": "Passer aux exercices", "learn.next": "Étape suivante", "common.inputHelp": "Nombres : la virgule ou le point sépare les décimales, jamais les milliers. Pour les milliers, écris 1 234, 1’234 ou 1234. Les fractions comme 6/2 sont acceptées. La réponse doit avoir la valeur exacte demandée, sans arrondi.", "common.invalidNumber": "Entre une valeur entière exacte (par exemple 330, 330,0 ou 660/2). Vérifie les séparateurs ; un champ vide ne vaut pas zéro.", "common.invalidRoute": "Vérifie tous les champs remplis et les parenthèses. Les décimaux et les fractions sont acceptés ; la division par zéro ne l’est pas. Laisse le troisième champ vide si tu ne l’utilises pas.", "common.invalidCode": "Utilise exactement deux symboles pour Soft ou trois pour B11 complet : 0–9 ou X (dix). Garde les zéros initiaux ; pas d’espace à l’intérieur du code.", "common.codeFirst": "Corrige d’abord le code, puis vérifie à nouveau les étapes de calcul. Les libellés suivent le code que tu as saisi.", "common.navLabel": "Navigation principale", "common.languageLabel": "Langue", "common.trainingLabel": "Étapes d’apprentissage", "common.operator1": "Première opération", "common.operator2": "Deuxième opération", "soft.ladder": "Départ → ×11 → ajouter (facteur de base × b)", "full.ladder": "Départ → ×11 → ajouter (facteur de base × b) → ×11 → ajouter (facteur de base × c)", "common.allCorrect": "Tout est juste. Relis les étapes ou essaie un nouvel exercice.", "common.mixed": "Opérations mélangées", "common.anchor": "Nombre repère", "common.remainder": "Reste après retrait du nombre repère", "soft.anchorLabel": "Plus grand multiple de 11 inférieur ou égal au facteur", "full.anchorLabel": "Plus grand multiple de 121 inférieur ou égal au facteur", "soft.kmLabel": "Valeur de départ × 11", "full.title": "B11 complet", "index.card4.text": "Code un facteur à trois chiffres et effectue toute la suite de calculs B11.", "rfd.eyebrow": "Base · RFD : décomposer pour calculer plus facilement", "rfd.intro": "Transforme le calcul donné en un calcul plus simple de même valeur. Les trois premiers champs servent aux nombres de ton calcul ; le dernier sert au résultat.", "rfd.structureNormal": "Priorités opératoires usuelles", "killer.eyebrow": "Outil · Multiplier par onze", "killer.ruleText": "Chaque case représente une position décimale. Dès que le total atteint 10, garde le chiffre des unités et reporte 1 dans la case de gauche. Ajoute aussi la retenue reçue : elle peut en provoquer une autre. Le premier chiffre peut changer et un chiffre supplémentaire peut apparaître à gauche.", "full.intro": "Écris le plus petit facteur sous la forme 121a + 11b + c. Calcule ensuite un produit de départ, puis deux étapes « multiplier par 11 et ajouter ».", "soft.codeHint": "Le code Soft contient deux symboles. X représente dix.", "full.codeHint": "Le code B11 complet contient trois symboles. Pour un nombre inférieur à 121, garde le zéro initial. X représente dix.", "legal.version": "Mise à jour : 9 octobre 2026", "killer.intro": "Multiplie par 11 avec les chiffres voisins. Recopie les chiffres des extrémités, additionne chaque paire voisine, puis traite les retenues de droite à gauche.", "killer.rule": "Astuce des chiffres voisins", "killer.pairsTitle": "1. Additionne les chiffres voisins", "killer.pairsHelp": "Dans chaque case du milieu, inscris la somme complète de la paire indiquée au-dessus (0 à 18). Le premier et le dernier chiffre sont fournis. Garde 11 tel quel ici; traite les retenues dans le résultat final.", "killer.resultTitle": "2. Traite les retenues et inscris le résultat", "killer.finalLabel": "Résultat après toutes les retenues", "killer.first": "Début", "killer.last": "Fin", "killer.pairAria": "Paire voisine {position} : {a} plus {b}", "killer.rawLabel": "Sommes voisines et chiffres des extrémités — une case par position", "killer.resolvedLabel": "Après les retenues, de droite à gauche", "killer.carryLegend": "Un petit +1 au-dessus d’une case est une retenue reçue de droite. Les cases en surbrillance transmettent une retenue à gauche.", "killer.carryWalk": "Suis les retenues, de droite à gauche", "killer.carryStep": "Position {position} depuis la gauche : {raw} + {incoming} de retenue reçue = {total}. Écris {digit}; reporte {outgoing} à gauche.", "killer.leadingCarry": "Écris la retenue restante {value} comme nouveau chiffre tout à gauche.", "killer.level4": "Nombres à 5 ou 6 chiffres", "index.card2.text": "Multiplie par 11 avec les sommes de chiffres voisins et les retenues : le Killer Move de la méthode B11.", "legal.sections": "Sections juridiques"}};
  const lessons = {"en": {"rfd": {"intro": "RFD means Recursive Friendly Decomposition: rewrite a calculation using easier numbers without changing its value. You can simplify a difficult step again. Start with addition at level 1; then try the other operations. Higher levels use larger numbers.", "examples": [["Addition: compensate for rounding", ["48 + 29: replace 29 with 30. That adds 1 too much, so subtract 1.", "48 + 30 − 1 = 78 − 1 = 77. Enter 48, +, 30, −, 1; result 77."]], ["Subtraction: reverse the correction", ["83 − 29: subtract 30 instead. You have subtracted 1 too much, so add 1 back.", "83 − 30 + 1 = 53 + 1 = 54."]], ["Multiplication: distribute the factor", ["7 × 28 = 7 × (30 − 2). Multiply both parts by 7.", "30 × 7 − 14 = 210 − 14 = 196. Do not subtract just 2."]], ["Division: split the dividend", ["156 ÷ 6 = (120 + 36) ÷ 6. Divide both parts by 6.", "120 ÷ 6 + 6 = 20 + 6 = 26. The last 6 comes from 36 ÷ 6."]]], "note": "With no parentheses, × and ÷ come before + and −; equal-priority operations run left to right. Example: (48 + 12) ÷ 6 = 10, but 48 + 12 ÷ 6 = 50. Select the matching grouping. Any exactly equivalent route is accepted; the checker does not measure how easy it is."}, "killer": {"intro": "The Killer Move builds the answer from digits: first digit → sums of neighbouring pairs → last digit. These are place values, not a string to join blindly. If a place reaches 10, resolve the carry to its left. Practise until you can see the sums and carries mentally.", "examples": [["No carry: 121 × 11", ["Start with 1. The neighbouring pairs give 1 + 2 = 3 and 2 + 1 = 3. Finish with the last digit, 1.", "The places are 1, 3, 3, 1. No carry is needed: the answer is 1331."], 121], ["One carry: 78 × 11", ["The first digit, neighbour sum and last digit are 7, 15, 8. The 15 belongs to one place; do not join them into 7158.", "Keep the 8 on the right. From 15, write 5 and carry 1 left: 7 + 1 = 8. Answer: 858."], 78], ["A carry chain: 123456 × 11", ["The pairs give 3, 5, 7, 9, 11. With the outside digits, the places are 1, 3, 5, 7, 9, 11, 6.", "Keep the final 6. From 11, write 1 and carry 1 to the 9.", "9 + 1 = 10: write 0 and carry 1 again. The 7 becomes 8.", "The remaining places stay 1, 3, 5. Read the completed answer from the left: 1358016."], 123456], ["An extra digit at the front: 99 × 11", ["The places are 9, 18, 9. Keep the last 9; from 18, write 8 and carry 1 left.", "The first 9 becomes 10. Write 0 in its place and put the remaining 1 in a new place at the front: 1089."], 99]], "note": "Build the neighbour sums from left to right, then resolve carries from right to left. A sum of 9 can become 10 when a carry arrives. Start with two digits; longer examples follow the same rule. The trainer uses positive whole numbers. Why it works: multiplying by 11 adds the number to a copy shifted one place left; the digit trick performs that addition locally."}, "soft": {"intro": "Keep the larger factor as the base. Encode the two-digit smaller factor as 11a + b, where b is from 0 to 10. The anchor is the largest multiple of 11 not exceeding that factor. Its quotient gives a; its remainder gives b. Each code symbol is a base-eleven digit; X means ten, not multiplication. For every ×11 step, use the Killer Move: neighbour sums, then carries. Practise this digit trick on the ×11 page.", "examples": [["Example: 47 × 28 — build code 26", ["The smaller factor is 28. The anchor is 22 = 2 × 11, because the next multiple, 33, is too large.", "Remainder: 28 − 22 = 6. So a = 2, b = 6, and the code is 26. Decode it: 2 × 11 + 6 = 28; it does not mean decimal 26."]], ["Apply the code — one ×11 step", ["Start: 47 × 2 = 94.", "Multiply the start by 11: 94 × 11 = 940 + 94 = 1 034.", "Extra product: 47 × 6 = 282.", "Add: 1 034 + 282 = 1 316. This equals 47 × (2 × 11 + 6) = 47 × 28."]], ["Zero and X", ["10 = 0 × 11 + 10 → code 0X. Keep the zero. 21 = 1 × 11 + 10 → code 1X.", "For 47 × 21: start 47; ×11 gives 517; add 47 × 10 = 470; total 987."]]], "note": "Use “Apply code” to learn the ladder with a supplied code; “Build code” to practise anchor, remainder and code; “Do everything” combines both. In the ladder, add base × b, not just b. The three levels keep this rule and increase the size of the base."}, "full": {"intro": "Full B11 multiplies two three-digit numbers. Keep the larger one as the base and encode the smaller as 121a + 11b + c. Since 121 = 11 × 11, this is also (11a + b) × 11 + c. This explains the two ×11 steps of the ladder. For every ×11 step, use the Killer Move: neighbour sums, then carries. Practise this digit trick on the ×11 page.", "examples": [["Example: 347 × 256 — build code 213", ["The largest multiple of 121 not exceeding 256 is 242 = 2 × 121. Enter anchor 242; remainder 256 − 242 = 14.", "Now split the remainder: 14 = 1 × 11 + 3. Thus a = 2, b = 1, c = 3; code 213.", "Decode: 2 × 121 + 1 × 11 + 3 = 242 + 11 + 3 = 256. The remainder field is 14, not the final digit 3."]], ["Apply the code — the complete ladder", ["Start: 347 × 2 = 694.", "First ×11: 694 × 11 = 6 940 + 694 = 7 634.", "First extra product: 347 × 1 = 347. First total: 7 634 + 347 = 7 981.", "Second ×11: 7 981 × 11 = 79 810 + 7 981 = 87 791.", "Second extra product: 347 × 3 = 1 041. Final total: 87 791 + 1 041 = 88 832.", "Check independently: 347 × (250 + 6) = 86 750 + 2 082 = 88 832."]], ["Leading zero and X", ["100 = 0 × 121 + 9 × 11 + 1 → 091. 120 = 0 × 121 + 10 × 11 + 10 → 0XX.", "For 200 × 120: start 0; ×11 gives 0; add 2 000; ×11 gives 22 000; add 2 000; result 24 000."]]], "note": "First practise “Apply code”, then “Build code”, then “Do everything”. The fixed exercise range is three digits × three digits. Every step uses the same base. X is the digit value 10. Always keep all three code positions."}}, "de": {"rfd": {"intro": "RFD bedeutet „Recursive Friendly Decomposition“: Du zerlegst eine Rechnung in einfachere, gleichwertige Schritte. Schwierige Teilschritte kannst du erneut zerlegen. Beginne mit Addition in Stufe 1 und übe danach die anderen Rechenarten. Höhere Stufen verwenden größere Zahlen.", "examples": [["Addition: Rundung ausgleichen", ["48 + 29: Ersetze 29 durch 30. Dadurch addierst du 1 zu viel; ziehe sie wieder ab.", "48 + 30 − 1 = 78 − 1 = 77. Eingabe: 48, +, 30, −, 1; Ergebnis 77."]], ["Subtraktion: Korrektur umkehren", ["83 − 29: Ziehe zunächst 30 ab. Das ist 1 zu viel; addiere sie wieder.", "83 − 30 + 1 = 53 + 1 = 54."]], ["Multiplikation: beide Teile multiplizieren", ["7 × 28 = 7 × (30 − 2). Multipliziere beide Teile mit 7.", "30 × 7 − 14 = 210 − 14 = 196. Ziehe nicht nur 2 ab."]], ["Division: den Dividend zerlegen", ["156 ÷ 6 = (120 + 36) ÷ 6. Teile beide Teile durch 6.", "120 ÷ 6 + 6 = 20 + 6 = 26. Die letzte 6 entsteht aus 36 ÷ 6."]]], "note": "Ohne Klammern gilt Punkt vor Strich; gleichrangige Rechenarten werden von links nach rechts ausgeführt. (48 + 12) ÷ 6 = 10, aber 48 + 12 ÷ 6 = 50. Wähle die passende Klammerstruktur. Jeder exakt gleichwertige Weg wird akzeptiert; ob er einfacher ist, bewertet das Tool nicht."}, "killer": {"intro": "Der Killer Move baut das Ergebnis aus Ziffern auf: erste Ziffer → Summen benachbarter Ziffern → letzte Ziffer. Das sind Stellenwerte, keine Zeichenfolge zum blinden Aneinanderhängen. Erreicht eine Stelle 10, wird nach links übertragen. Mit Übung erkennst du Summen und Überträge im Kopf.", "examples": [["Ohne Übertrag: 121 × 11", ["Beginne mit 1. Die Nachbarpaare ergeben 1 + 2 = 3 und 2 + 1 = 3. Zum Schluss folgt die letzte Ziffer, 1.", "Die Stellen lauten 1, 3, 3, 1. Kein Übertrag nötig: Das Ergebnis ist 1331."], 121], ["Ein Übertrag: 78 × 11", ["Erste Ziffer, Nachbarsumme und letzte Ziffer ergeben 7, 15, 8. Die 15 gehört zu einer einzigen Stelle; daraus wird nicht die Zahl 7158.", "Die 8 rechts bleibt. Von der 15 schreibst du die 5 und überträgst 1 nach links: 7 + 1 = 8. Ergebnis: 858."], 78], ["Eine Übertragskette: 123456 × 11", ["Die Nachbarpaare ergeben 3, 5, 7, 9, 11. Mit den Randziffern stehen zunächst 1, 3, 5, 7, 9, 11, 6 in den Kästchen.", "Die letzte 6 bleibt. Von der 11 schreibst du die 1 und überträgst 1 zur 9.", "9 + 1 = 10: Schreibe 0 und übertrage erneut 1. Aus der 7 wird dadurch 8.", "Die übrigen Stellen bleiben 1, 3, 5. Lies das fertige Ergebnis von links: 1358016."], 123456], ["Eine zusätzliche Ziffer vorne: 99 × 11", ["Die Stellen lauten 9, 18, 9. Die letzte 9 bleibt; von der 18 schreibst du 8 und überträgst 1 nach links.", "Aus der ersten 9 wird 10. Schreibe an dieser Stelle 0 und setze die verbleibende 1 als neue Stelle davor: 1089."], 99]], "note": "Bilde die Nachbarsummen von links nach rechts und verarbeite die Überträge anschließend von rechts nach links. Auch aus einer 9 kann durch einen ankommenden Übertrag eine 10 werden. Beginne mit zwei Ziffern; längere Zahlen folgen derselben Regel. Der Trainer verwendet positive ganze Zahlen. Warum es funktioniert: Beim Multiplizieren mit 11 wird die Zahl zu ihrer um eine Stelle verschobenen Kopie addiert. Der Zifferntrick erledigt diese Addition stellenweise."}, "soft": {"intro": "Der größere Faktor bleibt dein Grundfaktor. Codiere den kleineren zweistelligen Faktor als 11a + b, wobei b zwischen 0 und 10 liegt. Der Anker ist das größte Vielfache von 11, das den Faktor nicht übersteigt. Der Quotient ergibt a, der Rest b. Die Codezeichen sind Ziffern zur Basis elf; X steht für zehn, nicht für Multiplikation. Verwende für jeden ×11-Schritt den Killer Move: Nachbarziffernsummen bilden und Überträge verarbeiten. Diesen Zifferntrick übst du auf der ×11-Seite.", "examples": [["Beispiel: 47 × 28 — Code 26 bilden", ["Der kleinere Faktor ist 28. Der Anker ist 22 = 2 × 11; das nächste Vielfache 33 wäre zu groß.", "Rest: 28 − 22 = 6. Daher a = 2, b = 6, Code 26. Rückumwandlung: 2 × 11 + 6 = 28. Der Code bedeutet nicht die Dezimalzahl 26."]], ["Code anwenden — ein ×11-Schritt", ["Start: 47 × 2 = 94.", "Startwert mal 11: 94 × 11 = 940 + 94 = 1 034.", "Zusatzprodukt: 47 × 6 = 282.", "Addieren: 1 034 + 282 = 1 316. Das entspricht 47 × (2 × 11 + 6) = 47 × 28."]], ["Null und X", ["10 = 0 × 11 + 10 → Code 0X. Die Null bleibt stehen. 21 = 1 × 11 + 10 → Code 1X.", "Bei 47 × 21: Start 47; mal 11 ergibt 517; dazu 47 × 10 = 470; Ergebnis 987."]]], "note": "„Code anwenden“ gibt den Code vor und trainiert die Leiter. „Code erstellen“ übt Anker, Rest und Code. „Alles selbst“ verbindet beides. Addiere Grundfaktor × b, nicht bloß b. In den drei Stufen wächst der Grundfaktor; die Methode bleibt gleich."}, "full": {"intro": "Full B11 multipliziert zwei dreistellige Zahlen. Der größere Faktor bleibt Grundfaktor. Codiere den kleineren als 121a + 11b + c. Weil 121 = 11 × 11 gilt, ist das auch (11a + b) × 11 + c. Daher braucht die Leiter zwei ×11-Schritte. Verwende für jeden ×11-Schritt den Killer Move: Nachbarziffernsummen bilden und Überträge verarbeiten. Diesen Zifferntrick übst du auf der ×11-Seite.", "examples": [["Beispiel: 347 × 256 — Code 213 bilden", ["Das größte Vielfache von 121 bis einschließlich 256 ist 242 = 2 × 121. Anker: 242. Rest: 256 − 242 = 14.", "Zerlege den Rest: 14 = 1 × 11 + 3. Also a = 2, b = 1, c = 3; Code 213.", "Rückumwandlung: 2 × 121 + 1 × 11 + 3 = 242 + 11 + 3 = 256. Im Restfeld steht 14, nicht die letzte Codeziffer 3."]], ["Code anwenden — die vollständige Leiter", ["Start: 347 × 2 = 694.", "Erster ×11-Schritt: 694 × 11 = 6 940 + 694 = 7 634.", "Erstes Zusatzprodukt: 347 × 1 = 347. Erste Summe: 7 634 + 347 = 7 981.", "Zweiter ×11-Schritt: 7 981 × 11 = 79 810 + 7 981 = 87 791.", "Zweites Zusatzprodukt: 347 × 3 = 1 041. Endergebnis: 87 791 + 1 041 = 88 832.", "Unabhängige Kontrolle: 347 × (250 + 6) = 86 750 + 2 082 = 88 832."]], ["Führende Null und X", ["100 = 0 × 121 + 9 × 11 + 1 → 091. 120 = 0 × 121 + 10 × 11 + 10 → 0XX.", "Bei 200 × 120: Start 0; mal 11 ergibt 0; dazu 2 000; mal 11 ergibt 22 000; dazu 2 000; Ergebnis 24 000."]]], "note": "Übe zuerst „Code anwenden“, dann „Code erstellen“, dann „Alles selbst“. Der feste Aufgabenbereich ist dreistellig × dreistellig. Der Grundfaktor bleibt in allen Schritten gleich. X bedeutet zehn. Behalte immer alle drei Codestellen."}}, "fr": {"rfd": {"intro": "RFD signifie « Recursive Friendly Decomposition » : décomposer un calcul en étapes plus faciles sans changer sa valeur. Tu peux simplifier à nouveau une étape difficile. Commence par les additions du niveau 1, puis essaie les autres opérations. Les niveaux suivants utilisent des nombres plus grands.", "examples": [["Addition : compenser l’arrondi", ["48 + 29 : remplace 29 par 30. Tu ajoutes 1 en trop ; retire-le ensuite.", "48 + 30 − 1 = 78 − 1 = 77. Saisis 48, +, 30, −, 1 ; résultat 77."]], ["Soustraction : inverser la correction", ["83 − 29 : retire d’abord 30. Tu as retiré 1 en trop ; ajoute-le à nouveau.", "83 − 30 + 1 = 53 + 1 = 54."]], ["Multiplication : distribuer le facteur", ["7 × 28 = 7 × (30 − 2). Multiplie les deux termes par 7.", "30 × 7 − 14 = 210 − 14 = 196. Ne retire pas seulement 2."]], ["Division : décomposer le dividende", ["156 ÷ 6 = (120 + 36) ÷ 6. Divise les deux termes par 6.", "120 ÷ 6 + 6 = 20 + 6 = 26. Le dernier 6 vient de 36 ÷ 6."]]], "note": "Sans parenthèses, × et ÷ sont prioritaires sur + et −. À priorité égale, calcule de gauche à droite. Exemple : (48 + 12) ÷ 6 = 10, mais 48 + 12 ÷ 6 = 50. Choisis les bonnes parenthèses. Tout calcul exactement équivalent est accepté ; l’outil ne juge pas s’il est plus facile."}, "killer": {"intro": "Le Killer Move construit le résultat chiffre par chiffre : premier chiffre → sommes des paires voisines → dernier chiffre. Ce sont des positions décimales, pas une suite à coller telle quelle. Dès qu’une position atteint 10, reporte la retenue à gauche. Avec de la pratique, tu peux repérer mentalement les sommes et les retenues.", "examples": [["Sans retenue : 121 × 11", ["Commence par 1. Les paires voisines donnent 1 + 2 = 3 et 2 + 1 = 3. Termine avec le dernier chiffre, 1.", "Les positions donnent 1, 3, 3, 1. Aucune retenue : le résultat est 1331."], 121], ["Une retenue : 78 × 11", ["Le premier chiffre, la somme voisine et le dernier chiffre donnent 7, 15, 8. Le 15 occupe une seule position : ne forme pas le nombre 7158.", "Garde le 8 à droite. Du 15, écris 5 et reporte 1 à gauche : 7 + 1 = 8. Résultat : 858."], 78], ["Une chaîne de retenues : 123456 × 11", ["Les paires donnent 3, 5, 7, 9, 11. Avec les chiffres des extrémités, les cases contiennent 1, 3, 5, 7, 9, 11, 6.", "Garde le dernier 6. Du 11, écris 1 et reporte 1 vers le 9.", "9 + 1 = 10 : écris 0 et reporte encore 1. Le 7 devient donc 8.", "Les autres positions restent 1, 3, 5. Lis le résultat final depuis la gauche : 1358016."], 123456], ["Un chiffre supplémentaire à gauche : 99 × 11", ["Les positions donnent 9, 18, 9. Garde le dernier 9; du 18, écris 8 et reporte 1 à gauche.", "Le premier 9 devient 10. Écris 0 à cette position et place le 1 restant dans une nouvelle position à gauche : 1089."], 99]], "note": "Construis les sommes voisines de gauche à droite, puis traite les retenues de droite à gauche. Un 9 peut devenir 10 en recevant une retenue. Commence avec deux chiffres; la règle est la même pour les nombres plus longs. Le générateur utilise des entiers positifs. Pourquoi cela fonctionne : multiplier par 11 revient à additionner le nombre à une copie décalée d’une position vers la gauche. L’astuce effectue cette addition position par position."}, "soft": {"intro": "Garde le plus grand facteur comme facteur de base. Écris le plus petit, à deux chiffres, sous la forme 11a + b, avec b entre 0 et 10. Le nombre repère est le plus grand multiple de 11 inférieur ou égal à ce facteur. Son quotient donne a et le reste donne b. Chaque symbole du code est un chiffre en base onze ; X signifie dix, pas une multiplication. Pour chaque étape ×11, utilise le Killer Move : sommes des chiffres voisins, puis retenues. Entraîne-toi à cette astuce sur la page ×11.", "examples": [["Exemple : 47 × 28 — construire le code 26", ["Le plus petit facteur est 28. Le nombre repère est 22 = 2 × 11, car le multiple suivant, 33, dépasse 28.", "Reste : 28 − 22 = 6. Donc a = 2, b = 6 ; code 26. Pour décoder : 2 × 11 + 6 = 28. Ce code ne désigne pas le nombre décimal 26."]], ["Appliquer le code — une étape ×11", ["Départ : 47 × 2 = 94.", "Multiplie par 11 : 94 × 11 = 940 + 94 = 1 034.", "Produit à ajouter : 47 × 6 = 282.", "Somme : 1 034 + 282 = 1 316. Cela correspond à 47 × (2 × 11 + 6) = 47 × 28."]], ["Zéro et X", ["10 = 0 × 11 + 10 → code 0X. Garde le zéro. 21 = 1 × 11 + 10 → code 1X.", "Pour 47 × 21 : départ 47 ; ×11 donne 517 ; ajoute 47 × 10 = 470 ; résultat 987."]]], "note": "« Appliquer le code » fournit le code pour apprendre les étapes de calcul. « Créer le code » entraîne le nombre repère, le reste et le code. « Tout faire » réunit les deux. Ajoute facteur de base × b, et non seulement b. Les trois niveaux augmentent la taille du facteur de base sans changer la méthode."}, "full": {"intro": "B11 complet multiplie deux nombres à trois chiffres. Garde le plus grand comme facteur de base et écris le plus petit sous la forme 121a + 11b + c. Comme 121 = 11 × 11, cela s’écrit aussi (11a + b) × 11 + c. C’est pourquoi la suite de calculs comporte deux étapes ×11. Pour chaque étape ×11, utilise le Killer Move : sommes des chiffres voisins, puis retenues. Entraîne-toi à cette astuce sur la page ×11.", "examples": [["Exemple : 347 × 256 — construire le code 213", ["Le plus grand multiple de 121 inférieur ou égal à 256 est 242 = 2 × 121. Nombre repère : 242. Reste : 256 − 242 = 14.", "Décompose le reste : 14 = 1 × 11 + 3. Donc a = 2, b = 1, c = 3 ; code 213.", "Pour décoder : 2 × 121 + 1 × 11 + 3 = 242 + 11 + 3 = 256. Le champ du reste attend 14, et non le dernier chiffre 3."]], ["Appliquer le code — toutes les étapes", ["Départ : 347 × 2 = 694.", "Premier ×11 : 694 × 11 = 6 940 + 694 = 7 634.", "Premier produit à ajouter : 347 × 1 = 347. Premier total : 7 634 + 347 = 7 981.", "Deuxième ×11 : 7 981 × 11 = 79 810 + 7 981 = 87 791.", "Deuxième produit à ajouter : 347 × 3 = 1 041. Résultat final : 87 791 + 1 041 = 88 832.", "Vérification indépendante : 347 × (250 + 6) = 86 750 + 2 082 = 88 832."]], ["Zéro initial et X", ["100 = 0 × 121 + 9 × 11 + 1 → 091. 120 = 0 × 121 + 10 × 11 + 10 → 0XX.", "Pour 200 × 120 : départ 0 ; ×11 donne 0 ; ajoute 2 000 ; ×11 donne 22 000 ; ajoute 2 000 ; résultat 24 000."]]], "note": "Entraîne-toi d’abord avec « Appliquer le code », puis « Créer le code », puis « Tout faire ». Les exercices restent à trois chiffres × trois chiffres. Le facteur de base reste identique à chaque étape. X vaut dix. Garde toujours les trois positions du code."}}};
  Object.keys(refinements).forEach(lang => Object.assign(messages[lang], refinements[lang]));

  const supported = ["en", "fr", "de"];
  const fallback = "en";
  const languageStorageKey = "brats11-language-v2";
  function storedLanguage() {
    try { return localStorage.getItem(languageStorageKey); }
    catch { return null; }
  }
  function rememberLanguage(value) {
    try { localStorage.setItem(languageStorageKey, value); }
    catch { /* The trainer still works when storage is unavailable. */ }
  }
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  let language = supported.includes(requestedLanguage) ? requestedLanguage : storedLanguage();
  if (!supported.includes(language)) language = fallback;

  function t(key, variables = {}) {
    const source = messages[language][key] ?? messages[fallback][key] ?? key;
    return Object.entries(variables).reduce((value, [name, replacement]) => value.replaceAll(`{${name}}`, replacement), source);
  }

  function headerMarkup() {
    const page = document.body.dataset.page || "index";
    const links = [
      ["index", "index.html", "nav.home"],
      ["rfd", "rfd.html", "nav.rfd"],
      ["killer", "killer-move.html", "nav.killer"],
      ["soft", "b11-soft.html", "nav.soft"],
      ["full", "b11.html", "nav.full"]
    ];
    return `<div class="site-header"><div class="site-shell header-inner">
      <a class="brand-link" href="index.html" aria-label="BRATS 11">
        <span class="brand-mark">B11</span><span class="brand-copy"><strong>BRATS 11</strong><small data-i18n="brand.method"></small></span>
      </a>
      <nav class="main-nav" data-i18n-aria="common.navLabel">${links.map(([id, href, key]) => `<a href="${href}"${page === id ? ' aria-current="page"' : ""} data-i18n="${key}"></a>`).join("")}</nav>
      <div class="language-switcher" data-i18n-aria="common.languageLabel">
        <button class="language-button" type="button" data-language="en" data-lang-label="lang.en" aria-pressed="false"><span aria-hidden="true">🇺🇸</span><small>EN</small></button>
        <button class="language-button" type="button" data-language="fr" data-lang-label="lang.fr" aria-pressed="false"><span aria-hidden="true">🇨🇦</span><small>FR</small></button>
        <button class="language-button" type="button" data-language="de" data-lang-label="lang.de" aria-pressed="false"><span aria-hidden="true">🇩🇪</span><small>DE</small></button>
      </div>
    </div></div>`;
  }

  function footerMarkup() {
    return `<div class="site-footer"><div class="site-shell footer-inner">
      <a class="sse-signet" href="https://singershamrock.com" target="_blank" rel="noopener noreferrer"><strong data-i18n="brand.sse"></strong><span data-i18n="brand.est"></span></a>
      <div class="footer-links"><span data-i18n="footer.marketing"></span><a href="legal.html#imprint" data-i18n="footer.imprint"></a><a href="legal.html#privacy" data-i18n="footer.privacy"></a><a href="legal.html#terms" data-i18n="footer.terms"></a></div>
    </div></div>`;
  }

  function number(value) {
    return new Intl.NumberFormat(language === "fr" ? "fr-CA" : language === "de" ? "de-DE" : "en-US", { maximumFractionDigits: 12, useGrouping: false }).format(value);
  }

  function killerDiagram(trace) {
    const figure = document.createElement("figure"); figure.className = "km-diagram";
    const columnCount = Math.max(trace.columns.length, trace.result.length);
    figure.style.setProperty("--km-diagram-columns", columnCount);
    function pad(row, count) {
      for (let i = 0; i < count; i++) {
        const blank = document.createElement("span"); blank.className = "km-diagram-cell km-placeholder"; blank.setAttribute("aria-hidden", "true"); row.append(blank);
      }
    }
    const caption = document.createElement("figcaption"); caption.textContent = `${trace.value} × 11 = ${trace.result}`; figure.append(caption);
    const rawLabel = document.createElement("p"); rawLabel.className = "km-diagram-label"; rawLabel.textContent = t("killer.rawLabel"); figure.append(rawLabel);
    const rawRow = document.createElement("div"); rawRow.className = "km-diagram-row";
    pad(rawRow, columnCount - trace.columns.length);
    trace.columns.forEach(column => {
      const cell = document.createElement("span"); cell.className = "km-diagram-cell";
      if (column.total >= 10) cell.classList.add("km-has-carry");
      const carry = document.createElement("small"); carry.className = "km-incoming";
      carry.textContent = column.incoming ? "+" + column.incoming : "";
      const value = document.createElement("strong"); value.textContent = column.raw;
      cell.append(carry, value); rawRow.append(cell);
    });
    figure.append(rawRow);
    const finalLabel = document.createElement("p"); finalLabel.className = "km-diagram-label"; finalLabel.textContent = t("killer.resolvedLabel"); figure.append(finalLabel);
    const finalRow = document.createElement("div"); finalRow.className = "km-diagram-row km-resolved";
    pad(finalRow, columnCount - trace.result.length);
    [...trace.result].forEach(digit => { const cell = document.createElement("span"); cell.className = "km-diagram-cell"; cell.textContent = digit; finalRow.append(cell); });
    figure.append(finalRow);
    if (trace.columns.some(column => column.incoming)) {
      const note = document.createElement("p"); note.className = "note"; note.textContent = t("killer.carryLegend"); figure.append(note);
    }
    return figure;
  }

  function renderLesson() {
    const host = document.getElementById("learning-guide");
    const lesson = lessons[language][document.body.dataset.page];
    if (!host || !lesson) return;
    const wasOpen = host.querySelector("details")?.open || false;
    host.replaceChildren();
    const intro = document.createElement("p"); intro.textContent = lesson.intro; host.append(intro);
    const details = document.createElement("details"); details.open = wasOpen;
    const summary = document.createElement("summary"); summary.textContent = t("learn.title"); details.append(summary);
    for (const [title, steps, exampleNumber] of lesson.examples) {
      const section = document.createElement("section");
      const heading = document.createElement("h3"); heading.textContent = title; section.append(heading);
      if (Number.isInteger(exampleNumber) && window.B11Engine) section.append(killerDiagram(window.B11Engine.killerTrace(exampleNumber)));
      const list = document.createElement("ol");
      steps.forEach(text => { const item = document.createElement("li"); item.textContent = text; list.append(item); });
      section.append(list); details.append(section);
    }
    const note = document.createElement("p"); note.className = "note"; note.textContent = lesson.note; details.append(note); host.append(details);
  }

  function translateDocument() {
    document.documentElement.lang = language === "fr" ? "fr-CA" : language === "en" ? "en-US" : "de";
    document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = t(element.dataset.i18n); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => { element.placeholder = t(element.dataset.i18nPlaceholder); });
    document.querySelectorAll("[data-lang-label]").forEach(element => { element.setAttribute("aria-label", t(element.dataset.langLabel)); element.title = t(element.dataset.langLabel); });
    document.querySelectorAll("[data-language]").forEach(element => {
      const active = element.dataset.language === language;
      element.classList.toggle("is-active", active);
      element.setAttribute("aria-pressed", active ? "true" : "false");
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(element => element.setAttribute("aria-label", t(element.dataset.i18nAria)));
    renderLesson();
    const titleKey = `meta.${document.body.dataset.page || "index"}`;
    document.title = t(titleKey);
  }

  function setLanguage(nextLanguage) {
    if (!supported.includes(nextLanguage)) return;
    language = nextLanguage;
    rememberLanguage(language);
    translateDocument();
    window.dispatchEvent(new CustomEvent("brats11:languagechange", { detail: { language } }));
  }

  function initialize() {
    const header = document.querySelector("#site-header");
    const footer = document.querySelector("#site-footer");
    if (header) header.innerHTML = headerMarkup();
    if (footer) footer.innerHTML = footerMarkup();
    const main = document.querySelector("main");
    if (main && document.body.dataset.page !== "legal" && !main.querySelector(".booklet-note")) {
      const note = document.createElement("p"); note.className = "booklet-note";
      const link = document.createElement("a"); link.href = "https://singershamrock.com/booklets.html"; link.dataset.i18n = "booklet";
      note.append(link); main.prepend(note);
    }
    document.addEventListener("click", event => {
      const button = event.target.closest("[data-language]");
      if (button) setLanguage(button.dataset.language);
    });
    translateDocument();
  }

  window.B11Site = { t, number, killerDiagram, setLanguage, get language() { return language; }, translateDocument };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
