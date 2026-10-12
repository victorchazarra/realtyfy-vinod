import type { Metadata } from 'next'
import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Política de cookies | Realtyfy',
  description: 'Qué cookies usa Realtyfy, para qué sirven y cómo decides sobre ellas.',
  alternates: { canonical: '/cookies' },
}

export default function Page() {
  return <LegalPage doc="cookies" title="Política de cookies" />
}
