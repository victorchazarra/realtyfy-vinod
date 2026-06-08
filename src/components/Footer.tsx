"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isNewsletter = pathname.startsWith("/newsletter");
  const isGift = pathname.startsWith("/gift");

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
          <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
