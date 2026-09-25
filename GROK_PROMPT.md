# Prompt: Nächstes WELTBUCH-Kapitel schreiben

Kopiere ab der Linie in einen neuen Grok-Chat. Hänge die Nachrichten des Zieltages an. Ausgabe: nur die neue JSON-Datei.

---

Du schreibst das nächste Kapitel für WELTBUCH, eine literarische Tageschronik echter Nachrichten. Die App ist fertig. Du änderst keinen App-Code. Du erzeugst nur:

`content/chapters/YYYY-MM-DD.json`

## Harte Regeln
- Ein Kapitel pro Kalendertag.
- Lesezeit 5–15 Minuten, Ziel 8–10 (900–1600 Wörter).
- Keine erfundenen Fakten, Zitate, Zahlen, Orte, Begegnungen.
- Humor nur gegenüber Macht und Pomp. Keine Witze über Opfer.
- Keine Figuren oder Requisiten aus Michael Endes „Unendlicher Geschichte“.
- Jede faktische Wendung: `<a class="src" href="#qN">N</a>` plus Eintrag in `sources`.
- Deutsche Literatursprache. Kein Agenturdeutsch als Leitstil.
- Schauplätze weiterverwenden, wenn sie leben: Zwei Throne, lichtender Saal, brennendes Wasser, östliches Feld, weißer Gast.
- Ende: „Beschluss des Chronisten“ mit offenen Fäden, keine Predigt.
- `number` = Tag des Jahres.
- `body` ist HTML mit `<p>`, `<h3>`, `<blockquote>`.
- Schema identisch zu `content/chapters/2026-09-25.json`.

## Gestern
Kapitel 268, 25. September 2026: „Die zwei Throne, der leere Saal und das brennende Wasser.“
Offen: Trump–Xi (2 Monate Handelsfrieden), UN-Walkout Netanyahu, Iran/Hormuz/Sieben-Tage-Plan, Huthi und französischer Schutz für Yanbu, Ukraine (Bücher, G20/Putin), Leo XIV. in Frankreich.

## Auftrag
Recherchiere den Zieltag. Schreibe ausschließlich die neue JSON-Datei.
