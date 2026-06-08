# Realtyfy Blog Post Creation Instructions

These instructions are for creating and publishing blog posts to the Realtyfy blog. Realtyfy covers investing in Indonesian real estate (Bali, Jakarta, ownership rules, yields, due diligence).

## Repository

- **Branch**: `main` (push directly)
- **Deploy**: Vercel auto-deploys on push to `main`

> Note: Use your own Git credentials / SSH key for pushing. Do not store access tokens in this file or any committed file.

---

## Step 1: Create the Blog Post MDX File

### File location

```
content/blog/{slug}.mdx
```

The filename becomes the URL slug: `content/blog/my-post-title.mdx` → `realtyfy.com/blog/my-post-title`

### Frontmatter schema (required)

```yaml
---
title: "Your Post Title Here"
excerpt: "A 1-2 sentence summary of the post. This appears in blog cards, meta description, and RSS feed."
date: "YYYY-MM-DD"
tags: ["tag1", "tag2", "tag3"]
category: "category-slug"
coverImage: "/images/blog/{slug}.svg"
readingTime: "X min read"
author: "Victor Chazarra"
featured: false
---
```

### Field rules

| Field         | Required | Notes                                                                                             |
| ------------- | -------- | ------------------------------------------------------------------------------------------------- |
| `title`       | Yes      | Keep under 70 characters for SEO                                                                  |
| `excerpt`     | Yes      | 120-160 characters. Write as a factual summary, not marketing copy                                |
| `date`        | Yes      | ISO format: `YYYY-MM-DD`                                                                          |
| `tags`        | Yes      | 3-5 lowercase, hyphenated tags. Reuse existing tags when possible                                 |
| `category`    | Yes      | Lowercase, hyphenated. Examples: `guides`, `industry-insights`                                    |
| `coverImage`  | Yes      | Path to SVG in `/public/images/blog/`. Must match the slug                                        |
| `readingTime` | Yes      | Estimate: ~200 words per minute                                                                   |
| `author`      | Yes      | Default: `"Victor Chazarra"`                                                                      |
| `featured`    | No       | Set `true` only for cornerstone content                                                           |

### Content structure (LLM-optimized)

Follow these rules so the post gets cited by ChatGPT, Perplexity, Claude, and Google AI Overviews:

1. **BLUF (Bottom Line Up Front)**: The first paragraph (30-60 words) must directly answer the core question of the post. Do not start with a story or context-setting paragraph.

2. **Question-based H2 headings**: Use headings that mirror natural language queries.
   - Good: `## Can Foreigners Own Property in Indonesia?`
   - Bad: `## Ownership Information`

3. **Answer targets**: Every question-based H2 MUST have a 40-60 word direct answer paragraph immediately after it, before any story or context. This is what AI Overviews and ChatGPT extract.

4. **Use H2 for main sections, H3 for subsections**. Never skip levels.

5. **Include specific data**: Statistics, percentages, yields, dollar amounts. Quantitative claims get higher citation rates.

6. **Use structured formats**: numbered lists, bullet points, comparison tables, step-by-step instructions.

7. **Target 1,500-2,000+ words**: Comprehensive guides get far more AI citations than short posts.

8. **Add an FAQ section** at the end with 3-5 Q&A pairs (`## Frequently Asked Questions`, each question as an H3).

9. **Do NOT use**: vague statements, filler paragraphs, clickbait, or exaggerated/unverified claims. Real estate guidance must be accurate — flag where readers should consult a licensed notary (PPAT) or tax advisor.

---

## Step 2: Create the Cover Image (SVG)

### File location

```
public/images/blog/{slug}.svg
```

The filename must match the `coverImage` path in frontmatter (without the `/public` prefix).

### Dimensions

**1200 x 630px** — this single size works everywhere (blog cards, OpenGraph, Twitter cards).

### SVG Template

```svg
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ecfdf5"/>
      <stop offset="100%" style="stop-color:#f0fdfa"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#10b981"/>
      <stop offset="100%" style="stop-color:#0d9488"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <circle cx="1050" cy="100" r="180" fill="#10b981" opacity="0.06"/>
  <circle cx="150" cy="530" r="140" fill="#0d9488" opacity="0.06"/>
  <circle cx="900" cy="480" r="100" fill="#10b981" opacity="0.04"/>

  <rect x="100" y="200" width="60" height="4" rx="2" fill="url(#accent)"/>

  <text x="100" y="185" font-family="Inter, system-ui, sans-serif" font-size="18" font-weight="600" fill="#10b981" letter-spacing="3">CATEGORY HERE</text>

  <text x="100" y="270" font-family="Inter, system-ui, sans-serif" font-size="52" font-weight="800" fill="#111827">Title Line One</text>
  <text x="100" y="335" font-family="Inter, system-ui, sans-serif" font-size="52" font-weight="800" fill="#111827">Title Line Two</text>
  <text x="100" y="400" font-family="Inter, system-ui, sans-serif" font-size="52" font-weight="800" fill="url(#accent)">Title Line Three</text>

  <text x="100" y="460" font-family="Inter, system-ui, sans-serif" font-size="20" fill="#6b7280">A short tagline describing the post content</text>

  <text x="100" y="560" font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="700" fill="#111827">REALTYFY</text>
  <text x="255" y="560" font-family="Inter, system-ui, sans-serif" font-size="16" fill="#9ca3af">realtyfy.com/blog</text>
</svg>
```

### Design rules

- **Background**: light emerald-to-teal gradient (`#ecfdf5` → `#f0fdfa`)
- **Decorative circles**: keep the same 3 circles on every image for brand consistency
- **Category**: uppercase, emerald (`#10b981`), letter-spacing 3
- **Title**: max 3 lines, dark gray (`#111827`), last line uses the emerald-teal gradient
- **Note**: covers use the EMERALD primary brand color. The site's accent (orange `#dd6b20`) is reserved for call-to-action buttons. These SVG hex values are hardcoded and don't follow the CSS theme, so update them here if you change the brand color.
- **Brand**: "REALTYFY" + "realtyfy.com/blog" at bottom-left, always the same
- **No photos** — keep it clean and text-based

---

## Step 3: Commit and Push

```bash
git add content/blog/{slug}.mdx public/images/blog/{slug}.svg
git commit -m "Add blog post: {Post Title}"
git push origin main
```

- Push directly to `main` — Vercel auto-deploys
- Do NOT create branches or PRs for blog posts
- Do NOT commit `.env.local` or any files with secrets
- One commit per blog post (MDX + image together)

---

## Step 4: Verify

After pushing, verify:

1. The Vercel deploy triggered
2. The post appears at `https://realtyfy.com/blog/{slug}`
3. The cover image loads on the blog listing page
4. `sitemap.xml`, `feed.xml`, and `llms.txt` include the new post (auto-generated — no manual action needed)

---

## Quick Reference

### Categories

- `guides`
- `industry-insights`

### Tags

- `indonesia`, `bali`, `jakarta`, `real-estate`, `investing`
- `foreign-ownership`, `rental-yields`, `due-diligence`, `pt-pma`

(Reuse existing tags when possible for better filtering.)
