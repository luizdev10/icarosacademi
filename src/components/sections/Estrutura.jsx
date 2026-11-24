import { config } from '../../config'
import { asset } from '../../lib/asset'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

// Formas por quantidade de fotos, para o grid nunca deixar buracos.
const layouts = {
  1: ['md:col-span-12 aspect-[16/9]'],
  2: ['md:col-span-6 aspect-[4/3]', 'md:col-span-6 aspect-[4/3]'],
  3: ['md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto', 'md:col-span-5 aspect-[16/9]', 'md:col-span-5 aspect-[16/9]'],
  4: ['md:col-span-6 aspect-[4/3]', 'md:col-span-6 aspect-[4/3]', 'md:col-span-6 aspect-[4/3]', 'md:col-span-6 aspect-[4/3]'],
}

export default function Estrutura() {
  const fotos = config.fotos.filter((f) => f.src).slice(0, 4)
  if (!fotos.length) return null
  const formas = layouts[fotos.length]

  return (
    <section id="estrutura" className="divisor-diag relative bg-creme px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>{config.textos.estrutura.titulo}</SectionTitle>
        <div className={`mt-8 grid gap-3 md:grid-cols-12 ${fotos.length === 3 ? 'md:min-h-[32rem]' : ''}`}>
          {fotos.map((f, i) => (
            <Reveal key={f.src} delay={i * 70} className={`relative overflow-hidden rounded-lg bg-creme-2 ${formas[i]}`}>
              <img src={asset(f.src)} alt={f.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              {f.legenda && (
                <span className="absolute bottom-0 left-0 rounded-tr-lg bg-grafite px-4 py-2 text-sm font-semibold text-white">{f.legenda}</span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
