import { useState } from 'react'
import { config, linkWhatsapp } from '../../config'
import { aoClicarRota } from '../../lib/rota'
import Button from '../ui/Button'
import IconeWhatsApp from '../ui/IconeWhatsApp'

const links = [
  { rota: 'modalidades', texto: 'Modalidades', mostrar: config.modalidades.length > 0 },
  { rota: 'nossos-planos', texto: 'Planos', mostrar: config.planos.length > 0 },
  { rota: 'localizacao', texto: 'Localização', mostrar: true },
  { rota: 'contato', texto: 'Contato', mostrar: true },
].filter((l) => l.mostrar)

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-fundo">
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        <a
          href="#/"
          onClick={aoClicarRota('', fechar)}
          aria-label={`${config.nome}: voltar ao início`}
          className="flex min-h-11 min-w-0 items-center font-display text-2xl font-extrabold uppercase leading-none"
        >
          <span className="truncate">{config.nome}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.rota}
              href={`#/${l.rota}`}
              onClick={aoClicarRota(l.rota)}
              className="flex min-h-11 items-center px-3 text-sm font-medium text-papel/80 hover:text-acento"
            >
              {l.texto}
            </a>
          ))}
          <Button href={linkWhatsapp} pequeno target="_blank" rel="noopener noreferrer" className="ml-3">
            <IconeWhatsApp className="size-4" /> Falar no WhatsApp
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto(!aberto)}
          className="flex size-11 items-center justify-center md:hidden"
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {aberto ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {aberto && (
        <div id="menu-mobile" className="bg-fundo-2 px-5 pb-5 md:hidden">
          {links.map((l) => (
            <a
              key={l.rota}
              href={`#/${l.rota}`}
              onClick={aoClicarRota(l.rota, fechar)}
              className="flex min-h-12 items-center text-base font-medium"
            >
              {l.texto}
            </a>
          ))}
          <Button href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="mt-4 w-full" onClick={fechar}>
            <IconeWhatsApp className="size-4" /> Falar no WhatsApp
          </Button>
        </div>
      )}
    </header>
  )
}
