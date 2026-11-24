import Image from 'next/image'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-[60px] px-6 py-24 lg:grid-cols-[560px_560px] lg:py-28">
        {/* Text column */}
        <div className="flex flex-col gap-6">
          <p className="font-body text-[13px] font-semibold uppercase tracking-[1.82px] text-copper">
            Patrimonio internacional · para quien tiene más capital que mapa
          </p>
          <h1 className="font-heading text-[40px] font-extrabold leading-[1.1] tracking-[-2.16px] text-ivory md:text-[54px]">
            No tienes que elegir entre tu país y tu patrimonio.
          </h1>
          <p className="text-[19px] leading-[1.55] text-slate-400">
            Hay una forma serena y 100% legal de desplegar tu capital fuera de España, conservar lo
            que genera —reinvirtiendo el beneficio con un 0% de impuestos— y seguir viviendo donde
            quieres. Sin mudarte. Te lo explicamos, con criterio y los números delante, en este vídeo.
          </p>
          <div className="mt-4 flex flex-col items-start gap-3">
            <a href="#registro" className="rounded-[10px] bg-forest px-8 py-[18px] font-heading text-[17px] font-semibold text-ivory transition-colors hover:bg-forest-700">
              Ver el vídeo ›
            </a>
            <p className="text-sm text-slate-400">Acceso inmediato · 100% legal · Sin compromiso</p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 pt-3 text-[13px] font-medium text-slate-400">
            <span>8 años sobre el terreno</span><span>·</span>
            <span>+50 proyectos entregados</span><span>·</span>
            <span>100% propiedad real (freehold)</span>
          </div>
        </div>

        {/* Video column */}
        <div className="flex flex-col gap-4">
          <a href="#registro" className="group relative block aspect-[560/380] overflow-hidden rounded-[10px] bg-slate-300 shadow-[0_14px_40px_rgba(0,0,0,0.15)]">
            <Image
              src="https://images.unsplash.com/photo-1521750465-672a0f580901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Vídeo de presentación de Realtyfy"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
              priority
            />
            <span className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-[40px] bg-forest shadow-[0_8px_24px_rgba(15,23,42,0.2)] transition-transform group-hover:scale-105">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="#F6F3EE" aria-hidden="true"><path d="M0 0 L22 12 L0 24 Z" /></svg>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <span className="block h-px w-3.5 bg-slate-400" />
            <span className="text-[13px] font-medium tracking-[0.6px] text-slate-400">VÍDEO · 18 MIN</span>
          </div>
        </div>
      </div>
    </section>
  )
}
