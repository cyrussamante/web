# cyrussamante.com

My personal portfolio website, built from scratch with React, TypeScript, and Tailwind CSS. It is a dual portfolio covering software engineering and creative production, showcasing my projects, professional experience, education, and live-production work, with a focus on performance, accessibility, and a clean, theme-aware UI.

**Live site:** [cyrussamante.com](https://cyrussamante.com)

## Features

- **Dual portfolio** — `/` is a gateway to two portfolios: **Software Engineering** (`/software`) and **Creative Production** (`/creative`). A Home | Software | Creative navigation is available everywhere.
- **Creative Production** — a media-first portfolio of live production, projection, sound, lighting, branding, and video work with per-project pages (`/creative/:slug`), galleries, video embeds, and PDF previews. Content is managed in a single typed data file and media can come from Google Drive links.
- **Projects** (`/software/projects`) — a filterable, sortable grid of personal and academic projects, each with a detail modal supporting keyboard-friendly left/right navigation between projects, screenshots, technologies, and collaborators.
- **Experience** (`/software/experience`) — a chronological timeline of professional experience and education, with skill tags per role.
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
│   ├── creative/     # Creative portfolio cards and media components
│   ├── experience/   # Components specific to the Experience page
│   └── projects/     # Components specific to the Projects grid/modal
├── context/          # Theme context/provider
├── data/             # Static content: projects.ts, experience.ts, creativeProjects.ts
├── hooks/            # Custom hooks (project modal state, page metadata, in-view)
├── layouts/          # Section layouts (software sub-navigation, creative)
├── routes/           # Landing and NotFound
│   ├── software/     # Home, Projects, Experience
│   └── creative/     # Creative portfolio and project detail pages
├── types/            # Shared types (creative portfolio)
└── utils/            # Helpers (project filtering/sorting, email, media URLs)
public/
├── images/           # Project screenshots and profile photo
├── favicon.svg       # Adaptive favicon (+ .ico/PNG fallbacks)
├── robots.txt
└── sitemap.xml
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Landing page linking to both portfolios |
| `/software`, `/software/projects`, `/software/experience` | Software Engineering portfolio |
| `/creative`, `/creative/:slug` | Creative Production portfolio and project pages |

The previous `/projects` and `/experience` URLs redirect to their `/software/...` equivalents.

## Managing the creative portfolio

All creative projects live in [`src/data/creativeProjects.ts`](./src/data/creativeProjects.ts). Adding or updating a project only requires editing that file; projects appear in the order listed. When you add a project, also add its `/creative/<slug>` URL to `public/sitemap.xml`.

### Google Drive media

1. In Google Drive, right-click the file → **Share** → set General access to **Anyone with the link** (Viewer). Files that are not public will not display for visitors.
2. Copy the link (`https://drive.google.com/file/d/<FILE_ID>/view?usp=sharing`) and paste it as a `src`. The file ID is extracted automatically.
3. Every Drive image, video, and PDF also shows an **Open original** link, because Drive does not always allow embedding. Folder links are not supported; use individual file links.

Other supported sources: YouTube and Vimeo URLs, local files under `public/` (e.g. `/images/creative/poster.webp`, `/videos/clip.mp4`, `/docs/playbill.pdf`), and any public `https` image, video (`.mp4`, `.webm`, `.mov`), or PDF URL. Unsupported or broken links show a placeholder instead of breaking the page. Videos never autoplay and load only when played; PDFs load when scrolled into view.

### Example: add a project

```ts
{
    id: "my-new-show",
    slug: "my-new-show", // becomes /creative/my-new-show
    title: "My New Show",
    category: "live-production", // live-production | visual-design | graphic-design | video-multimedia
    additionalCategories: ["visual-design"], // optional: also list it under these
    year: 2025, // optional
    featured: false, // only one project should be featured
    description: "One or two factual sentences about the project.",
    responsibilities: ["Sound", "Projections"],

    // Cover image from Google Drive
    coverImage: {
        src: "https://drive.google.com/file/d/COVER_FILE_ID/view?usp=sharing",
        alt: "Cast on stage during the finale",
    },

    // More photos (click to enlarge)
    gallery: [
        { src: "https://drive.google.com/file/d/PHOTO_FILE_ID/view?usp=sharing", caption: "Opening number" },
    ],

    media: [
        // Video from Google Drive (optional poster image)
        { type: "video", title: "Show highlights", src: "https://drive.google.com/file/d/VIDEO_FILE_ID/view?usp=sharing" },
        // PDF playbill or program
        { type: "pdf", title: "Souvenir playbill", src: "https://drive.google.com/file/d/PDF_FILE_ID/view?usp=sharing" },
    ],

    credits: [{ role: "Director", name: "Name" }], // optional
    externalLinks: [{ label: "Event page", href: "https://example.com" }], // optional
    note: "Optional clarification about the scope of your involvement.", // optional
    relatedSlugs: ["jdl-15th-anniversary-logo"], // optional
}
```

## License

MIT — see [LICENSE](./LICENSE).
