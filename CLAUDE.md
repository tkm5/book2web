# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

book2web is a multi-project static site that converts book summaries into interactive web pages. Deployed to GitHub Pages at `https://tkm5.github.io/book2web/`. Each book series is an independent Astro project in its own subdirectory.

## Repository Structure

```
book2web/
├── root/                    # Root landing page (static HTML, no build)
│   ├── index.html           # Book series listing at /book2web/
│   └── 404.html
├── rich-dad-poor-dad/       # Astro project: Rich Dad series (3 books, 49 chapters)
│   ├── astro.config.mjs     # base: '/book2web/rich-dad-poor-dad'
│   ├── package.json
│   └── src/
└── books/                   # PDF-converted markdown (gitignored, reference only)
```

## Build & Dev Commands

All commands run inside individual book project directories:

```bash
cd rich-dad-poor-dad
pnpm install
pnpm run dev        # Local dev server
pnpm run build      # Type-check (astro check) + static build
pnpm run preview    # Preview built site
```

There is no root-level package.json. Each book project is independent.

## Deploy Pipeline

`.github/workflows/deploy.yml` builds each book project separately, then combines outputs:

1. Build each Astro project into its `dist/`
2. Assemble `combined/` directory: `root/*` at top level, each project's `dist/*` in its subdirectory
3. Deploy `combined/` to GitHub Pages

When adding a new book project, update the workflow to include its build steps and copy its `dist/` into `combined/<project-name>/`.

## Architecture (rich-dad-poor-dad)

Astro 5 + MDX + Tailwind CSS v4 (via Vite plugin). Static output only.

### Content System

- Content collection defined in `src/content.config.ts` using `glob` loader from `src/data/books/`
- MDX frontmatter schema: `bookId`, `bookTitle`, `chapterNumber`, `chapterTitle`, `category`, `order`, etc.
- Three books: `rich-dad-poor-dad` (9ch), `investing-beginner` (16ch), `investing-advanced` (24ch)

### URL Routing

Dynamic routes via `src/pages/books/[book]/[chapter].astro` and `src/pages/books/[book]/index.astro`. Chapter numbers are zero-padded (`01`, `02`, ...).

All internal URLs use the `withBase()` helper from `src/utils/books.ts` to prepend the Astro `base` path.

### Key Utilities

- `src/utils/constants.ts` - Book metadata, chapter titles, categories (single source of truth for book config)
- `src/utils/books.ts` - `withBase()`, `getBookPath()`, `getChapterPath()`, collection queries
- `src/utils/navigation.ts` - Sidebar tree and prev/next chapter navigation

### Layout Hierarchy

`BaseLayout` → `BookLayout` (book index pages) or `ChapterLayout` (chapter pages with sidebar, ToC, breadcrumb, prev/next nav)

### MDX Components

Chapters use custom components imported in each MDX file: `Callout`, `KeyConcept`, `Quiz`, `BookRef`, `MermaidDiagram`

### Path Aliases

Defined in `tsconfig.json`: `@/*` → `src/*`, `@components/*`, `@layouts/*`, `@utils/*`, `@data/*`

## Book Source Files

PDF source files are stored in Google Drive: `/Users/takumig/Google Drive/My Drive/3_Books`

When looking for books to add or convert, always search this directory first.

## Adding a New Book Series

1. Create a new directory at repo root (e.g., `new-book/`)
2. Initialize an Astro project with `base: '/book2web/new-book'`
3. Add build steps to `.github/workflows/deploy.yml`
4. Add a card to `root/index.html`

## Styling

Tailwind CSS v4 with CSS-based theming in `src/styles/global.css`. Dark mode uses class strategy (`.dark` class on `<html>`). Dark mode background: `#000000`.
