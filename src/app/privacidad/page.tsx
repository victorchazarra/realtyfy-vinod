import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Política de privacidad | Realtyfy',
  description: 'Qué datos trata Fan Convert LLC (Realtyfy), para qué, cuánto tiempo y cómo ejercer tus derechos.',
  alternates: { canonical: '/privacidad' },
}

export default function Page() {
  return <LegalPage doc="privacidad" title="Política de privacidad" />
}
