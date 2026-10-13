# annaspysz.com

Personal portfolio for Anna Spysz, built with Vite and React.

View it at [annaspysz.com](https://annaspysz.com).

## Development

Node.js 22.22 or newer is required.

```bash
git clone https://github.com/bildungsroman/bildungsroman.github.io.git
cd bildungsroman.github.io
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

### Scripts

- `npm run dev` starts the dev server
- `npm run build` fetches pinned repositories, then builds to `dist/`
- `npm run preview` serves the production build
- `npm run lint` runs ESLint
- `npm run fix` formats with Prettier and applies ESLint fixes
- `npm run fetch-repos` refreshes `src/data/repos.json` (needs `GH_TOKEN` or `GITHUB_TOKEN`)
- `npm run optimize-images -- <files> --out src/assets/img` converts images to WebP

Without a GitHub token, the build keeps the committed `repos.json`. See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Pages, the weekly rebuild, and the old `VITE_GITHUB_API_TOKEN` secret.

## Site

Pages are About, Coding, Speaking, and Writing. Light and dark colors follow the browser setting. The header toggle overrides that for the current tab only.

The Coding page lists apps from `src/data/apps.js` and pinned GitHub repositories from `src/data/repos.json`. The Speaking page lists upcoming talks, recorded talks, and interviews from `src/data/speaking.js`. YouTube players load when a visitor clicks play.

For agents and crawlers, `public/` includes `llms.txt`, `sitemap.xml`, and `robots.txt`. `index.html` has the default title, description, Open Graph tags, and JSON-LD. Per-page titles update in the browser after navigation.

When adding an app, talk, or interview, add a matching line to `public/llms.txt`.

## Stack

- React 19
- Vite 8
- React Router 8
- styled-components
- Font Awesome and React Icons
- GitHub Pages

## Project structure

```
public/                 # llms.txt, sitemap, robots, resume, SPA 404
scripts/                # fetch-repos.mjs, optimize-images.mjs
src/
├── components/         # Layout, cards, embeds
├── contexts/           # Theme
├── data/               # Apps, speaking, repos, site copy
├── hooks/              # usePageMeta
├── pages/              # Route pages
├── styles/             # Theme tokens
└── App.jsx
```
