"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isBlogPost = pathname.startsWith("/blog/");
  const isNewsletter = pathname.startsWith("/newsletter");
  const isGift = pathname.startsWith("/gift");
  const isLabs = pathname === "/labs";

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
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-brand-600 transition-colors"
          >
            {isBlogPost && <span>&larr;</span>}
            {isBlogPost ? "Back to Blog" : "Blog"}
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold text-gray-500 hover:text-brand-600 transition-colors"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
