# Pizzeria Signor Pizza

Sito vetrina professionale per Pizzeria Signor Pizza — Busto Arsizio.

## Stack

- [Astro](https://astro.build) — sito statico
- [Tailwind CSS v4](https://tailwindcss.com)
- Deploy su [Cloudflare Pages](https://pages.cloudflare.com)

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

Output in `dist/`.

## Deploy su Cloudflare Pages

1. Collega il repository Git a Cloudflare Pages
2. **Build command:** `npm run build`
3. **Build output directory:** `dist`
4. **Node version:** 22.x (vedi `package.json`)

## Contenuti da aggiornare

Modifica i file in `src/data/`:

| File | Contenuto |
|------|-----------|
| `site.json` | Contatti, social, prenotazioni, premi |
| `hours.json` | Orari di apertura |
| `menu.json` | Menu completo con prezzi |
| `venue.json` | Attributi del locale |

Sostituisci le foto placeholder (attualmente Unsplash) con le tue in `public/images/`.

## Struttura pagine

- `/` — Home con sezioni ancorate
- `/menu` — Menu interattivo per categorie
