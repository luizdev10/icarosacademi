import { useState } from 'react'
import { config } from '../../config'
import { textoDaFaixa } from '../../lib/horario'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const respostaDe = (f) =>
  f.usarHorarios ? config.horarios.map((h) => `${h.rotulo}, das ${textoDaFaixa(h)}`).join('. ') + '.' : f.resposta

export default function Faq() {
  const [aberto, setAberto] = useState(null)
  const faq = config.faq.map((f) => ({ pergunta: f.pergunta, resposta: respostaDe(f) })).filter((f) => f.resposta)
  if (!faq.length) return null

  return (
    <section id="duvidas" className="divisor-diag relative bg-creme px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>{config.textos.faq.titulo}</SectionTitle>
        <div className="mt-8 grid max-w-3xl gap-2">
          {faq.map((f, i) => {
            const ativo = aberto === i
            return (
              <Reveal key={f.pergunta} delay={i * 50} className="rounded-lg border border-tinta/10 bg-white">
                <h3 className="font-texto">
                  <button
                    type="button"
                    id={`faq-b-${i}`}
                    aria-expanded={ativo}
                    aria-controls={`faq-p-${i}`}
                    onClick={() => setAberto(ativo ? null : i)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold"
                  >
                    <span>{f.pergunta}</span>
                    <span aria-hidden="true" className={`faq-icone relative size-6 shrink-0 ${ativo ? 'is-ativo' : ''}`} />
                  </button>
                </h3>
                <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} className={`faq-painel ${ativo ? 'is-aberto' : ''}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-xl px-5 pb-5 text-base leading-relaxed text-tinta/75">{f.resposta}</p>
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
