import { useState } from 'react'
import { config, formatarPreco, linkWhatsappPlano } from '../../config'
import { listaTexto } from '../../lib/rota'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

function Linha({ plano, estado, rotuloBotao, avisoValor }) {
  // estado: 'normal' (sem seleção), 'escolhido' ou 'esmaecido'
  return (
    <article
      className={`grid gap-4 bg-fundo-2 p-6 transition-[opacity,box-shadow] duration-200 md:grid-cols-[1fr_1.5fr_auto] md:items-center md:gap-8 md:p-8 ${
        estado === 'escolhido' ? 'shadow-[inset_0_0_0_3px_var(--color-acento)]' : ''
      } ${estado === 'esmaecido' ? 'opacity-45' : ''}`}
    >
      <div>
        <h3 className="font-display text-5xl font-bold uppercase leading-none md:text-6xl">{plano.nome}</h3>
        {plano.destaque && <p className="mt-2 text-sm font-bold text-acento">Mais completo</p>}
      </div>
      <p className="text-lg leading-relaxed text-papel/80">{plano.descricao}</p>
      <div className="flex flex-col gap-3 md:items-end">
        {config.mostrarPreco && (
          <p className="font-display text-5xl font-extrabold leading-none text-acento">{formatarPreco(plano.preco)}</p>
        )}
        {!config.mostrarPreco && avisoValor && <p className="font-bold">Consultar valores</p>}
        <Button
          href={linkWhatsappPlano(plano.nome)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto"
        >
          {rotuloBotao}
        </Button>
      </div>
    </article>
  )
}

export default function ListaPlanos({ rotuloBotao, avisoValor = false }) {
  const [escolha, setEscolha] = useState(null)
  const planoEscolhido = config.planos.find((p) => p.id === escolha)
  const alternar = (id) => setEscolha((atual) => (atual === id ? null : id))

  return (
    <>
      {config.escolhaPlano?.length > 0 && (
        <div className="mt-12" role="group" aria-labelledby="pergunta-plano">
          <p id="pergunta-plano" className="text-xl font-bold">{config.perguntaPlano}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {config.escolhaPlano.map((o) => {
              const ativo = escolha === o.plano
              return (
                <button
                  key={o.plano}
                  type="button"
                  aria-pressed={ativo}
                  onClick={() => alternar(o.plano)}
                  className={`btn min-h-11 px-4 py-2 text-left text-base font-medium ${
                    ativo ? 'bg-acento text-fundo' : 'bg-fundo-2 text-papel hover-capaz:hover:bg-[#222]'
                  }`}
                >
                  {o.texto}
                </button>
              )
            })}
          </div>
          <div aria-live="polite">
            {planoEscolhido && (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed">
                <strong className="text-acento">{planoEscolhido.nome}:</strong> {planoEscolhido.descricao}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-2">
        {config.planos.map((p, i) => (
          <Reveal key={p.id} delay={i * 60}>
            <Linha
              plano={p}
              estado={!escolha ? 'normal' : escolha === p.id ? 'escolhido' : 'esmaecido'}
              rotuloBotao={rotuloBotao}
              avisoValor={avisoValor}
            />
          </Reveal>
        ))}
      </div>
      {config.parcerias.length > 0 && (
        <p className="mt-8 text-lg text-papel/80">Aceitamos {listaTexto(config.parcerias)}.</p>
      )}
    </>
  )
}
