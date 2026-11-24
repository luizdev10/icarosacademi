import { config } from '../../config'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'

const [rua, numero, ...resto] = config.endereco.split(',').map((t) => t.trim())

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-fundo-2 px-5 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-end">
        <SectionTitle>Localização</SectionTitle>
        <div>
          <p className="text-3xl font-medium leading-snug md:text-4xl">
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
            <Button href={config.mapsLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">Como chegar</Button>
            {config.instagram && (
              <Button href={config.instagramLink} variante="contorno" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                @{config.instagram}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
