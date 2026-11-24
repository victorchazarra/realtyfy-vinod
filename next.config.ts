import { readdirSync } from "node:fs";
import type { NextConfig } from "next";

// Investor decks en /deck/<nombre> → slug del deck en deck.realtyfy.com.
const DECK_ORIGEN = "https://deck.realtyfy.com";
const DECKS: Record<string, string> = {
  sumba: "sumbahills",
  "sumba-hills": "sumbahills",
  "palm-field": "palmfield",
  bonian: "bonian-village",
  "bonian-village": "bonian-village",
  mejan: "mejan-village",
  "mejan-village": "mejan-village",
  tamarind: "tamarind-rise",
  "tamarind-rise": "tamarind-rise",
};
const RUTAS_DECK = "deck|investor-deck|modelo|assets|contracts";

// Funnels (funnels.fanconvert.com) servidos aquí en /<prefijo>/<ruta>: lo que no es
// una página de esta web se reenvía a la plataforma, que lo atiende como el dominio
// www.realtyfy.com del cliente (fan-convert/fanconvert-funnels, src/lib/front.ts).
// FUNNELS_ORIGEN solo se cambia para probar en local contra otro funnels.
const FUNNELS_ORIGEN = process.env.FUNNELS_ORIGEN || "https://funnels.fanconvert.com";
const FUNNELS_VIA = `${FUNNELS_ORIGEN}/_via/www.realtyfy.com`;

// Secciones propias de la web (carpetas de src/app): solo ellas llevan su CSP.
// Lo demás lo sirve otro proyecto (marketplace, decks, funnels) con sus recursos.
const SECCIONES_WEB = readdirSync("src/app", { withFileTypes: true })
  .filter((e) => e.isDirectory() && /^[a-z0-9-]+$/.test(e.name) && e.name !== "keystatic")
  .map((e) => e.name)
  .join("|");

const nextConfig: NextConfig = {
  images: {
    // Landing hero/founder placeholders — to be swapped for real assets.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      // Dominio canónico: www.realtyfy.com. Los hosts .es redirigen ahí.
      // (realtyfy.com apex lo manda Vercel a www.realtyfy.com, que sirve la web.)
      // 307 temporal para no cachear durante el setup; pasar a permanent:true
      // cuando esté verificado.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.realtyfy.es" }],
        destination: "https://www.realtyfy.com/:path*",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "realtyfy.es" }],
        destination: "https://www.realtyfy.com/:path*",
        permanent: false,
      },
      // Oferta del directo del 18-nov: enlace corto para decir en voz alta y para el QR.
      {
        source: "/oferta",
        destination: "https://90plus.realtyfy.es/directo-18nov/oferta",
        permanent: false,
      },
      // Textos legales en español (2026-10-12): las rutas antiguas en inglés redirigen.
      { source: "/privacy", destination: "/privacidad", permanent: true },
      { source: "/terms", destination: "/aviso-legal", permanent: true },
      // Newsletter de la plantilla (beehiiv) fuera de uso: la política de privacidad
      // no la contempla. Reversible: borrar estas dos reglas.
      { source: "/newsletter", destination: "/", permanent: false },
      { source: "/newsletter/:path*", destination: "/", permanent: false },
      // Páginas personales del fundador retiradas (2026-11-24): no debe aparecer en la web.
      { source: "/about", destination: "/equipo", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/images/team-victor.jpg", destination: "/", permanent: true },
      // Blog oculto temporalmente hasta tener artículos + diseño reales.
      // Reversible: borrar estas dos reglas para reactivarlo.
      { source: "/blog", destination: "/", permanent: false },
      { source: "/blog/:slug*", destination: "/", permanent: false },
    ];
  },
  async rewrites() {
    const propias = [
      // Marketplace de oportunidades (canal privado, noindex): proyecto Vercel
      // `realtyfy-marketplace`, servido aquí bajo /marketplace.
      {
        source: "/marketplace",
        destination: "https://realtyfy-marketplace.vercel.app/marketplace",
      },
      {
        source: "/marketplace/:path*",
        destination: "https://realtyfy-marketplace.vercel.app/marketplace/:path*",
      },
      // Investor decks (copia diaria de los de Lawang, proyecto de deck.realtyfy.com),
      // servidos aquí en /deck/<nombre>. El código del deck pide sus recursos con rutas
      // absolutas (/investor-deck, /modelo, /assets, /contracts), que se reenvían igual.
      // Las páginas llevan la barra final en el destino: el proyecto de decks la exige
      // y Next la quita, así que sin ella habría un bucle de 308.
      ...Object.entries(DECKS).map(([nombre, slug]) => ({
        source: `/deck/${nombre}`,
        destination: `${DECK_ORIGEN}/investor-deck/${slug}/`,
      })),
      ...[...new Set(Object.values(DECKS))].map((slug) => ({
        source: `/investor-deck/${slug}`,
        destination: `${DECK_ORIGEN}/investor-deck/${slug}/`,
      })),
      { source: "/modelo/:slug", destination: `${DECK_ORIGEN}/modelo/:slug/` },
      ...["investor-deck", "assets", "contracts"].map((dir) => ({
        source: `/${dir}/:path*`,
        destination: `${DECK_ORIGEN}/${dir}/:path*`,
      })),
      // Funnels: archivos del build, formularios y eventos de sus páginas.
      { source: "/fc-static/:path*", destination: `${FUNNELS_ORIGEN}/fc-static/:path*` },
      { source: "/api/funnels/:path*", destination: `${FUNNELS_VIA}/api/funnels/:path*` },
      { source: "/api/geo", destination: `${FUNNELS_VIA}/api/geo` },
    ];
    return {
      afterFiles: propias,
      // Funnels: cualquier /<prefijo> o /<prefijo>/<ruta> que no exista en esta web.
      fallback: [
        { source: "/:a", destination: `${FUNNELS_VIA}/:a` },
        { source: "/:a/:b", destination: `${FUNNELS_VIA}/:a/:b` },
      ],
    };
  },
  async headers() {
    return [
      {
        // Marketplace: privado, fuera de buscadores. Sin el CSP de la web
        // (es otro proyecto con sus propios recursos).
        source: "/marketplace/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        // Decks: privados, fuera de buscadores y sin el CSP de la web.
        source: `/:dir(${RUTAS_DECK})/:path*`,
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        // Keystatic admin — CSP relajado para que cargue su UI
        source: "/keystatic(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data: blob:;",
          },
        ],
      },
      {
        // Todo lo que pasa por este dominio, sea de la web o de otro proyecto.
        source: `/((?!keystatic|marketplace|${RUTAS_DECK}).*)`,
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // CSP y resto de cabeceras de la web: solo en sus páginas (la portada y sus
      // secciones). Un funnel carga píxeles, vídeo y fuentes que este CSP bloquearía.
      ...["/", `/:seccion(${SECCIONES_WEB})/:path*`].map((source) => ({
        source,
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://analytics.ahrefs.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.google.com https://va.vercel-scripts.com https://vitals.vercel-insights.com https://analytics.ahrefs.com; frame-src 'self' https://www.googletagmanager.com https://realtyfy.notion.site;",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      })),
    ];
  },
};

export default nextConfig;
