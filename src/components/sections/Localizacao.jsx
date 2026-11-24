import { config } from '../../config'
import { textoDaFaixa } from '../../lib/horario'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

export default function Localizacao() {
  const t = config.textos.localizacao
  return (
    <section id="localizacao" className="divisor-diag relative bg-grafite px-5 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <SectionTitle escuro>{t.titulo}</SectionTitle>
          <address className="mt-6 text-xl font-medium not-italic leading-snug text-white/90 md:text-2xl">{config.endereco}</address>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={config.mapsLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              {t.botao}
            </Button>
            {config.instagram && (
              <Button href={config.instagramLink} variante="contornoEscuro" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                @{config.instagram}
              </Button>
            )}
          </div>
        </Reveal>

        {config.horarios.length > 0 && (
          <Reveal delay={120}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ouro">{t.horarios}</h3>
            <ul className="mt-4 divide-y divide-white/10 rounded-lg border border-white/12">
              {config.horarios.map((h) => (
                <li key={h.rotulo} className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-white/80">{h.rotulo}</span>
                  <span className="font-display font-semibold">{textoDaFaixa(h)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  )
}
