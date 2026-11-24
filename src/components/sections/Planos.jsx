import { useRef, useState } from 'react'
import { config, formatarPreco, linkWhatsappPlano } from '../../config'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const t = config.textos.planos

function precoDo(plano) {
  const valor = formatarPreco(plano.preco)
  return plano.parcelas ? `${plano.parcelas}x de ${valor}` : valor
}

function Linha({ plano }) {
  return (
    <li
      className={`transition-colors duration-200 hover-capaz:hover:bg-creme grid gap-3 rounded-lg border bg-white p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-6 sm:rounded-none sm:border-0 sm:px-6 sm:py-4 ${
        plano.destaque ? 'border-ouro sm:bg-ouro/10' : 'border-tinta/10'
      }`}
    >
      <div>
        <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold leading-snug">
          {plano.nome}
          {plano.destaque && <span className="rounded bg-ouro px-2 py-0.5 text-xs font-bold text-grafite">{t.selo}</span>}
        </h3>
        {plano.observacao && <p className="mt-1 text-sm text-tinta/65">{plano.observacao}</p>}
      </div>
      <p className="font-display text-xl font-bold sm:text-right">{config.mostrarPreco ? precoDo(plano) : t.consultar}</p>
      <Button href={linkWhatsappPlano(plano.nome)} pequeno target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
        {config.mostrarPreco ? t.botao : t.botaoSemPreco}
      </Button>
    </li>
  )
}

export default function Planos() {
  const grupos = [...new Set(config.planos.map((p) => p.grupo))]
  const [ativo, setAtivo] = useState(grupos[0])
  const abas = useRef([])
  if (!grupos.length) return null

  // Setas do teclado entre as abas (padrão WAI-ARIA de tabs).
  const aoTeclar = (e, i) => {
    const passo = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    if (!passo) return
    e.preventDefault()
    const prox = (i + passo + grupos.length) % grupos.length
    setAtivo(grupos[prox])
    abas.current[prox]?.focus()
  }

  return (
    <section id="planos" className="divisor-diag relative bg-creme px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle apoio={t.apoio}>{t.titulo}</SectionTitle>

        <div className="-mx-5 mt-8 overflow-x-auto px-5 sem-barra">
          <div role="tablist" aria-label={t.titulo} className="flex w-max gap-2">
            {grupos.map((g, i) => {
              const selecionada = g === ativo
              return (
                <button
                  key={g}
                  ref={(el) => (abas.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`aba-${i}`}
                  aria-selected={selecionada}
                  aria-controls="painel-planos"
                  tabIndex={selecionada ? 0 : -1}
                  onClick={() => setAtivo(g)}
                  onKeyDown={(e) => aoTeclar(e, i)}
                  className={`btn min-h-11 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold ${
                    selecionada ? 'bg-grafite text-white' : 'border border-tinta/20 text-tinta hover-capaz:hover:border-tinta/50'
                  }`}
                >
                  {g}
                </button>
              )
            })}
          </div>
        </div>

        <Reveal key={ativo} className="mt-5">
          <ul
            id="painel-planos"
            role="tabpanel"
            aria-labelledby={`aba-${grupos.indexOf(ativo)}`}
            className="grid gap-3 sm:gap-0 sm:divide-y sm:divide-tinta/10 sm:overflow-hidden sm:rounded-lg sm:border sm:border-tinta/10 sm:bg-white"
          >
            {config.planos
              .filter((p) => p.grupo === ativo)
              .map((p) => (
                <Linha key={p.id} plano={p} />
              ))}
          </ul>
        </Reveal>

        {config.avisoPrecos && config.mostrarPreco && <p className="mt-4 text-sm text-tinta/65">{config.avisoPrecos}</p>}
      </div>
    </section>
  )
}
