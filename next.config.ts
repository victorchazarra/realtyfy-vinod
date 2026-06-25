import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Landing hero/founder placeholders — Víctor will swap for real assets.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      // Dominio canónico: www.realtyfy.es. Todos los hosts .com redirigen ahí
      // (la regla vieja www.realtyfy.com -> realtyfy.com hacía bucle con el
      // apex->www de Vercel). 307 temporal para no cachear durante el setup;
      // pasar a permanent:true cuando esté verificado.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.realtyfy.com" }],
        destination: "https://www.realtyfy.es/:path*",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "realtyfy.com" }],
        destination: "https://www.realtyfy.es/:path*",
        permanent: false,
      },
      // Blog oculto temporalmente hasta tener artículos + diseño reales.
      // Reversible: borrar estas dos reglas para reactivarlo.
      { source: "/blog", destination: "/", permanent: false },
      { source: "/blog/:slug*", destination: "/", permanent: false },
    ];
  },
  async headers() {
    return [
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
        source: "/((?!keystatic).*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://analytics.ahrefs.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.google.com https://va.vercel-scripts.com https://vitals.vercel-insights.com https://analytics.ahrefs.com; frame-src 'self' https://www.googletagmanager.com;",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
