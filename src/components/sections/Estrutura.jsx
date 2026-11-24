import { config } from '../../config'
import { asset } from '../../lib/asset'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

// Layout por quantidade de fotos, para o grid nunca deixar buracos.
const layouts = {
  1: ['md:col-span-12 aspect-[16/9]'],
  2: ['md:col-span-6 aspect-[4/3]', 'md:col-span-6 aspect-[4/3]'],
  3: ['md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto', 'md:col-span-5 aspect-[16/9]', 'md:col-span-5 aspect-[16/9]'],
}

export default function Estrutura() {
  const fotos = config.fotos.filter((f) => f.src).slice(0, 3)
  if (!fotos.length) return null
  const formas = layouts[fotos.length]

  return (
    <section id="estrutura" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle>Estrutura</SectionTitle>
        <div className={`mt-12 grid gap-2 md:grid-cols-12 ${fotos.length === 3 ? 'md:min-h-[34rem]' : ''}`}>
          {fotos.map((f, i) => (
            <Reveal key={f.src} delay={i * 70} className={`relative overflow-hidden bg-fundo-2 ${formas[i]}`}>
              <img src={asset(f.src)} alt={f.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              {f.legenda && <span className="absolute bottom-0 left-0 bg-fundo px-4 py-2.5 text-sm font-bold">{f.legenda}</span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
