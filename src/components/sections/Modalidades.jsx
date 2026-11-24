import { config, linkWhatsapp } from '../../config'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

export default function Modalidades() {
  if (!config.modalidades.length) return null
  return (
    <section id="modalidades" className="bg-fundo-2 px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle>Modalidades</SectionTitle>
        <div className="mt-12 grid gap-2">
          {config.modalidades.map((m, i) => (
            <Reveal key={m.id} delay={i * 70}>
              <a
                href={linkWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="linha grid gap-1 bg-fundo p-6 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-8 md:p-8"
              >
                <h3 className="font-display text-5xl font-bold uppercase leading-none md:text-7xl">{m.titulo}</h3>
                <p className="text-lg text-papel/75">{m.texto}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
