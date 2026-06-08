import { getPostBySlug, getAllPostsMeta } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://realtyfy.com";

export async function GET() {
  const posts = getAllPostsMeta();

  const sections: string[] = [];

  sections.push(`# Realtyfy — Full Content

> Realtyfy helps you invest in Indonesian real estate with confidence — market analysis, foreign ownership guidance, and on-the-ground investment insights.

Website: ${SITE_URL}
Founder: Victor Chazarra (Founder, Realtyfy — real estate investor focused on the Indonesian market)

---
`);

  for (const meta of posts) {
    const post = await getPostBySlug(meta.slug);
    if (!post) continue;

    // Strip HTML tags to get plain text
    const plainText = post.content
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, " ")
      .trim();

    sections.push(`## ${post.title}

URL: ${SITE_URL}/blog/${post.slug}
Published: ${post.date}
Author: ${post.author || "Victor Chazarra"}
Tags: ${post.tags.join(", ")}

${plainText}

---
`);
  }

  const content = sections.join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
