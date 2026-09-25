# WELTBUCH

Die fortlaufende Geschichte unserer Zeit.

Ein Kapitel pro Tag, 5–15 Minuten.
Startseite = immer das jüngste Datum.
Archiv = alle Tage, neueste oben.

## Lokal

```bash
npm install
npm run dev
```

http://localhost:3000

## Vercel

1. Diesen Ordner als GitHub-Repo anlegen.
2. vercel.com → New Project → Repo importieren.
3. Framework Preset: Next.js. Sonst nichts ändern.
4. Deploy.

Danach: neue Datei `content/chapters/YYYY-MM-DD.json` committen und pushen.
Vercel baut neu. Die Startseite zeigt automatisch den neuen Tag.

## Kapitel

Schema: `content/chapters/2026-09-25.json`
Vorlage: `content/chapters/_vorlage.json`

`body` ist HTML (`<p>`, `<h3>`, `<blockquote>`).
Quellen: `<a class="src" href="#q1">1</a>`
