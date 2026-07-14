# Gardens of Eatin' — Website

Marketing site for Gardens of Eatin', a permaculture and edible-landscape
design company in Asheville, NC. Implements the [Gardens of Eatin' Design
System](https://claude.ai/design/p/60291648-77bb-4cf1-9cdb-0b599dcf5863)
to the spec of the project sitemap CSV.

## Stack

- Vite + React 18 + React Router 6
- No CSS framework — design tokens and component styles ported directly
  from the design system (`src/styles/tokens.css`, `src/styles/global.css`)
- Self-hosted webfonts: Baskervville (display serif) and Work Sans
  (humanist sans), the design system's documented substitutes for the
  brand's commercial Baskerville Display PT and Syntax faces

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

## Pages (per sitemap CSV)

| Route                 | Page                   |
| --------------------- | ---------------------- |
| `/`                   | Home                   |
| `/about`              | About                  |
| `/services`           | Services               |
| `/packages`           | Service Packages       |
| `/process`            | Process                |
| `/portfolio`          | Portfolio (filterable) |
| `/blog`               | Blog (search + filter) |
| `/blog/:slug`         | Blog Post              |
| `/contact`            | Contact + service map  |
| `/portfolio-landing`  | Portfolio Landing Page |

## Design system

Tokens (colors, type, spacing, motion) and components (Button, Card,
Callout, Input, NavHeader, Footer) are ported from the design system
project, adapted from inline-style React to CSS classes and made
router-aware. Brand rules honored throughout: maroon reserved for CTAs,
open-edge cards (no borders/shadows/radius), cream + deep-forest as the
only page backgrounds, no icons, Title Case headings, quiet motion.

## ⚠️ Photography assets are placeholders

The design project's photography (`assets/photography/*.png`) exceeds the
256 KiB per-file transfer cap of the design MCP, so the originals could
not be pulled into this repo intact. The files in `public/assets/photography/`
are **color-faithful soft-focus stand-ins** generated from the recoverable
portion of each original (the logo and layout are unaffected — the
apple-tree mark recovered cleanly).

To finish: export the eight photos from the design project (or the brand
guide PDF) and drop them into `public/assets/photography/` under the same
filenames. No code changes needed.

## Form + integrations

- The contact/quote form is client-side only (`Contact.jsx`); wire its
  submit handler to your form backend of choice.
- The service-area map is a self-contained, brand-styled inline SVG
  (`ServiceAreaMap.jsx`); swap in a Google Maps/OSM embed if a live map is
  preferred.
- The Portfolio Landing "From The Feed" grid is a static stand-in for an
  Instagram embed — replace with your embed provider when ready.
