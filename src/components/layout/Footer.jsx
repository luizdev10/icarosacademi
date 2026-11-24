import { config, linkWhatsapp } from '../../config'
import { formatarTelefone } from '../../lib/rota'

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-fundo px-5 pt-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-lg md:flex-row md:justify-between">
        <address className="not-italic leading-relaxed text-papel/80">{config.endereco}</address>
        <div className="flex flex-col md:items-end">
          <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center hover:text-acento">
            WhatsApp {formatarTelefone(config.whatsapp)}
          </a>
          {config.instagram && (
            <a href={config.instagramLink} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center hover:text-acento">
              Instagram @{config.instagram}
            </a>
          )}
        </div>
      </div>
      <p
        aria-hidden="true"
        className="mt-12 flex select-none flex-wrap justify-center gap-x-[0.25em] text-center font-display text-[15.5vw] font-extrabold uppercase leading-[0.85] text-papel md:text-[min(9.2vw,11.5rem)]"
      >
        {config.nome.split(' ').map((palavra) => (
          <span key={palavra}>{palavra}</span>
        ))}
      </p>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-x-6 gap-y-1 py-6 text-sm text-papel/60">
        <span>© {new Date().getFullYear()} {config.nome}</span>
        {config.previa && <span>Prévia do site, em avaliação</span>}
      </div>
    </footer>
  )
}
