import { linkWhatsappVisita } from '../../config'
import Button from '../ui/Button'
import IconeWhatsApp from '../ui/IconeWhatsApp'

export default function ChamadaFinal() {
  return (
    <section id="contato" className="bg-acento px-5 py-24 text-fundo md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-[clamp(3.5rem,11vw,9rem)] font-extrabold uppercase leading-[0.88]">
          Venha treinar
          <br />
          com a gente
        </h2>
        <p className="mt-6 max-w-md text-xl">Chame no WhatsApp e combine uma visita.</p>
        <Button href={linkWhatsappVisita} variante="escuro" target="_blank" rel="noopener noreferrer" className="mt-8">
          <IconeWhatsApp className="size-5" /> Agendar uma visita
        </Button>
      </div>
    </section>
  )
}
