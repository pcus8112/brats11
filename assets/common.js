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
      "footer.marketing": "Betrieben von Pierre Christian Ulrich Singer, Entrepreneur individuel (EI) · SIRET en cours d’attribution",
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
      "legal.siret": "SIRET en cours d’attribution",
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
      "footer.imprint": "Legal notice", "footer.privacy": "Privacy", "footer.terms": "Terms", "footer.marketing": "Operated by Pierre Christian Ulrich Singer, Entrepreneur individuel (EI) · SIRET en cours d’attribution",
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
      "legal.contact": "Contact and service address", "legal.siret": "SIRET en cours d’attribution",
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
      "footer.imprint": "Mentions légales", "footer.privacy": "Confidentialité", "footer.terms": "Conditions", "footer.marketing": "Exploité par Pierre Christian Ulrich Singer, Entrepreneur individuel (EI) · SIRET en cours d’attribution",
      "index.eyebrow": "Quatre étapes d’entraînement · une méthode", "index.titleA": "Trouve le", "index.titleB": "chemin le plus court.",
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
      "legal.contact": "Coordonnées et adresse de signification", "legal.siret": "SIRET en cours d’attribution",
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
      <nav class="main-nav" aria-label="Primary">${links.map(([id, href, key]) => `<a href="${href}"${page === id ? ' aria-current="page"' : ""} data-i18n="${key}"></a>`).join("")}</nav>
      <div class="language-switcher" aria-label="Language">
        <button class="language-button" type="button" data-language="en" data-lang-label="lang.en" aria-pressed="false"><span aria-hidden="true">🇺🇸</span></button>
        <button class="language-button" type="button" data-language="fr" data-lang-label="lang.fr" aria-pressed="false"><span aria-hidden="true">🇨🇦</span></button>
        <button class="language-button" type="button" data-language="de" data-lang-label="lang.de" aria-pressed="false"><span aria-hidden="true">🇩🇪</span></button>
      </div>
    </div></div>`;
  }

  function footerMarkup() {
    return `<div class="site-footer"><div class="site-shell footer-inner">
      <a class="sse-signet" href="https://singershamrock.com" target="_blank" rel="noopener noreferrer"><strong data-i18n="brand.sse"></strong><span data-i18n="brand.est"></span></a>
      <div class="footer-links"><span data-i18n="footer.marketing"></span><a href="legal.html#imprint" data-i18n="footer.imprint"></a><a href="legal.html#privacy" data-i18n="footer.privacy"></a><a href="legal.html#terms" data-i18n="footer.terms"></a></div>
    </div></div>`;
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
    document.addEventListener("click", event => {
      const button = event.target.closest("[data-language]");
      if (button) setLanguage(button.dataset.language);
    });
    translateDocument();
  }

  window.B11Site = { t, setLanguage, get language() { return language; }, translateDocument };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
