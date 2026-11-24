import { config, linkWhatsapp } from '../../config'
import { aoClicarRota, listaTexto } from '../../lib/rota'
import Button from '../ui/Button'
import IconeWhatsApp from '../ui/IconeWhatsApp'
import Placa from '../ui/Placa'

export default function Hero() {
  const { parcerias, planos, modalidades } = config
  const oferta = listaTexto(modalidades.map((m) => m.titulo.toLowerCase()))

  return (
    <section className="relative overflow-hidden px-5 pb-0 pt-28 md:min-h-[46rem] md:pt-36">
      <div className="relative z-10 mx-auto max-w-7xl">
        <h1 className="font-display text-[clamp(4.5rem,17vw,12rem)] font-extrabold uppercase leading-[0.82]">
          Treine em
          <br />
          Barbalha
        </h1>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-papel/80">
          {oferta && `${oferta.charAt(0).toUpperCase()}${oferta.slice(1)}. `}
          {config.endereco.split(',').slice(0, 2).join(',')}, no Centro.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
            <IconeWhatsApp className="size-5" /> Falar no WhatsApp
          </Button>
          {planos.length > 0 && (
            <Button href="#/nossos-planos" variante="contorno" onClick={aoClicarRota('nossos-planos')}>
              Ver planos
            </Button>
          )}
        </div>
        {parcerias.length > 0 && (
          <p className="mt-8 max-w-md text-sm leading-relaxed text-papel/70">Aceitamos {listaTexto(parcerias)}.</p>
        )}
      </div>

      <div className="pointer-events-none relative -mx-5 mt-8 flex h-[64vw] justify-end overflow-hidden md:absolute md:right-[-9vw] md:top-28 md:mx-0 md:mt-0 md:h-auto md:w-[50vw] md:overflow-visible">
        <Placa texto={`${config.nome} ${config.subtitulo}`} className="placa-gira w-[112vw] max-w-none translate-x-[24%] md:w-full md:translate-x-0" />
      </div>
    </section>
  )
}
