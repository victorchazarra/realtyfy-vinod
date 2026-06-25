'use client'

import { useState } from 'react'

export default function RegistroForm() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const data = new FormData(e.currentTarget)
    if ((data.get('company') as string)?.length) return // honeypot
    const name = (data.get('name') as string)?.trim()
    const email = (data.get('email') as string)?.trim()
    const phone = (data.get('phone') as string)?.trim()
    if (!name || !email || !phone) {
      setError('Completa nombre, email y teléfono.')
      return
    }
    setSending(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          profile: (data.get('profile') as string) ?? '',
          pageUrl: window.location.href,
        }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError('No hemos podido registrarte. Inténtalo de nuevo.')
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-6 rounded-[16px] bg-white p-10 text-center shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest">
          <svg width="24" height="24" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8 L7 12 L13 4" stroke="#F6F3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <p className="text-[13px] font-semibold uppercase tracking-[1.82px] text-copper">Acceso enviado</p>
        <h3 className="font-heading text-[28px] font-bold leading-[1.2] tracking-[-0.7px] text-navy">Listo. Te lo envío al email.</h3>
        <p className="max-w-[400px] text-base leading-[1.6] text-slate-600">
          Te he mandado el enlace al vídeo y un pequeño resumen de lo que vas a ver. Si en unos
          minutos no aparece, revisa promociones o spam.
        </p>
        <a href="#top" className="flex h-14 w-full items-center justify-center gap-2 rounded-[10px] bg-forest font-heading text-base font-semibold text-ivory hover:bg-forest-700">
          Ver el vídeo ahora <span>›</span>
        </a>
        <button onClick={() => setSent(false)} className="flex h-12 w-full items-center justify-center rounded-[10px] font-heading text-sm font-semibold text-slate-600 hover:bg-ivory">
          Volver a la web
        </button>
        <p className="max-w-[400px] text-xs leading-[1.6] text-slate-400">
          También te escribiré al WhatsApp por si tienes alguna pregunta.
        </p>
      </div>
    )
  }

  const label = 'text-[11px] font-semibold uppercase tracking-[1.54px] text-slate-600'
  const field = 'h-12 w-full rounded-[10px] border-[1.5px] border-line bg-ivory-2 px-4 text-[15px] text-navy placeholder:text-slate-400 focus:border-forest focus:outline-none'

  return (
    <div className="rounded-[16px] bg-white p-10 shadow-[0_22px_60px_rgba(15,23,42,0.25)]">
      <h3 className="font-heading text-[21px] font-semibold text-navy">Acceso al vídeo</h3>
      <p className="mt-1 text-sm leading-[1.55] text-slate-600">Déjanos cómo contactarte y verás el vídeo de inmediato.</p>
      <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-5">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div className="flex flex-col gap-2">
          <label className={label} htmlFor="name">Nombre</label>
          <input id="name" name="name" required placeholder="Tu nombre completo" className={field} autoComplete="name" />
        </div>
        <div className="flex flex-col gap-2">
          <label className={label} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="tu@email.com" className={field} autoComplete="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label className={label} htmlFor="phone">Teléfono (WhatsApp)</label>
          <input id="phone" name="phone" type="tel" required placeholder="+34 600 000 000" className={field} autoComplete="tel" />
        </div>
        <div className="flex flex-col gap-2">
          <label className={label} htmlFor="profile">Perfil</label>
          <select id="profile" name="profile" defaultValue="" className={`${field} appearance-none`}>
            <option value="" disabled>Selecciona tu perfil</option>
            <option>Empresario</option>
            <option>Inversor</option>
            <option>Directivo / profesional</option>
            <option>Otro</option>
          </select>
        </div>
        {error && <p className="text-sm text-copper-700">{error}</p>}
        <button type="submit" disabled={sending} className="flex h-14 items-center justify-center gap-2 rounded-[10px] bg-forest font-heading text-base font-semibold text-ivory hover:bg-forest-700 disabled:opacity-60">
          {sending ? 'Enviando…' : <>Ver el vídeo <span>›</span></>}
        </button>
        <div className="flex items-center justify-center gap-2">
          <span className="block h-[5px] w-[5px] rounded-full bg-forest" />
          <span className="text-[13px] text-slate-600">Acceso inmediato · Sin compromiso · 100% legal</span>
        </div>
      </form>
    </div>
  )
}
