const items = [
  'Por qué lo que conservas importa más que lo que ganas — y cómo cambia dónde colocas tu próximo movimiento.',
  'La estructura legal para tener patrimonio fuera sin irte de España — qué es y por qué es defendible.',
  'Cómo apalancar el patrimonio que ya tienes para abrir nuevas opciones sin descapitalizarte.',
  'Los 3 pilares que hacen esto sólido (y no una apuesta) — y los errores de quien entra solo.',
  'Por qué propiedad freehold, no las fórmulas que circulan por ahí.',
]

function Check() {
  return (
    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[14px] border border-forest">
      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden="true">
        <path d="M1 6 L5 10 L13 1" stroke="#2F4F46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function QueVasAVer() {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-12 px-6 py-24">
        <div className="flex flex-col gap-4">
          <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-copper">Lo que te llevas de esta sesión</p>
          <h2 className="max-w-[800px] font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.85px] text-ivory md:text-[34px]">
            Lo que te llevas de esta sesión:
          </h2>
        </div>

        <ul className="flex flex-col gap-6">
          {items.map((t) => (
            <li key={t} className="flex gap-5">
              <Check />
              <span className="text-[17px] leading-[1.6] text-ivory">{t}</span>
            </li>
          ))}
        </ul>

        <div>
          <a href="#registro" className="inline-block rounded-[10px] bg-forest px-8 py-4 font-heading text-base font-semibold text-ivory transition-colors hover:bg-forest-700">
            Ver el vídeo ›
          </a>
        </div>
      </div>
    </section>
  )
}
