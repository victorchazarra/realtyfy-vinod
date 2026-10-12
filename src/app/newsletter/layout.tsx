import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Realtyfy Newsletter | Indonesian Real Estate Investing",
  description:
    "Indonesian property investing insights from an investor on the ground in Bali. Market analysis, ownership rules, and real numbers — straight to your inbox.",
  openGraph: {
    title: "The Realtyfy Newsletter | Indonesian Real Estate Investing",
    description:
      "Indonesian property investing insights from an investor on the ground in Bali. Market analysis, ownership rules, and real numbers — straight to your inbox.",
    url: "https://realtyfy.com/newsletter",
    images: [{ url: "https://realtyfy.com/og-default.png", width: 1230, height: 630, alt: "The Realtyfy Newsletter" }],
  },
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <footer className="bg-[#3a3a3a] border-t border-white/30">
        <div className="py-1.5 flex items-center justify-center gap-3 text-[11px] text-gray-400">
          <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
          <span>·</span>
          <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso legal</Link>
        </div>
      </footer>
    </>
  );
}
