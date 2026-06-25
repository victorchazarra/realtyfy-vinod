const fit = [
  'Eres empresario o inversor con capital disponible o apalancable.',
  'Tienes más capital que oportunidades cerca de casa.',
  'Quieres más opciones —dónde invertir, dónde vivir, cómo cobrar— sin renunciar a tu vida aquí.',
  'Valoras tener la propiedad (freehold) y el criterio por encima de la rentabilidad bruta a cualquier precio.',
  'Eres quien decide y piensas a largo plazo.',
]

const notFit = [
  'Buscas hacerte rico desde cero, sin patrimonio de partida.',
  'Solo persigues la rentabilidad máxima, sin importar la seguridad.',
  'Necesitas liquidez inmediata o tienes un horizonte muy corto.',
  'Buscas estatus y lujo visible, no opcionalidad.',
]

export default function EsParaTi() {
  return (
    <section id="para-quien" className="flex items-center bg-white">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-14 px-6 py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-slate-600">Calificación</p>
          <h2 className="max-w-[900px] font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.85px] text-navy md:text-[34px]">
            Esta sesión no es para todo el mundo. A propósito.
          </h2>
        </div>

        <div className="grid w-full gap-10 md:grid-cols-2">
          {/* Es para ti */}
          <div className="flex flex-col gap-6 rounded-[10px] bg-ivory p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[18px] bg-forest">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8 L7 12 L13 4" stroke="#F6F3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <h3 className="font-heading text-[21px] font-semibold text-navy">Es para ti si…</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {fit.map((t) => (
                <li key={t} className="flex gap-3 text-[17px] leading-[1.6] text-navy">
                  <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* No es para ti */}
          <div className="flex flex-col gap-6 rounded-[10px] border border-line bg-white p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[18px] border border-slate-400">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 2 L12 12 M12 2 L2 12" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </span>
              <h3 className="font-heading text-[21px] font-semibold text-slate-600">No es para ti si…</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {notFit.map((t) => (
                <li key={t} className="flex gap-3 text-[17px] leading-[1.6] text-slate-600">
                  <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
