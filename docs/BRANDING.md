# Branding & Theme

The Realtyfy visual identity, and how to change it.

## Brand

- **Name:** Realtyfy
- **Founder / voice:** Victor Chazarra — a real estate investor based in Bali
- **Positioning:** Honest, on-the-ground guidance for investing in Indonesian real estate
- **Tone:** Direct, factual, confident, no hype. Real numbers over marketing claims. Written first-person from someone who actually invests in the market.
- **Tagline in use:** *"Invest in Indonesia with confidence."*

The palette is drawn from the brand inspiration photo ([docs/brand-inspiration-image.png](brand-inspiration-image.png)) — a luxury villa at dusk: lush green forest, a turquoise pool, and warm sunset/window glow.

## Color system

Two roles, defined as CSS variables in the `@theme` block of [src/app/globals.css](../src/app/globals.css).

### Primary — Emerald green (the forest)
Used for: links, kicker labels, headline highlight words, bullets, icons, nav hover, FAQ toggle, blog filter pills, soft background glows, and blog cover images.

| Token | Hex |
|---|---|
| `--color-brand-50` | `#ecfdf5` |
| `--color-brand-100` | `#d1fae5` |
| `--color-brand-200` | `#a7f3d0` |
| `--color-brand-400` | `#34d399` |
| `--color-brand-500` | `#10b981` ← main |
| `--color-brand-600` | `#059669` ← hover |
| `--color-brand-700` | `#047857` |

### Accent — Orange / terracotta (the building + sunset glow)
Used **only** on primary call-to-action buttons (newsletter signup), so the action always pops.

| Token | Hex |
|---|---|
| `--color-accent-50` | `#fdf5ee` |
| `--color-accent-100` | `#fae7d3` |
| `--color-accent-200` | `#f4cba3` |
| `--color-accent-400` | `#e8954a` |
| `--color-accent-500` | `#dd6b20` ← main |
| `--color-accent-600` | `#c05621` ← hover |
| `--color-accent-700` | `#9c4221` |

Neutrals use Tailwind's default grays (`text-gray-900`, `text-gray-500`, etc.).

## Typography

- **Font:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts), loaded in [src/app/layout.tsx](../src/app/layout.tsx).
- Weights 300–900 are available. Headlines use 800 (extrabold); body uses 400–600.
- To change the font, swap the Google Fonts `<link>` in `layout.tsx` and update `--font-sans` in `globals.css`.

## Logo

- The nav and footer use a **text wordmark** ("Realtyfy"), styled in [src/components/Navbar.tsx](../src/components/Navbar.tsx) and [Footer.tsx](../src/components/Footer.tsx).
- `public/logo.png` is referenced only in structured data (`Organization.logo`) and should be replaced with a real Realtyfy logo.
- To use an image logo in the nav, replace the text `<Link>` in `Navbar.tsx` with an `<img>`.

## How to recolor the site

Everything routes through the tokens, so a rebrand is a few hex edits in [src/app/globals.css](../src/app/globals.css):

1. Open the `@theme` block.
2. Replace the `--color-brand-*` values (and/or `--color-accent-*`) with a new scale. Easiest source: pick a color at [tailwindcss.com/docs/colors](https://tailwindcss.com/docs/colors) and paste its 50–700 values.
3. Restart the dev server (Tailwind 4 reads `@theme` at startup) and hard-refresh the browser.

**Don't forget the blog cover SVGs.** Files in `public/images/blog/*.svg` hardcode the brand hex values (SVGs can't read CSS variables). Update them to match if you change the brand color — the color map is documented in [BLOG-INSTRUCTIONS.md](BLOG-INSTRUCTIONS.md).

### Want to swap which color is primary?
To make orange dominant (and green the accent), swap the two value sets between `--color-brand-*` and `--color-accent-*`. No component changes needed.
