import { readFile } from 'node:fs/promises'
import path from 'node:path'
import Link from 'next/link'
import Image from 'next/image'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import Footer from '@/components/landing/sections/Footer'

export type LegalDoc = 'privacidad' | 'aviso-legal' | 'cookies'

// Los textos viven en src/content/legal/*.md y se generan desde el texto maestro
// de Fan Convert LLC (Brain: backlog/cumplimiento-rgpd-leads/paginas-legales/).
async function renderMarkdown(doc: LegalDoc) {
  const md = await readFile(path.join(process.cwd(), 'src/content/legal', `${doc}.md`), 'utf8')
  const html = String(await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(md))
  // Encabezados con ancla: "### Título {#id}" → <h3 id="id">Título</h3>
  return html.replace(/<(h[2-4])>(.*?)\s*\{#([a-z0-9-]+)\}<\/\1>/g, '<$1 id="$3">$2</$1>')
}

export default async function LegalPage({ doc, title }: { doc: LegalDoc; title: string }) {
  const html = await renderMarkdown(doc)
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
      <article className="mx-auto w-full max-w-[820px] px-6 pb-20 pt-14">
        <h1 className="font-heading text-[34px] font-semibold leading-tight text-navy md:text-[42px]">{title}</h1>
        <div
          className="legal-prose mt-6"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <Footer />
    </div>
  )
}
