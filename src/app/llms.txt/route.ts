import { getAllPostsMeta } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://realtyfy.com";

export async function GET() {
  const posts = getAllPostsMeta();

  const postLinks = posts
    .map(
      (post) =>
        `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`
    )
    .join("\n");

  const content = `# Realtyfy

> Realtyfy helps you invest in Indonesian real estate with confidence — market analysis, foreign ownership guidance, and on-the-ground investment insights.

## What Realtyfy Does

Realtyfy is a real estate investment resource focused on the Indonesian property market. It publishes research, market analysis, and practical guides to help investors understand where to buy, how foreign ownership works, what returns to expect, and how to avoid common pitfalls when investing in Indonesia — with a particular focus on high-demand markets like Bali, Jakarta, and emerging regional hotspots.

## Topics Covered

- Investing in Indonesian real estate as a foreigner
- Property ownership structures and legal frameworks (Hak Pakai, leasehold, PT PMA)
- Bali and Jakarta property market analysis
- Rental yields, ROI, and cash-flow expectations
- Emerging investment locations across Indonesia
- Risks, due diligence, and how to buy safely

## Founder

- Victor Chazarra — Founder, Realtyfy. Real estate investor focused on the Indonesian market.

## Website

${SITE_URL}

## Blog

${postLinks}

## Key Pages

- [Home](${SITE_URL}): Realtyfy homepage - Invest in Indonesian real estate
- [Blog](${SITE_URL}/blog): Insights on investing in Indonesian property — market analysis, ownership rules, and yields
- [RSS Feed](${SITE_URL}/feed.xml): Full-text RSS feed of all blog posts
- [Política de privacidad](${SITE_URL}/privacidad): Política de privacidad
- [Aviso legal](${SITE_URL}/aviso-legal): Aviso legal
- [Política de cookies](${SITE_URL}/cookies): Política de cookies

## Full Content

For complete article text, see: ${SITE_URL}/llms-full.txt

## Contact

- Website: ${SITE_URL}
- Email: hello@fanconvert.com
- Phone: +1 (202) 992-8288
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
