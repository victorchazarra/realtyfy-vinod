export default function Giro() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-9 px-6 py-24 text-center">
        <h2 className="font-heading text-[28px] font-bold leading-[1.15] tracking-[-0.85px] text-navy md:text-[34px]">
          No es lo que ganas.
          <br />
          Es lo que <em className="text-forest">conservas</em> — y el espacio que abre.
        </h2>

        <div className="flex max-w-[820px] flex-col gap-[22px]">
          <p className="text-[17px] leading-[1.6] text-slate-600">
            Un 10% que conservas íntegro vale más que un 12% del que se queda la mitad por el camino.
            Mientras un gestor optimiza dentro de la caja, hay quien lleva años jugando fuera de ella
            —de forma legal— colocando su capital donde es bien recibido y reinvirtiendo el beneficio
            sin tributar (0% de impuestos).
          </p>
          <p className="text-[17px] leading-[1.6] text-slate-600">
            No hablamos de irte del país. Ni de criptos, ni de promesas. Hablamos de estructura.
          </p>
        </div>

        <p className="font-heading text-[28px] font-medium italic leading-[1.3] text-navy md:text-[32px]">
          Más espacio. Menos dependencia.
        </p>

        {/* Comparativa */}
        <div className="mt-2 grid w-full max-w-[980px] overflow-hidden rounded-[10px] border border-line text-left md:grid-cols-2">
          <div className="flex flex-col gap-7 border-b border-line p-9 md:border-b-0 md:border-r">
            <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-slate-600">Patrimonio local</p>
            <div className="flex flex-col gap-[18px] text-[17px] leading-[1.6] text-slate-600">
              <p>Lo que renta pierde &gt;50% por el camino</p>
              <p>Capital parado, sin dónde crecer</p>
              <p>Depende de un solo país</p>
            </div>
          </div>
          <div className="flex flex-col gap-7 p-9">
            <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-forest">Patrimonio con horizonte</p>
            <div className="flex flex-col gap-[18px] text-[17px] leading-[1.6] text-navy">
              <p>Reinviertes el beneficio sin tributar (<span className="font-semibold text-copper">0%</span> de impuestos)</p>
              <p>Propiedad freehold, llave en mano, en remoto</p>
              <p>Opciones: dónde invertir, dónde vivir, cómo cobrar</p>
            </div>
          </div>
        </div>

        <p className="max-w-[700px] text-[13px] italic leading-[1.55] text-slate-400">
          Nota: la gestión y las tasas del alquiler tienen su coste; se explican con transparencia en
          el vídeo. Aquí no hay humo.
        </p>
      </div>
    </section>
  )
}
