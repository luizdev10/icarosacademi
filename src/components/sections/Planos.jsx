import { config } from '../../config'
import SectionTitle from '../ui/SectionTitle'
import ListaPlanos from './ListaPlanos'

export default function Planos() {
  if (!config.planos.length) return null
  return (
    <section id="nossos-planos" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle>Planos</SectionTitle>
        <ListaPlanos rotuloBotao={config.mostrarPreco ? 'Quero este plano' : 'Consultar valores'} />
      </div>
    </section>
  )
}
