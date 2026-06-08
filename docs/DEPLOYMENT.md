# Deployment & Go-Live Guide

Step-by-step to take Realtyfy from this folder to a live site. The site is built for [Vercel](https://vercel.com), but any Next.js-compatible host works.

---

## 1. Newsletter (Beehiiv)

The newsletter is the site's main goal, so set this up first.

1. Create a publication at [beehiiv.com](https://www.beehiiv.com).
2. Go to **Settings → Integrations → API** and create an API key.
3. Copy the **API key** and the **Publication ID** (starts with `pub_`).
4. Add them to your environment (locally in `.env.local`, and in Vercel later):

```bash
BEEHIIV_API_KEY=...
BEEHIIV_PUBLICATION_ID=pub_...
```

Until these are set, signup forms return an error (the rest of the site works fine).

---

## 2. Deploy to Vercel

1. Push this project to a GitHub/GitLab repo (or use the Vercel CLI / drag-and-drop).
2. In Vercel, **Import Project**. It auto-detects Next.js — no build config needed.
3. Under **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` → `https://realtyfy.com`
   - `BEEHIIV_API_KEY`
   - `BEEHIIV_PUBLICATION_ID`
4. Deploy. Every push to the `main` branch auto-deploys.

> The daily IndexNow cron in `vercel.json` runs automatically on Vercel.

---

## 3. Connect the domain

1. In Vercel → **Settings → Domains**, add `realtyfy.com` (and `www.realtyfy.com`).
2. Point your registrar's DNS at Vercel as instructed.
3. `next.config.ts` already redirects `www.realtyfy.com → realtyfy.com`.
4. If the production domain is **not** `realtyfy.com`, update `NEXT_PUBLIC_SITE_URL` to match — that one variable controls canonical URLs, sitemap, OG tags, and IndexNow.

---

## 4. Replace placeholder brand assets

These files still contain the original (non-Realtyfy) artwork:

| File | What it is |
|---|---|
| `public/logo.png` | Logo used in JSON-LD structured data |
| `public/og-default.png` | Social-share image (1200×630) shown on every page |
| `src/app/icon.png` | Favicon |
| `src/app/apple-icon.png` | iOS home-screen icon |

Replace them with Realtyfy artwork (keep the same filenames). The site navigation/footer use a **text logo** ("Realtyfy"), so no image is required there unless you want one.

---

## 5. Analytics & verification (optional)

All of these are **off by default** and live in [src/app/layout.tsx](../src/app/layout.tsx), marked with `TODO(Realtyfy)` comments. Add the IDs and uncomment.

| Tool | Where | What to do |
|---|---|---|
| **Google Tag Manager** | `layout.tsx` (`<head>` script + `<noscript>`) | Replace `GTM-XXXXXXX` with your container ID, uncomment both blocks |
| **Ahrefs Web Analytics** | `layout.tsx` (`<Script>`) | Replace `REPLACE_ME_AHREFS_KEY` with your `data-key`, uncomment |
| **Bing Webmaster** | `layout.tsx` (`<meta>`) | Replace `REPLACE_ME_BING_VERIFICATION`, uncomment |

Vercel Analytics is already active (no setup needed).

---

## 6. IndexNow (optional)

IndexNow instantly notifies Bing/Yandex when content changes. It's wired up but uses a placeholder key.

1. Generate a key at [indexnow.org](https://www.indexnow.org/).
2. In [src/app/api/indexnow/route.ts](../src/app/api/indexnow/route.ts), set `INDEXNOW_KEY` to your key.
3. Rename `public/realtyfy-indexnow-key-2026.txt` to `<your-key>.txt` and make its contents exactly your key.

(The cron will then ping search engines daily.)

---

## 7. Post-deploy verification

After the site is live, confirm:

- [ ] Newsletter signup actually subscribes (check Beehiiv dashboard)
- [ ] `https://realtyfy.com/sitemap.xml` lists all pages + posts
- [ ] `https://realtyfy.com/feed.xml` and `/llms.txt` load
- [ ] Social preview looks right (test a URL in [opengraph.xyz](https://www.opengraph.xyz))
- [ ] Submit the sitemap in Google Search Console & Bing Webmaster Tools
