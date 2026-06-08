import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://realtyfy.com";

export const metadata: Metadata = {
  title: "About Realtyfy | Investing in Indonesian Real Estate",
  description:
    "Realtyfy shares honest, on-the-ground analysis of the Indonesian property market — founded by Bali-based investor Victor Chazarra.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Realtyfy | Investing in Indonesian Real Estate",
    description:
      "Realtyfy shares honest, on-the-ground analysis of the Indonesian property market — founded by Bali-based investor Victor Chazarra.",
    url: `${SITE_URL}/about`,
    images: [{ url: `${SITE_URL}/og-default.png`, width: 1230, height: 630, alt: "About Realtyfy" }],
  },
};

const founders = [
  {
    name: "Victor Chazarra",
    role: "Founder",
    focus: "Indonesian real estate",
    image: "team-victor",
    bio: "Investor based in Bali. Started Realtyfy to share what investing in Indonesian property actually looks like from the ground — the markets, the legal structures, the real numbers, and the pitfalls.",
    linkedin: "https://www.linkedin.com/in/chazarra/",
  },
];

export default function AboutPage() {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Realtyfy",
    url: SITE_URL,
    "@id": "https://realtyfy.com/#organization",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 1200,
      height: 630,
    },
    description:
      "Realtyfy helps investors buy Indonesian real estate with confidence — market analysis, foreign ownership guidance, and on-the-ground investment insights.",
    founder: founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.role,
      description: f.bio,
      sameAs: f.linkedin,
    })),
    sameAs: [
      "https://www.linkedin.com/in/chazarra/",
    ],
  };

  const knowsAboutMap: Record<string, string[]> = {
    "Victor Chazarra": [
      "Indonesian real estate",
      "Bali property investment",
      "foreign property ownership",
      "rental yields",
      "real estate due diligence",
    ],
  };

  const personLds = founders.map((f) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `https://realtyfy.com/about#${f.name.toLowerCase().replace(/\s+/g, "-")}`,
    name: f.name,
    jobTitle: `${f.role}, Realtyfy`,
    description: f.bio,
    url: `${SITE_URL}/about`,
    sameAs: f.linkedin,
    knowsAbout: knowsAboutMap[f.name] || [],
    worksFor: {
      "@type": "Organization",
      name: "Realtyfy",
      url: SITE_URL,
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      {personLds.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      {/* Section 1: Hero */}
      <section className="bg-gray-100 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            About <span className="text-brand-500">Realtyfy</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            Honest, on-the-ground analysis of the Indonesian property market.
          </p>
        </div>
      </section>

      {/* Section 2: The Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Why Realtyfy exists
          </h2>
          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            <p>
              Indonesia is one of the most exciting property markets in the
              world — and one of the most misunderstood. Foreign ownership rules
              confuse people, the best deals rarely reach the listings sites, and
              too many investors lose money to avoidable mistakes.
            </p>
            <p>
              I&apos;ve been investing here on the ground in Bali. Along the way I
              learned how the legal structures really work, how to read the
              numbers, and how to spot the traps that catch first-time foreign
              buyers.
            </p>
            <p>
              Realtyfy is where I share all of it openly — so you can invest with
              confidence instead of guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Founder */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Meet the Founder
          </h2>

          <div className="grid grid-cols-1 max-w-sm mx-auto gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src={`/images/${founder.image}.jpg`}
                    alt={`${founder.name}, ${founder.role} at Realtyfy`}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{founder.name}</h3>
                <p className="text-sm text-brand-500 font-medium mb-3">
                  {founder.role} · {founder.focus}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 min-h-[80px]">{founder.bio}</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-500 hover:text-brand-600 font-medium"
                >
                  LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What Realtyfy Does */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            What Realtyfy does
          </h2>
          <div className="space-y-4 text-base text-gray-700 leading-relaxed text-left">
            <p>
              Realtyfy publishes research and practical guides on investing in
              Indonesian real estate — where to buy, how foreign ownership works,
              what returns to expect, and how to do proper due diligence.
            </p>
            <p>
              The focus is high-demand markets like Bali and Jakarta, plus the
              emerging regions worth watching. Everything is written plainly, from
              real experience.
            </p>
            <p>
              The best way to follow along is the free newsletter — new analysis
              and market updates, straight to your inbox.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
