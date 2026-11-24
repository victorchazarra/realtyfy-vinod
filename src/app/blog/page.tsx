import { Suspense } from "react";
import { getAllPostsMeta, getAllCategories, getAllTags } from "@/lib/mdx";
import { BlogSearch } from "@/components/BlogSearch";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://realtyfy.com";

type Props = {
  searchParams: Promise<{ tag?: string; category?: string; q?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const isFiltered = params.tag || params.category || params.q;

  const base: Metadata = {
    title: "Realtyfy Blog | Investing in Indonesian Real Estate",
    description:
      "Market analysis, foreign ownership rules, rental yields, and where to buy — insights on investing in Indonesian real estate from the Realtyfy team.",
    alternates: {
      canonical: `${SITE_URL}/blog`,
    },
    openGraph: {
      title: "Realtyfy Blog | Investing in Indonesian Real Estate",
      description:
        "Market analysis, foreign ownership rules, rental yields, and where to buy — insights on investing in Indonesian real estate.",
      url: `${SITE_URL}/blog`,
      siteName: "Realtyfy",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-default.png`,
          width: 1200,
          height: 630,
          alt: "Realtyfy Blog - Indonesian Real Estate Investing Insights",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@realtyfy",
      title: "Realtyfy Blog | Investing in Indonesian Real Estate",
      description:
        "Market analysis, foreign ownership rules, rental yields, and where to buy — insights on investing in Indonesian real estate.",
      images: [`${SITE_URL}/og-default.png`],
    },
  };

  if (isFiltered) {
    base.robots = { index: false, follow: true };
  }

  return base;
}

export default function BlogPage() {
  const posts = getAllPostsMeta();
  const categories = getAllCategories();
  const allTags = getAllTags();

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Realtyfy Blog",
    description:
      "Insights on investing in Indonesian real estate — market analysis, ownership rules, rental yields, and due diligence.",
    url: `${SITE_URL}/blog`,
    author: {
      "@type": "Organization",
      name: "Realtyfy",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Realtyfy",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-default.png`,
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Server-rendered header — visible to crawlers before JS loads */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-0 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          The <span className="text-brand-500">Realtyfy</span> Blog
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
          Investing in Indonesian real estate — markets, ownership rules, yields,
          and due diligence.
        </p>
      </div>
      <Suspense>
        <BlogSearch posts={posts} categories={categories} allTags={allTags} />
      </Suspense>
    </>
  );
}
