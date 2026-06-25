const faqs: { q: string; a?: string }[] = [
  {
    q: '¿Esto es legal?',
    a: 'Sí. Es estructura fiscal y propiedad freehold, dentro de la ley española e internacional. En el vídeo explico por qué es defendible. No hay nada que esconder.',
  },
  { q: '¿Tengo que irme de España?' },
  { q: '¿Tengo que viajar o gestionar algo allí?' },
  { q: '¿Cuánto capital hace falta?' },
  { q: '¿Me prometéis una rentabilidad?' },
  { q: '¿Y después del vídeo?' },
]

export default function Faq() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-12 px-6 py-24">
        <div className="flex flex-col gap-4">
          <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-slate-600">Objeciones</p>
          <h2 className="max-w-[880px] font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.85px] text-navy md:text-[34px]">
            Lo que probablemente te estás preguntando
          </h2>
        </div>

        <div className="max-w-[920px] border-y border-line">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group border-t border-line first:border-t-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7">
                <span className="font-heading text-[20px] font-semibold leading-[1.35] tracking-[-0.5px] text-navy">{f.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ivory font-heading text-[18px] font-medium text-forest">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">–</span>
                </span>
              </summary>
              {f.a && <p className="max-w-[820px] pb-7 text-[17px] leading-[1.6] text-slate-600">{f.a}</p>}
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
