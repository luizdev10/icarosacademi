import { config } from '../../config'
import SectionTitle from '../ui/SectionTitle'
import ListaPlanos from '../sections/ListaPlanos'

export default function PaginaPlanos() {
  return (
    <main className="px-5 pb-28 pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <a href="#/" className="inline-flex min-h-11 items-center text-base text-papel/75 hover:text-acento">Voltar ao início</a>
        <SectionTitle className="mt-4">Planos</SectionTitle>
        {config.planos.length > 0 && <ListaPlanos rotuloBotao="Quero este plano" avisoValor />}
      </div>
    </main>
  )
}
