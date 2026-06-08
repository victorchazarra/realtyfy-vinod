# Realtyfy

Realtyfy is a content and newsletter website about **investing in Indonesian real estate** — market analysis, foreign ownership rules, rental yields, and due diligence, written by Bali-based investor Victor Chazarra. The primary goal of the site is to grow the newsletter.

- **Live domain:** realtyfy.com
- **Type:** Marketing/content site — public, no logins, no user accounts
- **Primary CTA:** Join the newsletter

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 (no UI library) |
| Animation | Framer Motion |
| Blog | File-based MDX (`gray-matter` + `remark`) |
| Newsletter | Beehiiv API |
| Analytics | Vercel Analytics (+ optional GTM / Ahrefs) |
| Hosting | Vercel |

---

## Quick start

**Prerequisites:** [Node.js](https://nodejs.org) 20+ and [pnpm](https://pnpm.io) (`npm install -g pnpm`).

```bash
pnpm install      # install dependencies
pnpm dev          # start the dev server → http://localhost:3000
pnpm build        # production build
pnpm start        # run the production build locally
pnpm lint         # run ESLint
```

Create a `.env.local` file (see [Environment variables](#environment-variables)) before the newsletter forms will work.

---

## Project structure

```
src/
├── app/                 # Pages & routes (Next.js App Router)
│   ├── page.tsx         # Homepage
│   ├── layout.tsx       # Root layout (metadata, fonts, analytics)
│   ├── about/           # About page
│   ├── blog/            # Blog index + [slug] dynamic post pages
│   ├── newsletter/      # Newsletter landing + thank-you
│   ├── author/          # Author page (Victor)
│   ├── terms/, privacy/ # Legal pages
│   ├── api/             # Serverless routes (newsletter, indexnow, etc.)
│   ├── sitemap.ts, robots.ts
│   ├── feed.xml/, llms.txt/, llms-full.txt/   # auto-generated SEO/LLM files
│   └── globals.css      # Tailwind import + brand color theme tokens
├── components/          # React components (Hero, Footer, FAQ, blog, etc.)
└── lib/                 # Utilities (mdx loader, metadata, faq data, etc.)

content/blog/            # Blog posts as .mdx files (filename = URL slug)
public/images/blog/      # Blog cover images (1200×630 SVG, one per post)
docs/                    # Project documentation (you are here)
```

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for how it all fits together.

---

## Environment variables

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_SITE_URL=https://realtyfy.com

# Beehiiv (newsletter) — get these from beehiiv.com → Settings → Integrations → API
BEEHIIV_API_KEY=your_beehiiv_api_key
BEEHIIV_PUBLICATION_ID=your_publication_id
```

`NEXT_PUBLIC_SITE_URL` is the single source of truth for the domain — it drives canonical URLs, sitemap, OG tags, and IndexNow. Newsletter signups will return an error until the Beehiiv values are real.

---

## Writing blog posts

Posts are MDX files in `content/blog/`. Full instructions — frontmatter schema, the SEO/LLM writing rules, and the cover-image template — are in [docs/BLOG-INSTRUCTIONS.md](docs/BLOG-INSTRUCTIONS.md).

---

## Theming

The brand colors live in one place: the `@theme` block in [src/app/globals.css](src/app/globals.css).

- **Emerald** (`--color-brand-*`) is the primary color — links, highlights, nav, blog covers.
- **Orange** (`--color-accent-*`) is the accent — used on the primary call-to-action buttons.

Change a color by editing its hex values. Full brand reference: [docs/BRANDING.md](docs/BRANDING.md).

---

## Before you go live

- [ ] Add real **Beehiiv** API key + publication ID to `.env.local`
- [ ] Replace **`public/logo.png`** and **`public/og-default.png`** with Realtyfy artwork
- [ ] Add a real favicon (`src/app/icon.png`) and apple icon (`src/app/apple-icon.png`)
- [ ] Set **`NEXT_PUBLIC_SITE_URL`** to the production domain
- [ ] (Optional) Add **GTM**, **Ahrefs**, **Bing**, and **IndexNow** IDs — see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
- [ ] Deploy to Vercel and connect the domain

Step-by-step go-live guide: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

---

## Documentation

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — how the site is built
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — deploy + go-live checklist
- [docs/BRANDING.md](docs/BRANDING.md) — brand identity, colors, theming
- [docs/BLOG-INSTRUCTIONS.md](docs/BLOG-INSTRUCTIONS.md) — how to write & publish posts
