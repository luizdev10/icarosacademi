import { useEffect, useState } from 'react'
import { linkWhatsapp } from '../../config'
import IconeWhatsApp from '../ui/IconeWhatsApp'

export default function WhatsAppFloat() {
  const [passouTopo, setPassouTopo] = useState(false)
  const [rodapeVisivel, setRodapeVisivel] = useState(false)

  useEffect(() => {
    const aoRolar = () => setPassouTopo(window.scrollY > window.innerHeight * 0.6)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })

    const rodape = document.querySelector('footer')
    let io
    if (rodape) {
      io = new IntersectionObserver(([e]) => setRodapeVisivel(e.isIntersecting))
      io.observe(rodape)
    }
    return () => {
      window.removeEventListener('scroll', aoRolar)
      io?.disconnect()
    }
  }, [])

  const visivel = passouTopo && !rodapeVisivel

  return (
    <a
      href={linkWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      tabIndex={visivel ? 0 : -1}
      className={`fixed bottom-4 right-4 z-50 flex size-12 items-center justify-center rounded-full bg-ouro text-grafite transition-[transform,opacity] duration-300 hover:scale-110 ${
        visivel ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <IconeWhatsApp className="size-6" />
    </a>
  )
}
