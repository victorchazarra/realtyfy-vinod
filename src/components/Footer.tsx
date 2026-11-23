"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isNewsletter = pathname.startsWith("/newsletter");
  const isGift = pathname.startsWith("/gift");

  // Home renders the Spanish landing's own footer (components/landing/sections/Footer).
  if (pathname === "/") return null;
  if (["/privacidad", "/aviso-legal", "/cookies", "/equipo"].includes(pathname)) return null;
  if (isNewsletter || isGift) return null;

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" aria-label="Realtyfy home" className="text-base font-extrabold tracking-tight text-gray-900">
          Realtyfy
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-400">
          <a href="mailto:hello@fanconvert.com" className="hover:text-gray-600 transition-colors">hello@fanconvert.com</a>
          <a href="tel:+12029928288" className="hover:text-gray-600 transition-colors">+1 (202) 992-8288</a>
          <Link href="/aviso-legal" className="hover:text-gray-600 transition-colors">Aviso legal</Link>
          <Link href="/privacidad" className="hover:text-gray-600 transition-colors">Privacidad</Link>
          <Link href="/cookies" className="hover:text-gray-600 transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
