import Image from 'next/image'

const bullets = [
  '8 años sobre el terreno en Indonesia.',
  'Estructura internacional + propiedad freehold, para patrimonios a largo plazo.',
  'Acompañamiento de principio a fin: due diligence, legalidad, estructura y gestión.',
]

const stats = [
  { n: '8', label: 'AÑOS SOBRE EL TERRENO' },
  { n: '+50', label: 'PROYECTOS ENTREGADOS' },
  { n: '100%', label: 'PROPIEDAD REAL (FREEHOLD)' },
]

export default function QuienDetras() {
  return (
    <section id="caso-real" className="bg-navy">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-14 px-6 py-24">
        <div className="grid gap-20 md:grid-cols-[480px_1fr] md:items-center">
          {/* Photo */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[480/540] overflow-hidden rounded-[10px]">
              <Image
                src="https://images.unsplash.com/photo-1740672553856-3b2645b7009a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Víctor, fundador de Realtyfy"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
              />
            </div>
            <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-copper">Víctor · Founder</p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.85px] text-ivory md:text-[34px]">
                Quién te lo cuenta
              </h2>
              <p className="text-[17px] leading-[1.6] text-slate-400">
                Soy Víctor. Llevo 8 años invirtiendo sobre el terreno en Indonesia, no desde un
                despacho mirando un Excel. He visto cómo se hace bien y, sobre todo, cómo se pierde
                dinero cuando se entra solo, sin estructura y sin la gente correcta.
              </p>
              <p className="text-[17px] leading-[1.6] text-slate-400">
                Creé Realtyfy para una idea simple: tu patrimonio debería tener la misma libertad que
                tú. En este vídeo te enseño exactamente cómo, con criterio y sin humo.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {bullets.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[17px] leading-[1.6] text-ivory">
                  <span className="mt-3 block h-px w-4 shrink-0 bg-slate-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Credibility stats */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-600/40 pt-12 sm:flex-row">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8">
              <div className="flex flex-col gap-3">
                <span className="font-heading text-[36px] font-extrabold leading-none tracking-[-0.9px] text-ivory">{s.n}</span>
                <span className="text-[13px] font-medium tracking-[1.82px] text-slate-400">{s.label}</span>
              </div>
              {i < stats.length - 1 && <span className="hidden h-12 w-px bg-slate-600 sm:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
