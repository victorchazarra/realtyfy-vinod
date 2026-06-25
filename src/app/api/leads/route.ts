import { NextRequest, NextResponse } from 'next/server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const WEBHOOK_URL = process.env.REALTYFY_LEADS_WEBHOOK_URL

// Captación del opt-in al vídeo. Si hay webhook (n8n) configurado, reenvía el lead;
// si no, acepta igualmente para no bloquear la UX. Cablear GHL/CAPI cuando haya cuentas.
export async function POST(req: NextRequest) {
  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_json' }, { status: 400 })
  }

  if (body.company) return NextResponse.json({ ok: true, spam: true }) // honeypot

  const name = body.name?.trim()
  const email = body.email?.trim()
  const phone = body.phone?.trim()
  if (!name || !email || !phone || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 })
  }

  if (WEBHOOK_URL) {
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...body, brand: 'realtyfy', source: 'web-realtyfy', timestamp: new Date().toISOString() }),
        signal: AbortSignal.timeout(5000),
      })
    } catch (err) {
      console.error('[leads] webhook error', err)
    }
  }

  return NextResponse.json({ ok: true })
}
