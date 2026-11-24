import { useRef } from 'react'
import { config, linkWhatsappModalidade } from '../../config'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const t = config.textos.modalidades

function Seta({ direcao, rotulo, onClick }) {
  return (
    <button
      type="button"
      aria-label={rotulo}
      onClick={onClick}
      className="btn hidden size-11 items-center justify-center rounded-lg border border-white/25 text-white hover-capaz:hover:border-white/60 md:flex"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d={direcao < 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
      </svg>
    </button>
  )
}

function Card({ m }) {
  return (
    <article className="flex w-[17rem] shrink-0 snap-start flex-col rounded-lg border border-white/12 bg-grafite-2 p-5 transition-[transform,border-color] duration-200 hover-capaz:hover:-translate-y-1 hover-capaz:hover:border-ouro/60 sm:w-72">
      <h4 className="font-display text-xl font-semibold leading-snug">{m.nome}</h4>
      {m.descricao && <p className="mt-2 text-sm leading-relaxed text-white/70">{m.descricao}</p>}
      {m.horarios && <p className="mt-3 text-sm font-medium text-white">{m.horarios}</p>}
      {m.experimental && (
        <p className="mt-3 self-start rounded bg-ouro px-2 py-1 text-xs font-bold leading-snug text-grafite">{t.selo}</p>
      )}
      <a
        href={linkWhatsappModalidade(m.nome)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex min-h-11 items-center pt-4 text-sm font-semibold text-ouro hover:underline"
      >
        {t.acao}
      </a>
    </article>
  )
}

export default function Modalidades() {
  const trilho = useRef(null)
  if (!config.modalidades.length) return null
  const grupos = [...new Set(config.modalidades.map((m) => m.grupo))]
  const rolar = (sentido) => trilho.current?.scrollBy({ left: sentido * 304, behavior: 'smooth' })

  return (
    <section id="modalidades" className="divisor-diag relative bg-grafite px-5 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <SectionTitle escuro apoio={t.apoio}>{t.titulo}</SectionTitle>
          <div className="flex gap-2">
            <Seta direcao={-1} rotulo={t.anterior} onClick={() => rolar(-1)} />
            <Seta direcao={1} rotulo={t.proximo} onClick={() => rolar(1)} />
          </div>
        </div>

        <Reveal>
          <div
            ref={trilho}
            tabIndex={0}
            role="region"
            aria-label={t.titulo}
            className="sem-barra -mx-5 mt-8 flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-px-5 px-5 pb-2 md:mx-0 md:px-0"
          >
            {grupos.map((g) => (
              <div key={g} className="flex shrink-0 flex-col">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ouro">{g}</h3>
                <div className="flex flex-1 gap-3">
                  {config.modalidades
                    .filter((m) => m.grupo === g)
                    .map((m) => (
                      <Card key={m.id} m={m} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
