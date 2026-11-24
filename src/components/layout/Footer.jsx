import { config, linkWhatsapp } from '../../config'
import { formatarTelefone } from '../../lib/rota'
import Logo from '../ui/Logo'

export default function Footer() {
  return (
    <footer className="bg-grafite text-white">
      <div className="faixa-diag" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[auto_1fr] md:gap-16">
        <Logo altura={112} />
        <div className="grid gap-8 text-base sm:grid-cols-2">
          <div>
            <p className="font-display text-lg font-semibold">{config.nome}</p>
            <address className="mt-2 not-italic leading-relaxed text-white/75">{config.endereco}</address>
          </div>
          <div className="flex flex-col">
            <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center hover:text-ouro">
              WhatsApp {formatarTelefone(config.whatsapp)}
            </a>
            {config.instagram && (
              <a href={config.instagramLink} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center hover:text-ouro">
                Instagram @{config.instagram}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-x-6 gap-y-1 px-5 py-5 text-sm text-white/60">
          <span>© {new Date().getFullYear()} {config.nome}</span>
          {config.previa && <span>{config.textos.rodape.previa}</span>}
        </div>
      </div>
    </footer>
  )
}
