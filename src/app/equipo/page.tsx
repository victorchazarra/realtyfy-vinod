import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/landing/sections/Footer'

const SITE_URL = 'https://realtyfy.com'
const TITLE = 'Equipo | Realtyfy'
const DESCRIPTION =
  'Quién hay detrás de Realtyfy, los valores que nos mueven y cómo unirte al equipo o contactar con nosotros.'

// Formulario de candidaturas (Notion). La ruta /ebd/ es la que Notion deja incrustar;
// la URL pública normal envía X-Frame-Options: SAMEORIGIN.
const FORM_URL = 'https://realtyfy.notion.site/ebd/3fe468b2c90980e79bebc284aa058d7b'
const EMAIL = 'info@realtyfy.com'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/equipo' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: `${SITE_URL}/equipo`,
    siteName: 'Realtyfy',
    title: TITLE,
    description: DESCRIPTION,
  },
}

const valores = [
  {
    img: '01-vinculo',
    nombre: 'Vínculo',
    texto:
      'Cuidamos las relaciones para que cada persona sienta que forma parte de Realtyfy, como en casa.',
  },
  {
    img: '02-vision-largo-plazo',
    nombre: 'Visión a largo plazo',
    texto:
      'Tomamos decisiones pensando en lo que queremos construir en el futuro, no solo en el resultado de hoy, construyendo relaciones duraderas.',
  },
  {
    img: '03-innovacion',
    nombre: 'Innovación',
    texto:
      'Somos pioneros en tecnología y en sistemas. Buscamos siempre mejorar para el cliente, para el equipo y para nuestra forma de trabajar. Proponemos sin esperar a que nos lo pidan.',
  },
  {
    img: '04-honestidad',
    nombre: 'Honestidad',
    texto: 'Decimos siempre la verdad y actuamos con transparencia.',
  },
  {
    img: '05-impacto-positivo',
    nombre: 'Impacto positivo',
    texto:
      'Queremos que cada cliente, cada compañero y cada proyecto estén mejor gracias a nosotros.',
  },
]

const kicker = 'text-[13px] font-semibold uppercase tracking-[1.82px] text-copper'

export default function EquipoPage() {
  return (
    <div className="bg-ivory font-body text-navy">
      <header className="border-b border-line bg-ivory">
        <nav className="mx-auto flex h-[72px] w-full max-w-[1180px] items-center justify-between px-6">
          <Link href="/" className="flex items-center">
            <Image src="/realtyfy-logo-on-light.png" alt="Realtyfy" width={1068} height={445} priority className="h-12 w-auto" />
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-600 transition-colors hover:text-forest">‹ Volver a la web</Link>
        </nav>
      </header>

      {/* 1. Quién hay detrás de Realtyfy.
          Apertura de marca: titular + párrafo. Las fichas del equipo (foto, nombre y cargo)
          se añadirán más adelante en este mismo bloque, debajo del párrafo. */}
      <section className="bg-navy">
        <div className="mx-auto flex w-full max-w-[980px] flex-col items-center gap-8 px-6 py-24 text-center md:py-32">
          <p className={kicker}>Equipo</p>
          <h1 className="font-heading text-[38px] font-extrabold leading-[1.08] tracking-[-1.6px] text-ivory md:text-[60px] md:tracking-[-2.4px]">
            Quién hay detrás de Realtyfy
          </h1>
          <span className="block h-px w-16 bg-copper" />
          <p className="font-heading text-[21px] font-medium leading-[1.5] text-slate-300 md:text-[26px]">
            El equipo lo formamos personas que si bien estamos repartidas por el mundo (España,
            Indonesia, Suiza...), nos sentimos cerca y unidos por una misma meta: ayudar a las
            personas a conseguir libertad a través de la inversión en patrimonio internacional.
          </p>
        </div>
      </section>

      {/* 2. Lo que nos mueve. El fondo es el de las imágenes de valores (#020f20). */}
      <section className="bg-[#020f20]">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-14 px-6 py-24">
          <div className="mx-auto flex max-w-[760px] flex-col gap-5 text-center">
            <h2 className="font-heading text-[30px] font-bold leading-[1.15] tracking-[-0.85px] text-ivory md:text-[40px]">
              Lo que nos mueve
            </h2>
            <p className="text-[18px] leading-[1.6] text-slate-300">
              Nuestra brújula apunta a ayudar a las personas a conseguir su libertad e
              independencia. Y por el camino estamos creando una comunidad de inversores mundial
              con propuestas personalizadas.
            </p>
            <p className="text-[18px] leading-[1.6] text-slate-300">Nuestros valores se resumen en:</p>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-12">
            {valores.map((v) => (
              <li key={v.img} className="flex w-full flex-col items-center gap-3 text-center sm:w-[320px]">
                <Image
                  src={`/images/valores/${v.img}.jpg`}
                  alt=""
                  width={200}
                  height={200}
                  className="h-[160px] w-[160px]"
                />
                <h3 className="font-heading text-[22px] font-bold leading-tight text-ivory">{v.nombre}</h3>
                <p className="text-[16px] leading-[1.6] text-slate-400">{v.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. ¿Quieres unirte al equipo? */}
      <section id="unirte" className="bg-ivory">
        <div className="mx-auto flex w-full max-w-[820px] flex-col gap-8 px-6 py-24">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="font-heading text-[30px] font-bold leading-[1.15] tracking-[-0.85px] text-navy md:text-[40px]">
              ¿Quieres unirte al equipo?
            </h2>
            <p className="text-[18px] leading-[1.6] text-slate-600">
              Si te motiva ayudar a las personas a conseguir su libertad y quieres formar parte del
              equipo, cuéntanos tu historia.
            </p>
          </div>
          <iframe
            src={FORM_URL}
            title="Formulario para unirte al equipo de Realtyfy"
            loading="lazy"
            className="h-[900px] w-full rounded-[10px] border border-line bg-white"
          />
        </div>
      </section>

      {/* 4. Contacta con nosotros */}
      <section id="contacto" className="border-t border-line bg-ivory-2">
        <div className="mx-auto flex w-full max-w-[820px] flex-col items-center gap-6 px-6 py-20 text-center">
          <h2 className="font-heading text-[30px] font-bold leading-[1.15] tracking-[-0.85px] text-navy md:text-[40px]">
            Contacta con nosotros
          </h2>
          <p className="text-[18px] leading-[1.6] text-slate-600">
            ¿Tienes alguna pregunta o propuesta? Escríbenos a{' '}
            <a href={`mailto:${EMAIL}`} className="font-medium text-forest underline underline-offset-2">{EMAIL}</a>{' '}
            y te responderemos lo antes posible.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-[10px] bg-forest px-8 py-[18px] font-heading text-[17px] font-semibold text-ivory transition-colors hover:bg-forest-700"
          >
            Escríbenos ›
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
