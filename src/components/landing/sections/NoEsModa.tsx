const cards = [
  {
    title: 'Presión fiscal creciente',
    body: 'El peso fiscal sobre quien produce no para de subir — está en la prensa cada trimestre.',
  },
  {
    title: 'Diversificación internacional',
    body: 'Más patrimonio se diversifica fuera, buscando dónde es bien recibido.',
  },
  {
    title: 'Criterio, no improvisación',
    body: 'Realtyfy no inventa el movimiento: te da el criterio y la estructura para hacerlo bien.',
  },
]

export default function NoEsModa() {
  return (
    <section className="flex items-center bg-ivory">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-16 px-6 py-24">
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-slate-600">Contexto macro</p>
          <h2 className="max-w-[980px] font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.85px] text-navy md:text-[34px]">
            Cada vez más gente que produce está internacionalizando su patrimonio.
          </h2>
          <p className="max-w-[820px] text-[17px] leading-[1.6] text-slate-600">
            No es una tendencia pasajera. El centro de gravedad económico se mueve, y quienes piensan
            a largo plazo ya no concentran todo su patrimonio en un solo país. No por miedo: por
            criterio y por opciones.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="flex flex-col gap-5 rounded-[10px] border border-line bg-white p-10">
              <span className="block h-1 w-9 rounded bg-forest" />
              <h3 className="font-heading text-[21px] font-semibold text-navy">{c.title}</h3>
              <p className="text-[17px] leading-[1.6] text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
