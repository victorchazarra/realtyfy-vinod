const cards = [
  {
    title: 'Capital con poco espacio.',
    body: 'Más dinero que oportunidades rentables a tu alrededor. Capital que espera, en lugar de trabajar donde mejor rinde.',
  },
  {
    title: 'Lo que generas, a medias.',
    body: 'Entre impuestos y regulación, conservas menos de lo que produces. No por falta de esfuerzo, sino por dónde está colocado.',
  },
  {
    title: 'Todo en un solo lugar.',
    body: 'Tu patrimonio depende de las reglas de un único país. Y diversificar fuera parece que obliga a irte. (No es así.)',
  },
]

export default function Problema() {
  return (
    <section className="border-t border-line bg-ivory">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-14 px-6 py-24">
        <div className="flex flex-col gap-6">
          <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-slate-600">Quizá ya lo has notado:</p>
          <h2 className="max-w-[880px] font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.85px] text-navy md:text-[34px]">
            Tienes más capital que oportunidades. Y casi todo depende de un solo país.
          </h2>
          <div className="flex max-w-[760px] flex-col gap-5">
            <p className="text-[17px] leading-[1.6] text-slate-600">
              No es una queja, es una observación. El capital parado pierde espacio cada año. Las
              oportunidades que de verdad mueven la aguja escasean cerca de casa. Y una parte grande
              de lo que generas se queda por el camino, en un sistema que cada vez te deja menos
              margen para decidir.
            </p>
            <p className="text-[17px] font-medium leading-[1.6] text-navy">
              El problema de fondo no es cuánto ganas. Es cuántas opciones tienes.
            </p>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="flex flex-col gap-5 rounded-[10px] border border-line bg-white p-9">
              <span className="block h-1 w-9 rounded bg-forest" />
              <h3 className="font-heading text-[21px] font-semibold leading-[1.3] text-navy">{c.title}</h3>
              <p className="text-[17px] leading-[1.6] text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="flex">
          <span className="w-[3px] shrink-0 bg-forest" />
          <p className="px-8 py-6 text-[19px] font-medium leading-[1.5] text-navy">
            La buena noticia: la salida no es marcharte. Es darle más espacio a tu patrimonio sin
            moverte tú.
          </p>
        </div>
      </div>
    </section>
  )
}
