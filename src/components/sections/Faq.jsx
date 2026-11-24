import { useState } from 'react'
import { config } from '../../config'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

export default function Faq() {
  const [aberto, setAberto] = useState(null)
  const faq = config.faq.filter((f) => f.resposta)
  if (!faq.length) return null

  return (
    <section id="faq" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle>Dúvidas</SectionTitle>
        <div className="mt-12 grid max-w-3xl gap-2">
          {faq.map((f, i) => {
            const ativo = aberto === i
            return (
              <Reveal key={f.pergunta} delay={i * 60} className="bg-fundo-2">
                <h3>
                  <button
                    type="button"
                    id={`faq-b-${i}`}
                    aria-expanded={ativo}
                    aria-controls={`faq-p-${i}`}
                    onClick={() => setAberto(ativo ? null : i)}
                    className="flex min-h-16 w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-bold"
                  >
                    <span>{f.pergunta}</span>
                    <span aria-hidden="true" className={`faq-icone relative size-6 shrink-0 ${ativo ? 'is-ativo' : ''}`} />
                  </button>
                </h3>
                <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} className={`faq-painel ${ativo ? 'is-aberto' : ''}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-xl px-6 pb-6 text-lg leading-relaxed text-papel/80">{f.resposta}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
