import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

// Heading font for the Spanish landing (Brand Book v3.0). Body text uses Inter,
// loaded site-wide via the Google Fonts <link> below.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Realtyfy | Invest in Indonesian Real Estate",
  description:
    "Realtyfy helps you invest in Indonesian real estate with confidence. Market analysis, foreign ownership guidance, and investment insights from the Realtyfy team.",
  metadataBase: new URL("https://realtyfy.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://realtyfy.com",
    siteName: "Realtyfy",
    title: "Realtyfy | Invest in Indonesian Real Estate",
    description:
      "Realtyfy helps you invest in Indonesian real estate with confidence. Market analysis, foreign ownership guidance, and investment insights from the Realtyfy team.",
    images: [
      {
        url: "https://realtyfy.com/og-default.png",
        width: 1230,
        height: 630,
        alt: "Realtyfy - Invest in Indonesian real estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@realtyfy",
    title: "Realtyfy | Invest in Indonesian Real Estate",
    description:
      "Realtyfy helps you invest in Indonesian real estate with confidence. Market analysis, foreign ownership guidance, and investment insights from the Realtyfy team.",
    images: ["https://realtyfy.com/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        {/* TODO(Realtyfy): replace with Realtyfy's own Bing Webmaster verification code */}
        {/* <meta name="msvalidate.01" content="REPLACE_ME_BING_VERIFICATION" /> */}
        {/* TODO(Realtyfy): replace GTM-XXXXXXX with Realtyfy's own Google Tag Manager container ID, then uncomment.
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script>
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Realtyfy Blog"
          href="/feed.xml"
        />
        <link rel="llms" href="/llms.txt" />
        {/* TODO(Realtyfy): replace data-key with Realtyfy's own Ahrefs Web Analytics key, then uncomment.
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="REPLACE_ME_AHREFS_KEY"
          strategy="afterInteractive"
        /> */}
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-brand-600 focus:font-semibold"
        >
          Skip to content
        </a>
        {/* TODO(Realtyfy): re-enable with Realtyfy's own GTM container ID when GTM is configured.
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
