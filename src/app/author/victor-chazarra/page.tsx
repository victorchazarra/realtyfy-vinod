import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://realtyfy.com";

export const metadata: Metadata = {
  title: "Victor Chazarra | Founder of Realtyfy",
  description: "Victor Chazarra is a Bali-based real estate investor and founder of Realtyfy. He writes about investing in Indonesian property — markets, ownership rules, and returns.",
  alternates: { canonical: "/author/victor-chazarra" },
  openGraph: {
    title: "Victor Chazarra | Founder of Realtyfy",
    description: "Victor Chazarra is a Bali-based real estate investor and founder of Realtyfy. He writes about investing in Indonesian property — markets, ownership rules, and returns.",
    url: `${SITE_URL}/author/victor-chazarra`,
    images: [{ url: `${SITE_URL}/images/team-victor.jpg`, width: 400, height: 400, alt: "Victor Chazarra, founder of Realtyfy" }],
  },
};

export default function VictorChazarraPage() {
  // Get all posts by Victor
  const allPosts = getAllPostsMeta();
  const victorPosts = allPosts.filter(
    (p) => p.author === "Victor Chazarra"
  );

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://realtyfy.com/about#victor-chazarra",
    name: "Victor Chazarra",
    url: `${SITE_URL}/author/victor-chazarra`,
    image: `${SITE_URL}/images/team-victor.jpg`,
    jobTitle: "Founder, Realtyfy",
    description: "Bali-based real estate investor and founder of Realtyfy. He writes about investing in Indonesian property from his own experience on the ground.",
    worksFor: {
      "@type": "Organization",
      "@id": "https://realtyfy.com/#organization",
      name: "Realtyfy",
    },
    sameAs: [
      "https://www.linkedin.com/in/chazarra/",
    ],
    knowsAbout: [
      "Indonesian real estate",
      "Bali property investment",
      "Jakarta property market",
      "foreign property ownership in Indonesia",
      "rental yields and ROI",
      "real estate due diligence",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      <section className="bg-gray-100 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="/images/team-victor.jpg"
              alt="Victor Chazarra, founder of Realtyfy"
              width={120}
              height={120}
              className="w-28 h-28 rounded-full object-cover object-top shadow-md"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Victor Chazarra
              </h1>
              <p className="text-brand-500 font-semibold mt-1">Founder of Realtyfy · Real estate investor in Bali</p>
              <a
                href="https://www.linkedin.com/in/chazarra/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-brand-500 hover:text-brand-600 font-medium"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            <p>
              I&apos;m a real estate investor based in Bali. I started Realtyfy to share what investing in Indonesian property actually looks like from the ground.
            </p>
            <p>
              When I write about markets, ownership structures, or returns, it comes from deals and research I&apos;m actually involved in — not recycled headlines. If it wouldn&apos;t hold up for my own money, it doesn&apos;t make it into an article.
            </p>
            <p>
              My goal with Realtyfy is simple: help you invest in Indonesia with confidence instead of guesswork.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Articles by Victor ({victorPosts.length})
          </h2>
          <div className="space-y-4">
            {victorPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-base font-bold text-gray-900 hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-gray-400 mt-2">{post.date} · {post.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
