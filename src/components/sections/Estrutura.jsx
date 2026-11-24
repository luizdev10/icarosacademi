import { config } from '../../config'
import { asset } from '../../lib/asset'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

// Primeiro item grande, os outros dois empilhados ao lado.
const formas = ['md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto', 'md:col-span-5 aspect-[16/9]', 'md:col-span-5 aspect-[16/9]']

export default function Estrutura() {
  const fotos = config.fotos
  const itens = fotos.length
    ? fotos.map((f) => ({ src: asset(f.arquivo), legenda: f.alt }))
    : config.legendasEstrutura.map((legenda) => ({ src: null, legenda }))
  if (!itens.length) return null

  return (
    <section id="estrutura" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle>Estrutura</SectionTitle>
        <div className="mt-12 grid gap-2 md:min-h-[34rem] md:grid-cols-12">
          {itens.slice(0, 3).map((it, i) => (
            <Reveal key={it.legenda} delay={i * 70} className={`relative overflow-hidden bg-fundo-2 ${formas[i]}`}>
              {it.src && <img src={it.src} alt={it.legenda} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />}
              <span className="absolute bottom-0 left-0 bg-fundo px-4 py-2.5 text-sm font-bold">{it.legenda}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
