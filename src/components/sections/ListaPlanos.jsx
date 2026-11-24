import { useState } from 'react'
import { config, formatarPreco, linkWhatsappPlano } from '../../config'
import { listaTexto } from '../../lib/rota'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

function Linha({ plano, escolhido, rotuloBotao, avisoValor }) {
  return (
    <article
      className={`grid gap-4 p-6 transition-colors duration-200 md:grid-cols-[1fr_1.5fr_auto] md:items-center md:gap-8 md:p-8 ${
        escolhido ? 'bg-acento text-fundo' : 'bg-fundo-2'
      }`}
    >
      <div>
        <h3 className="font-display text-5xl font-bold uppercase leading-none md:text-6xl">{plano.nome}</h3>
        {plano.destaque && (
          <p className={`mt-2 text-sm font-bold ${escolhido ? 'text-fundo' : 'text-acento'}`}>Mais completo</p>
        )}
      </div>
      <p className={`text-lg leading-relaxed ${escolhido ? 'text-fundo' : 'text-papel/80'}`}>{plano.descricao}</p>
      <div className="flex flex-col gap-3 md:items-end">
        {config.mostrarPreco && (
          <p className="font-display text-5xl font-extrabold leading-none">{formatarPreco(plano.preco)}</p>
        )}
        {!config.mostrarPreco && avisoValor && <p className="font-bold">Consultar valores</p>}
        <Button
          href={linkWhatsappPlano(plano.nome)}
          target="_blank"
          rel="noopener noreferrer"
          variante={escolhido ? 'escuro' : 'acento'}
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

  return (
    <>
      {config.escolhaPlano?.length > 0 && (
        <fieldset className="mt-12" data-ui>
          <legend className="text-xl font-bold">{config.perguntaPlano}</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            {config.escolhaPlano.map((o) => (
              <label key={o.plano} className="opcao">
                <input
                  type="radio"
                  name="escolha-plano"
                  className="sr-only"
                  checked={escolha === o.plano}
                  onChange={() => setEscolha(o.plano)}
                />
                <span className="flex min-h-11 items-center px-4 py-2 text-base font-medium">{o.texto}</span>
              </label>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            {planoEscolhido ? `Plano indicado: ${planoEscolhido.nome}` : ''}
          </p>
        </fieldset>
      )}

      <div className="mt-8 grid gap-2">
        {config.planos.map((p, i) => (
          <Reveal key={p.id} delay={i * 60}><Linha plano={p} escolhido={escolha === p.id} rotuloBotao={rotuloBotao} avisoValor={avisoValor} /></Reveal>
        ))}
      </div>
      {config.parcerias.length > 0 && (
        <p className="mt-8 text-lg text-papel/80">Aceitamos {listaTexto(config.parcerias)}.</p>
      )}
    </>
  )
}
