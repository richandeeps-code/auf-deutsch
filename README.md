# Auf Deutsch! 🇩🇪

A complete German learning book — A1 to B2 — built as a static web app.

## Features

- **20 chapters** progressing from absolute beginner (A1) to upper intermediate (B2)
- **Top 1,000 most common German words** in context
- **Reading passages** in German with English translations (toggle between languages)
- **Grammar tips** — one focused rule per chapter
- **Memory tricks** — mnemonics and patterns to lock in vocabulary
- **Practice sentences** with reveal-on-demand answers
- **Progress tracking** — mark chapters complete, progress bar saves to localStorage
- **Responsive design** — works on desktop and mobile

## Levels Covered

| Level | Description | Chapters |
|-------|-------------|---------|
| A1 | Absolute Beginner | 1–5 |
| A2 | Elementary | 6–10 |
| B1 | Intermediate | 11–15 |
| B2 | Upper Intermediate | 16–20 |

## Running Locally

Just open `index.html` in your browser — no build step required. It's a pure HTML/CSS/JS static site.

```bash
# Or serve with any static server, e.g.:
npx serve .
python -m http.server 8080
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`

## File Structure

```
auf-deutsch/
├── index.html          # Main HTML shell
├── css/
│   └── style.css       # All styles
├── js/
│   └── app.js          # Navigation and render logic
├── data/
│   └── chapters.js     # All chapter content (vocab, passages, tips)
└── README.md
```

## Word Count

The full book content exceeds **26,000 words** across 20 chapters plus a vocabulary appendix.

## License

Free to use for personal language learning.
# GermanLanguage
