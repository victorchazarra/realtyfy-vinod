import RegistroForm from '@/components/landing/RegistroForm'

const stats = [
  { n: '8', label: 'AÑOS SOBRE EL TERRENO' },
  { n: '+50', label: 'PROYECTOS ENTREGADOS' },
  { n: '100%', label: 'PROPIEDAD REAL' },
]

export default function CtaFinal() {
  return (
    <section id="registro" className="relative overflow-hidden bg-navy-deep">
      <div className="mx-auto grid w-full max-w-[1180px] items-start gap-20 px-6 py-24 lg:grid-cols-[1fr_480px]">
        {/* Copy */}
        <div className="flex flex-col gap-6">
          <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-copper">Ver el vídeo</p>
          <h2 className="font-heading text-[34px] font-bold leading-[1.15] tracking-[-1.6px] text-ivory md:text-[40px]">
            Tu capital puede seguir esperando… o empezar a abrirte opciones.
          </h2>
          <p className="text-[17px] leading-[1.6] text-slate-400">
            Cada año que pasa, tu patrimonio depende un poco más de un solo país y de sus reglas. Hay
            quien ya juega con más espacio —legalmente, sin moverse de España— y deja que el tiempo
            componga a su favor. El vídeo te enseña cómo: los 3 pilares, los 5 pasos y los números.
            Con criterio. Sin humo.
          </p>
          <div className="flex items-center gap-4">
            <span className="block h-px w-8 bg-copper" />
            <span className="font-heading text-[19px] font-medium italic text-ivory">Más espacio. Menos dependencia.</span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-6">
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-[28px] font-bold tracking-[-0.7px] text-ivory">{s.n}</span>
                  <span className="text-[11px] font-semibold tracking-[1.54px] text-slate-400">{s.label}</span>
                </div>
                {i < stats.length - 1 && <span className="h-12 w-px bg-slate-600/50" />}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <RegistroForm />
      </div>
    </section>
  )
}
