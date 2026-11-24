"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isNewsletter = pathname.startsWith("/newsletter");
  const isGift = pathname.startsWith("/gift");
  const isLabs = pathname === "/labs";
  const isHome = pathname === "/";

  // Home renders the Spanish landing's own header (components/landing/Nav).
  if (isHome) return null;
  if (["/privacidad", "/aviso-legal", "/cookies", "/equipo"].includes(pathname)) return null;
  if (isNewsletter) return null;
  if (isGift) return null;
  if (isLabs) return null;

  return (
    <header className="bg-white">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Left-aligned logo */}
        <Link href="/" aria-label="Realtyfy home" className="text-xl font-extrabold tracking-tight text-gray-900">
          Realtyfy
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          <Link
            href="/equipo"
            className="text-sm font-semibold text-gray-500 hover:text-brand-600 transition-colors"
          >
            Equipo
          </Link>
        </div>
      </nav>
    </header>
  );
}
