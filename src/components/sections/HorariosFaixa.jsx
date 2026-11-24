import { config } from '../../config'
import { useAgora } from '../../hooks/useAgora'
import { indiceDeHoje, textoDaFaixa } from '../../lib/horario'
import Reveal from '../ui/Reveal'

export default function HorariosFaixa() {
  const agora = useAgora()
  if (!config.horarios.length) return null
  const hoje = indiceDeHoje(agora)

  return (
    <section id="horarios" aria-label={config.textos.horarios.titulo} className="bg-grafite px-5 py-8 text-white md:py-10">
      <ul className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-3">
        {config.horarios.map((h, i) => {
          const ehHoje = i === hoje
          return (
            <Reveal
              as="li"
              key={h.rotulo}
              delay={i * 90}
              className={`flex items-center justify-between gap-4 rounded-lg px-5 py-4 sm:flex-col sm:items-start sm:gap-1 ${
                ehHoje ? 'bg-ouro text-grafite' : 'border border-white/15'
              }`}
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                {h.curto}
                {ehHoje && (
                  <span className="rounded bg-grafite px-1.5 py-0.5 text-xs font-bold text-ouro">{config.textos.horarios.hoje}</span>
                )}
              </span>
              <span className="font-display text-xl font-bold">{textoDaFaixa(h)}</span>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
