# cyrussamante.com

My personal portfolio website, built from scratch with React, TypeScript, and Tailwind CSS. It showcases my projects, professional experience, and education, with a focus on performance, accessibility, and a clean, theme-aware UI.

**Live site:** [cyrussamante.com](https://cyrussamante.com)

## Features

- **Projects** — a filterable, sortable grid of personal and academic projects, each with a detail modal supporting keyboard-friendly left/right navigation between projects, screenshots, technologies, and collaborators.
- **Experience** — a chronological timeline of professional experience and education, with skill tags per role.
- **Light/dark theme** — a toggle that respects the user's saved preference (and falls back to their OS preference), with consistent, synchronized color transitions across the entire page.
- **Theme-aware images** — select preview images (like this site's own project card) swap between light- and dark-mode screenshots automatically.
- **SEO** — per-route titles/descriptions, Open Graph and Twitter Card tags, JSON-LD structured data, `robots.txt`, and `sitemap.xml`.
- **Adaptive favicon** — an SVG favicon that switches color scheme with the OS/browser, with `.ico`/PNG fallbacks for broader support.
- **Scrape-resistant contact info** — the contact email is assembled at runtime rather than present as a literal string, to deter basic scraping while remaining fully functional and accessible.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for tooling and dev server
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [ESLint](https://eslint.org/) + [typescript-eslint](https://typescript-eslint.io/) for linting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
npm install
```

### Development

Starts a local dev server with hot module replacement at `http://localhost:5173`:

```bash
npm run dev
```

### Linting

```bash
npm run lint
```

### Production Build

Type-checks the project and builds an optimized production bundle to `dist/`:

```bash
npm run build
```

### Preview Production Build

Serves the built `dist/` output locally to sanity-check before deploying:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Shared UI components (Navbar, Footer, ActionLink, etc.)
│   ├── experience/   # Components specific to the Experience page
│   └── projects/     # Components specific to the Projects grid/modal
├── context/          # Theme context/provider
├── data/             # Static content: projects.ts, experience.ts
├── hooks/            # Custom hooks (project modal state, page metadata)
├── routes/           # Top-level route components (Home, Projects, Experience)
└── utils/            # Helper functions (project filtering/sorting, email)
public/
├── images/           # Project screenshots and profile photo
├── favicon.svg       # Adaptive favicon (+ .ico/PNG fallbacks)
├── robots.txt
└── sitemap.xml
```

## License

MIT — see [LICENSE](./LICENSE).
