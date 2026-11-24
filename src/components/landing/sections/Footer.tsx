import Link from 'next/link'
import Image from 'next/image'

const explora: { label: string; href?: string }[] = [
  { label: 'Método', href: '/#como-funciona' },
  { label: 'Equipo', href: '/equipo' },
  { label: 'Contacto', href: '/#registro' },
]
const legal: { label: string; href?: string }[] = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Privacidad', href: '/privacidad' },
  { label: 'Cookies', href: '/cookies' },
]
const social = ['IN', 'X', 'YT']

function FooterLink({ label, href }: { label: string; href?: string }) {
  const cls = 'text-[15px] text-slate-300 transition-colors hover:text-ivory'
  if (!href) return <span className="text-[15px] text-slate-300">{label}</span>
  if (href.startsWith('#')) return <a href={href} className={cls}>{label}</a>
  return <Link href={href} className={cls}>{label}</Link>
}

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-10 px-6 pb-10 pt-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="flex max-w-sm flex-col gap-4">
            <Image
              src="/realtyfy-logo-on-dark.png"
              alt="Realtyfy — Patrimonio sin fronteras"
              width={1068}
              height={445}
              className="h-16 w-auto"
            />
            <p className="font-heading text-[17px] font-medium italic leading-[1.5] text-slate-400">Más espacio. Menos dependencia.</p>
          </div>

          <div className="flex flex-col gap-3.5">
            <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-slate-400">Explora</p>
            {explora.map((l) => (
              <FooterLink key={l.label} {...l} />
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-slate-400">Legal</p>
            {legal.map((l) => (
              <FooterLink key={l.label} {...l} />
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-slate-400">Síguenos</p>
            <div className="flex gap-3">
              {social.map((s) => (
                <span key={s} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 text-[11px] font-medium text-slate-300">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-slate-600/30" />

        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <p className="max-w-[760px] text-xs italic leading-[1.65] text-slate-400">
            Realtyfy no presta asesoramiento fiscal, legal ni de inversión personalizado. La
            información tiene carácter divulgativo; cada caso requiere análisis profesional
            independiente. Rentabilidades pasadas o estimadas no garantizan resultados futuros.
          </p>
          <p className="shrink-0 text-xs text-slate-400">© 2026 Fan Convert LLC · Realtyfy es una marca de Fan Convert LLC</p>
        </div>
      </div>
    </footer>
  )
}
