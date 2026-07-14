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
npm run preview  # serve the built dist/ locally
```

## Deployment (GitHub Pages)

The site deploys to <https://sibyldigital.github.io/gardensofeatin/>.

- `vite.config.js` sets `base: '/gardensofeatin/'` so every built asset URL
  (JS, CSS, fonts, images) resolves under the repo subpath. Fonts live in
  `src/assets/` and photos/logo in `public/assets/`; JS references public
  assets through `src/lib/asset.js`, which prefixes `import.meta.env.BASE_URL`.
  The router uses the same base via `basename={import.meta.env.BASE_URL}`.
- `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages
  on every push to `main` (and on manual dispatch). It also copies
  `index.html` to `404.html` so client-side deep links resolve on Pages.
- One-time repo setting: **Settings → Pages → Build and deployment → Source:
  GitHub Actions.**

## Pages (per sitemap CSV)

| Route                 | Page                   |
| --------------------- | ---------------------- |
| `/`                   | Home                   |
| `/about`              | About                  |
| `/services`           | Services               |
| `/packages`           | Service Packages       |
| `/process`            | Process                |
| `/portfolio`          | Portfolio (filterable) |
| `/portfolio/:slug`    | Project case study     |
| `/blog`               | Blog (search + filter) |
| `/blog/:slug`         | Blog Post              |
| `/contact`            | Contact + service map  |
| `/portfolio-landing`  | Portfolio Landing Page |

## Design system

Tokens (colors, type, spacing, motion) and components are ported from the
design system project, adapted from inline-style React to CSS classes and
made router-aware. Brand rules honored throughout: maroon reserved for CTAs,
open-edge cards (no borders/shadows/radius), cream + deep-forest as the only
page backgrounds, no icons, Title Case headings, quiet motion.

The updated design system added a library of homepage/section options, all
implemented here as reusable components: `StatsBar`, `InformationSection`
(gold-ruled fact callouts), `TestimonialSection` (typographic ★ ratings),
`JournalSection`, `PricingSection` (Design/Installation/Maintenance tiers),
`TeamSection` (forest/gold monogram tiles — no invented headshots),
`ServiceRadius` (abstract concentric-ring service-area schematic),
`ServiceDetailSection`, `CommercialPitchSection`, `FAQSection`,
`BeforeAfterSection`, and `InstagramSection`, plus a `CaseStudy` project
detail page and the editorial `BlogPost` article layout.

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
