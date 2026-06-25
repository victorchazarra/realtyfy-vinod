import Link from 'next/link'
import Image from 'next/image'

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
        <Link href="#top" className="flex items-center">
          <Image
            src="/realtyfy-logo-on-light.png"
            alt="Realtyfy — Patrimonio sin fronteras"
            width={1068}
            height={445}
            priority
            className="h-12 w-auto"
          />
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
