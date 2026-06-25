const pilares = [
  'Optimización fiscal — la eficiencia que enciende el efecto compuesto (0% de impuestos al reinvertir).',
  'Partners de confianza — operadores con histórico probado sobre el terreno.',
  'Propiedad (freehold) — posees el activo, no un arrendamiento.',
]

const pasos = [
  'Apalanca tu patrimonio en España.',
  'Invierte en propiedad freehold fuera.',
  'Renta llave en mano, sin pisar el país.',
  'Reinvierte sin tributar.',
  'Repite — y deja que el tiempo componga.',
]

// posiciones (%) de los 5 pasos alrededor del círculo
const stepPos = [
  { top: '2%', left: '50%' },
  { top: '34%', left: '92%' },
  { top: '88%', left: '74%' },
  { top: '88%', left: '26%' },
  { top: '34%', left: '8%' },
]
const stepLabels = ['APALANCA', 'INVIERTE', 'RENTA', 'REINVIERTE', 'REPITE']

function NumDot({ n, size = 'h-6 w-6 text-[13px]' }: { n: number; size?: string }) {
  return (
    <span className={`flex ${size} shrink-0 items-center justify-center rounded-full border border-forest font-heading font-semibold text-forest`}>
      {n}
    </span>
  )
}

export default function Sistema() {
  return (
    <section id="como-funciona" className="overflow-hidden bg-ivory">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-16 px-6 py-24">
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-copper">El método Patrimonio Soberano</p>
          <h2 className="max-w-[900px] font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.85px] text-navy md:text-[34px]">
            Un sistema, dos piezas: por qué es sólido y por qué crece.
          </h2>
          <p className="max-w-[700px] text-[17px] leading-[1.6] text-slate-600">
            Tres pilares que lo sostienen. Cinco pasos que lo hacen crecer.
          </p>
        </div>

        <div className="grid w-full gap-20 md:grid-cols-2">
          {/* 3 pilares */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-2.5 text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-forest">Por qué es sólido</p>
              <h3 className="font-heading text-[21px] font-semibold text-navy">Los 3 pilares</h3>
            </div>
            <div className="relative mx-auto h-[260px] w-[360px]">
              <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
                <path d="M200 18 L382 298 L18 298 Z" stroke="#2F4F46" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              {[
                { n: '1', label: 'FISCAL', top: '-2%', left: '50%' },
                { n: '2', label: 'PARTNERS', top: '92%', left: '6%' },
                { n: '3', label: 'FREEHOLD', top: '92%', left: '94%' },
              ].map((v) => (
                <div key={v.n} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1" style={{ top: v.top, left: v.left }}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-forest bg-ivory font-heading text-[18px] font-semibold text-forest">{v.n}</span>
                  <span className="text-[13px] font-medium tracking-[0.78px] text-navy">{v.label}</span>
                </div>
              ))}
            </div>
            <ul className="flex flex-col gap-4">
              {pilares.map((t, i) => (
                <li key={t} className="flex gap-3">
                  <NumDot n={i + 1} />
                  <span className="text-[15px] leading-[1.55] text-slate-600">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5 pasos */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-2.5 text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-forest">Por qué crece</p>
              <h3 className="font-heading text-[21px] font-semibold text-navy">Los 5 pasos</h3>
            </div>
            <div className="relative mx-auto h-[300px] w-[300px]">
              <span className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-forest" />
              {stepPos.map((p, i) => (
                <div key={i} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1" style={{ top: p.top, left: p.left }}>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-forest bg-ivory font-heading text-[18px] font-semibold text-forest">{i + 1}</span>
                  <span className="text-[12px] font-medium tracking-[0.72px] text-navy">{stepLabels[i]}</span>
                </div>
              ))}
            </div>
            <ul className="flex flex-col gap-4">
              {pasos.map((t, i) => (
                <li key={t} className="flex gap-3">
                  <NumDot n={i + 1} />
                  <span className="text-[15px] leading-[1.55] text-slate-600">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex w-full max-w-[900px] flex-col items-center gap-2 rounded-[10px] border border-line bg-white p-8 text-center">
          <p className="font-heading text-[24px] font-medium italic leading-[1.4] text-navy md:text-[26px]">
            Conserva lo que genera y deja que el tiempo componga.
          </p>
          <p className="text-base leading-[1.5] text-slate-600">El foco no es la cifra: es el espacio que abre.</p>
        </div>
      </div>
    </section>
  )
}
