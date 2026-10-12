import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Aviso legal | Realtyfy',
  description: 'Titular del sitio, condiciones de uso y responsabilidad de www.realtyfy.com.',
  alternates: { canonical: '/aviso-legal' },
}

export default function Page() {
  return <LegalPage doc="aviso-legal" title="Aviso legal" />
}
