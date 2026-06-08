import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { TeamSection } from "@/components/TeamSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { getFeaturedPosts } from "@/lib/mdx";
import { faqs } from "@/lib/faq-data";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://realtyfy.com";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const recentPosts = getFeaturedPosts();

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://realtyfy.com/#organization",
    name: "Realtyfy",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 1200,
      height: 630,
    },
    description:
      "Realtyfy helps investors buy Indonesian real estate with confidence — market analysis, foreign ownership guidance, and on-the-ground investment insights.",
    founder: {
      "@type": "Person",
      "@id": "https://realtyfy.com/about#victor-chazarra",
      name: "Victor Chazarra",
      jobTitle: "Founder",
      description:
        "Founder of Realtyfy. Real estate investor focused on the Indonesian property market.",
      knowsAbout: [
        "Indonesian real estate",
        "property investment",
        "Bali real estate",
        "foreign property ownership",
        "real estate due diligence",
      ],
    },
    sameAs: [
      "https://www.linkedin.com/in/chazarra/",
    ],
    knowsAbout: [
      "Indonesian real estate investment",
      "Bali property market",
      "Jakarta property market",
      "Foreign property ownership in Indonesia",
      "Rental yields and ROI",
      "Real estate due diligence",
    ],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://realtyfy.com/#website",
    name: "Realtyfy",
    url: SITE_URL,
    publisher: { "@id": "https://realtyfy.com/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://realtyfy.com/about#victor-chazarra",
    name: "Victor Chazarra",
    url: `${SITE_URL}/about`,
    jobTitle: "Founder, Realtyfy",
    description:
      "Real estate investor focused on the Indonesian property market. Founder of Realtyfy, where he shares market analysis and investment guidance for Indonesia.",
    worksFor: { "@id": "https://realtyfy.com/#organization" },
    knowsAbout: [
      "Indonesian real estate",
      "Bali property investment",
      "Jakarta property market",
      "Foreign property ownership in Indonesia",
      "Rental yields and ROI",
      "Real estate due diligence",
    ],
    sameAs: ["https://www.linkedin.com/in/chazarra/"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HeroSection />
      <WhatWeDoSection />
      <TeamSection />
      <FaqSection />

      {/* Blog links section for internal linking + SEO juice */}
      {recentPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                From the Blog
              </h2>
              <p className="mt-2 text-gray-500">
                Insights on investing in Indonesian real estate — markets, ownership rules, and returns.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  {post.coverImage ? (
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-brand-50 to-brand-50 flex items-center justify-center">
                      <span className="text-4xl font-extrabold text-brand-200">R</span>
                    </div>
                  )}
                  <div className="p-5">
                    {post.tags[0] && (
                      <span className="text-xs font-semibold tracking-wide uppercase text-brand-500">
                        {post.tags[0]}
                      </span>
                    )}
                    <h3 className="mt-1 text-base font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                View all articles &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      <FinalCtaSection />
    </>
  );
}
