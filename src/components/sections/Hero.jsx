import { config, linkWhatsapp } from '../../config'
import { asset } from '../../lib/asset'
import { aoClicarRota, listaTexto } from '../../lib/rota'
import Button from '../ui/Button'
import IconeWhatsApp from '../ui/IconeWhatsApp'
import Placa from '../ui/Placa'

export default function Hero() {
  const { parcerias, planos, modalidades } = config
  const oferta = listaTexto(modalidades.map((m) => m.titulo.toLowerCase()))
  const foto = config.hero?.imagem?.src ? asset(config.hero.imagem.src) : null

  return (
    <section className="relative isolate overflow-hidden px-5 pb-16 pt-28 md:pb-24 md:pt-36">
      {foto && (
        <>
          <img src={foto} alt={config.hero.imagem.alt} fetchpriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-fundo/65" />
        </>
      )}
      <div className={`mx-auto grid max-w-7xl gap-12 ${foto ? '' : 'md:grid-cols-[1.15fr_0.85fr] md:items-center'}`}>
        <div>
          <h1 className="font-display text-[clamp(4rem,19vw,6.5rem)] font-extrabold uppercase leading-[0.84] md:text-[clamp(5rem,9.5vw,9.5rem)]">
            Treine em
            <br />
            Barbalha
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-papel/80">
            {oferta && `${oferta.charAt(0).toUpperCase()}${oferta.slice(1)}. `}
            {config.endereco.split(',').slice(0, 2).join(',')}, no Centro.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <IconeWhatsApp className="size-5" /> Falar no WhatsApp
            </Button>
            {planos.length > 0 && (
              <Button href="#/nossos-planos" variante="contorno" onClick={aoClicarRota('nossos-planos')} className="w-full sm:w-auto">
                Ver planos
              </Button>
            )}
          </div>
          {parcerias.length > 0 && (
            <p className="mt-8 max-w-md text-sm leading-relaxed text-papel/70">Aceitamos {listaTexto(parcerias)}.</p>
          )}
        </div>

        {!foto && (
          <div className="pointer-events-none mx-auto w-44 sm:w-56 md:w-full md:max-w-[30rem]">
            <Placa texto={`${config.nome} ${config.subtitulo}`} className="placa-gira h-auto w-full" />
          </div>
        )}
      </div>
    </section>
  )
}
