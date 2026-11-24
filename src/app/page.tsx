import type { Metadata } from "next";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/sections/Hero";
import Problema from "@/components/landing/sections/Problema";
import Giro from "@/components/landing/sections/Giro";
import QueVasAVer from "@/components/landing/sections/QueVasAVer";
import Sistema from "@/components/landing/sections/Sistema";
import EsParaTi from "@/components/landing/sections/EsParaTi";
import NoEsModa from "@/components/landing/sections/NoEsModa";
import Faq from "@/components/landing/sections/Faq";
import CtaFinal from "@/components/landing/sections/CtaFinal";
import Footer from "@/components/landing/sections/Footer";

// Canonical production domain — mirrors `metadataBase` in app/layout.tsx.
const SITE_URL = "https://realtyfy.com";

const TITLE = "Realtyfy — No tienes que elegir entre tu país y tu patrimonio";
const DESCRIPTION =
  "Hay una forma serena y 100% legal de desplegar tu capital fuera de España, conservar lo que genera —reinvirtiendo el beneficio al 0%— y seguir viviendo donde quieres. Más espacio. Menos dependencia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Realtyfy",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Home() {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Realtyfy",
    url: SITE_URL,
    description:
      "Realtyfy ayuda a empresarios e inversores a desplegar su capital fuera de España de forma serena y 100% legal, con estructura internacional y propiedad freehold.",
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Realtyfy",
    url: SITE_URL,
    inLanguage: "es-ES",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <div className="bg-ivory font-body text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <Nav />
      <Hero />
      <Problema />
      <Giro />
      <QueVasAVer />
      <Sistema />
      <EsParaTi />
      <NoEsModa />
      <Faq />
      <CtaFinal />
      <Footer />
    </div>
  );
}
