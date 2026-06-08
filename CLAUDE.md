# Realtyfy — Project Instructions for Claude Code

## Project Overview

Realtyfy is a real estate **investment** content brand focused on the Indonesian property market, founded by Victor Chazarra. This repo is the **marketing/content website** at `realtyfy.com` — a public site with a blog, newsletter signup, and lead capture. No authentication, no user accounts. The primary call to action is **joining the newsletter**.

- **Domain**: realtyfy.com
- **Founder/contact**: Victor Chazarra — hello@fanconvert.com, +1 (202) 992-8288
- **Deploy**: Vercel auto-deploys on push to `main`
- **Package manager**: pnpm

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (no CSS modules, no styled-components)
- Framer Motion (animations)
- Upstash Redis (votes, wishes, feature requests)
- Beehiiv API (newsletter "The Lead")
- @vercel/analytics
- File-based MDX blog (gray-matter + remark)

## Commands

```bash
pnpm dev          # Local dev server
pnpm build        # Production build
pnpm lint         # ESLint
```

## Project Structure

```
src/
├── app/              # Pages and API routes (App Router)
│   ├── api/          # Serverless functions (subscribe, votes, wishes, etc.)
│   ├── blog/         # Blog index + [slug] dynamic pages
│   ├── newsletter/   # "The Lead" newsletter landing + thank-you
│   ├── gift/         # Lead magnet: Meeting Agent
│   ├── smart-folders/ # Lead magnet: Smart Folders
│   ├── ugcmix/       # FFmpeg WASM tool (has special COOP/COEP headers)
│   └── ...           # about, author, labs, terms, privacy
├── components/       # React components (Navbar, Footer, sections, blog)
└── lib/              # Utilities
    ├── mdx.ts        # Blog post loading and parsing
    ├── redis.ts      # Upstash Redis client
    ├── metadata.ts   # Reusable page metadata generator
    ├── heading-ids.ts
    ├── image-optimizer.ts
    ├── faq-extractor.ts
    └── faq-data.ts

content/
├── blog/             # Published MDX blog posts (34+)
└── blog-wip/         # Work in progress (not published)

public/
├── images/blog/      # Blog cover images (SVG, 1200x630)
└── downloads/        # Lead magnet files
```

## Blog Posts

Full instructions in `BLOG-INSTRUCTIONS.md`. Key points:

- **Location**: `content/blog/{slug}.mdx` — filename = URL slug
- **Cover image**: `public/images/blog/{slug}.svg` — 1200x630px, always SVG
- **Frontmatter**: title, excerpt, date, tags, category, coverImage, readingTime, author, featured
- **Content rules**: BLUF first paragraph, question-based H2s, 2,000+ words, data/stats, FAQ section
- **LLM-optimized**: Written for AI citation (structured answers, lists, tables)
- **Author default**: "Victor Chazarra"
- **Topic focus**: Investing in Indonesian real estate (Bali, Jakarta, ownership rules, yields, due diligence)
- **Push directly to `main`** — no branches, no PRs for blog posts

## Design Conventions

- **Primary color**: Purple `#8b5cf6` with pink gradient accent `#ec4899`
- **Font**: Inter (Google Fonts)
- **Dark sections**: Use purple/dark gradients for emphasis
- **Animations**: Framer Motion (fade-in, parallax, scale)
- **Component style**: Custom Tailwind components — no UI library (no shadcn, no MUI)
- **Buttons**: Gradient purple-to-pink, rounded-full
- **Cards**: rounded-2xl, border-gray-100, hover shadow effects
- **Images**: Lazy loading, responsive, border-radius

## API Routes & External Services

| Route | Service | Purpose |
|-------|---------|---------|
| `/api/subscribe` | Beehiiv | Newsletter signup |
| `/api/newsletter-subscribe` | Beehiiv | Signup with UTM + tags |
| `/api/gift-download` | Beehiiv | Track Meeting Agent downloads |
| `/api/smart-folders-download` | Beehiiv | Track Smart Folders downloads |
| `/api/votes` | Upstash Redis | Feature voting |
| `/api/wishes` | Upstash Redis | Waitlist/feature requests |
| `/api/referral-code` | Beehiiv | Referral tracking |
| `/api/beehiiv-tag` | Beehiiv | Add tags to subscribers |
| `/api/indexnow` | Bing | SEO index submission (daily cron) |

## Environment Variables

Required in `.env.local` (never commit):
- `BEEHIIV_API_KEY`, `BEEHIIV_PUBLICATION_ID`
- `KV_REST_API_URL`, `KV_REST_API_TOKEN`
- `KV_REST_API_READ_ONLY_TOKEN`, `KV_URL`, `REDIS_URL`

## SEO & LLM Optimization

Every page should include:
- JSON-LD structured data (Organization, BlogPosting, FAQ, Breadcrumb)
- Open Graph + Twitter meta tags
- Canonical URLs
- Auto-generated: sitemap.xml, feed.xml, robots.txt, llms.txt

## Do NOT

- Add UI component libraries (shadcn, MUI, Chakra) — use custom Tailwind
- Add authentication libraries — this is a public site
- Modify security headers in `next.config.ts` without review
- Commit `.env.local` or any secrets
- Create branches for blog posts — push directly to `main`
- Use CSS modules or styled-components — Tailwind only
