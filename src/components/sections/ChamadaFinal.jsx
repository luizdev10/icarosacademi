import { config, linkWhatsappExperimental } from '../../config'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import IconeWhatsApp from '../ui/IconeWhatsApp'

export default function ChamadaFinal() {
  const t = config.textos.chamada
  return (
    <section id="contato" className="relative overflow-hidden bg-ouro px-5 py-14 text-grafite md:py-20">
      <div aria-hidden="true" className="faixa-diag faixa-diag-escura absolute inset-y-0 right-0 hidden !h-full w-1/3 opacity-20 md:block" />
      <Reveal className="relative mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">{t.titulo}</h2>
          <p className="mt-2 text-lg">{t.apoio}</p>
        </div>
        <Button href={linkWhatsappExperimental} variante="escuro" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
          <IconeWhatsApp className="size-5" /> {t.botao}
        </Button>
      </Reveal>
    </section>
  )
}
