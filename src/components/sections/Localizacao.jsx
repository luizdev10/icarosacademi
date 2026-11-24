import { config } from '../../config'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'

// O número da porta vira o motivo da seção: "77" em letra enorme, cortado pela borda.
const [rua, numero, ...resto] = config.endereco.split(',').map((t) => t.trim())

export default function Localizacao() {
  return (
    <section id="localizacao" className="overflow-hidden bg-fundo-2 px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <SectionTitle>Localização</SectionTitle>
          <p className="mt-8 text-2xl font-medium leading-snug">
            {rua}, {numero}
            <br />
            <span className="text-papel/75">{resto.join(', ')}</span>
          </p>
          {config.horarios.length > 0 && (
            <ul className="mt-6 text-lg">
              {config.horarios.map((h) => (
                <li key={h.dias}>
                  <strong>{h.dias}</strong>: {h.horas}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={config.mapsLink} target="_blank" rel="noopener noreferrer">Como chegar</Button>
            {config.instagram && (
              <Button href={config.instagramLink} variante="contorno" target="_blank" rel="noopener noreferrer">
                @{config.instagram}
              </Button>
            )}
          </div>
        </div>
        <p
          aria-hidden="true"
          className="select-none text-right font-display text-[min(58vw,26rem)] font-extrabold leading-[0.8] text-acento md:translate-x-[8%]"
        >
          {numero}
        </p>
      </div>
    </section>
  )
}
