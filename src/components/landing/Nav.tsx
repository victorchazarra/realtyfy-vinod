import Link from 'next/link'

const links = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Para quién', href: '#para-quien' },
  { label: 'Caso real', href: '#caso-real' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '/blog' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1180px] items-center justify-between px-6">
        <Link href="#top" className="flex items-center gap-2.5">
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" aria-hidden="true">
            <path d="M1 15 C7 15 9 1 14 1 M10 15 C16 15 18 5 23 5" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-[22px] font-bold tracking-[-0.3px] text-navy">Realtyfy</span>
            <span className="mt-0.5 text-[10px] font-semibold tracking-[1.4px] text-slate-600">PATRIMONIO SIN FRONTERAS</span>
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-forest">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#registro" className="rounded-[10px] bg-forest px-7 py-3.5 font-heading text-base font-semibold text-ivory transition-colors hover:bg-forest-700">
          Ver el vídeo ›
        </a>
      </nav>
    </header>
  )
}
