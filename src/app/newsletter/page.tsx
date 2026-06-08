"use client";

// The Lead — newsletter landing page
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const newsletterRows = [
  {
    // Row: 1x + 1x + 1x (same as homepage row 2)
    height: "h-auto",
    parallaxSpeed: 0.08,
    items: [
      { image: "nl-image-1", span: 1, alt: "Indonesian property market analysis" },
      { image: "nl-image-2", span: 1, alt: "Foreign ownership guides" },
      { image: "nl-image-3", span: 1, alt: "Real estate investment insights" },
    ],
  },
];

function NewsletterImageRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {newsletterRows[0].items.map((box) => (
        <div
          key={box.image}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={`/images/${box.image}.png`}
            alt={box.alt}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}

const blogPosts = [
  { title: "Can Foreigners Own Property in Indonesia? The Honest Answer", href: "/blog/can-foreigners-own-property-in-indonesia" },
  { title: "Bali Property Investment Guide for 2026", href: "/blog/bali-property-investment-guide-2026" },
  { title: "PT PMA vs Leasehold in Indonesia: Which Should You Use?", href: "/blog/pt-pma-vs-leasehold-indonesia" },
  { title: "Real Rental Yields in Bali: What the Numbers Actually Look Like", href: "/blog/rental-yields-bali-real-estate" },
];

function BlogLinks() {
  return (
    <section className="py-16 sm:py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-left mb-10 max-w-[280px] sm:max-w-lg mx-auto">
          Start with these guides.
        </h2>
        <div className="max-w-[280px] sm:max-w-lg mx-auto flex flex-col">
          {blogPosts.map((post, i) => (
            <div key={post.href}>
              {i > 0 && (
                <div className="h-px bg-gray-300 my-4" />
              )}
              <a
                href={post.href}
                className="block text-left text-base sm:text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {post.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterFeatures() {
  return (
    <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 text-center mb-16"
        >
          <span className="font-bold">Indonesian real estate, explained.</span>
        </motion.h2>
        <NewsletterImageRow />
      </div>
    </section>
  );
}

import { Suspense } from "react";

function NewsletterContent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();

  const utmSource = searchParams.get("utm_source") || "website";
  const utmMedium = searchParams.get("utm_medium") || "organic";
  const utmCampaign = searchParams.get("utm_campaign") || "newsletter_general";
  const utmTerm = searchParams.get("utm_term") || undefined;
  const utmContent = searchParams.get("utm_content") || undefined;

  // Push UTM params to GTM dataLayer so tags can fire based on source/medium/campaign
  useEffect(() => {
    window.dataLayer?.push({
      event: "newsletter_page_view",
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      ...(utmTerm && { utm_term: utmTerm }),
      ...(utmContent && { utm_content: utmContent }),
    });
  }, [utmSource, utmMedium, utmCampaign, utmTerm, utmContent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          utm_term: utmTerm,
          utm_content: utmContent,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        const ref = data.referral_code ? `&ref=${data.referral_code}` : "";
        window.location.href = `/newsletter/thank-you?email=${encodeURIComponent(email)}${ref}`;
        return;
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong.");
    }
  };

  return (
    <>
    <section className="relative min-h-[60vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <p className="text-base sm:text-lg font-semibold tracking-widest text-gray-900 uppercase mb-4">
          Realtyfy Newsletter
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight">
          Invest in <span className="text-brand-500">Indonesian</span> real estate with confidence.
        </h1>

        <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-bold text-gray-500">
          A newsletter for property investors.
        </p>

        <div className="mt-8 max-w-md mx-auto bg-white border border-gray-200 rounded-2xl px-6 py-6 sm:px-8 sm:py-8">
          <p className="text-base sm:text-lg font-bold text-gray-500 leading-relaxed text-center mb-6">
            From an investor on the ground in Bali.
          </p>

          <ul className="space-y-3 text-base sm:text-lg text-gray-600 mb-6 mx-auto w-fit">
            <li className="flex items-start gap-2">
              <span className="text-brand-500 mt-0.5">•</span>
              <span>Market analysis and where to buy.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-500 mt-0.5">•</span>
              <span>Ownership rules and real numbers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-500 mt-0.5">•</span>
              <span>No hype, no spam.</span>
            </li>
          </ul>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-3"
          >
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              required
              className="w-full px-4 py-2.5 text-xs text-gray-900 placeholder-gray-400 bg-white rounded-full border border-gray-200 shadow-lg outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full py-2.5 text-xs font-bold text-white bg-accent-500 rounded-full hover:bg-accent-600 transition-colors whitespace-nowrap disabled:opacity-60"
            >
              {status === "loading"
                ? "..."
                : status === "success"
                  ? "You're In!"
                  : "Subscribe today"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-3 text-sm font-medium ${status === "success" ? "text-green-600" : "text-red-500"}`}
            >
              {message}
            </p>
          )}
        </div>

      </div>
    </section>

    <BlogLinks />
    <NewsletterFeatures />

    {/* Bottom opt-in */}
    <section className="relative py-16 sm:py-24 bg-[#3a3a3a] overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-base sm:text-lg font-semibold tracking-widest text-gray-400 uppercase mb-4">
          Realtyfy Newsletter
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
          Invest in Indonesia<br />with <span className="text-brand-400">confidence</span>.
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto leading-loose sm:leading-relaxed">
          Real analysis from the ground in Bali.<br />Drop your email to sign up today.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full max-w-xs mx-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0 sm:bg-white sm:rounded-full sm:shadow-lg sm:border sm:border-gray-200 sm:overflow-hidden"
        >
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            required
            className="w-full px-4 py-2.5 text-xs text-gray-900 placeholder-gray-400 bg-white rounded-full border border-gray-200 shadow-lg outline-none disabled:opacity-50 sm:flex-1 sm:border-0 sm:shadow-none sm:rounded-none sm:bg-transparent"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full py-2.5 text-xs font-bold text-white bg-accent-500 rounded-full hover:bg-accent-600 transition-colors whitespace-nowrap disabled:opacity-60 sm:w-auto sm:px-5 sm:py-2.5"
          >
            {status === "loading"
              ? "..."
              : status === "success"
                ? "You're In!"
                : "Subscribe today"}
          </button>
        </form>
        {message && (
          <p className={`mt-3 text-sm font-medium ${status === "success" ? "text-green-600" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </div>
    </section>
    </>
  );
}

export default function NewsletterPage() {
  return (
    <Suspense>
      <NewsletterContent />
    </Suspense>
  );
}
