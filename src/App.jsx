import { useEffect, useRef } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'
import Hero from './components/sections/Hero'
import HorariosFaixa from './components/sections/HorariosFaixa'
import Planos from './components/sections/Planos'
import Modalidades from './components/sections/Modalidades'
import ChamadaFinal from './components/sections/ChamadaFinal'
import Estrutura from './components/sections/Estrutura'
import Localizacao from './components/sections/Localizacao'
import Faq from './components/sections/Faq'
import { irParaSecao, useRota } from './lib/rota'

export default function App() {
  const rota = useRota()
  const primeiraVez = useRef(true)

  useEffect(() => {
    history.scrollRestoration = 'manual'
    if (primeiraVez.current) {
      // Ao entrar ou atualizar, o site abre sempre no topo, nunca numa seção que ficou no endereço.
      primeiraVez.current = false
      history.replaceState(null, '', '#/')
      window.scrollTo({ top: 0 })
      return
    }
    if (rota === '') {
      window.scrollTo({ top: 0 })
    } else {
      requestAnimationFrame(() => {
        irParaSecao(rota)
        // O endereço volta para #/ depois de rolar, para atualizar a página não repetir o salto.
        history.replaceState(null, '', '#/')
      })
    }
  }, [rota])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HorariosFaixa />
        <Planos />
        <Modalidades />
        <ChamadaFinal />
        <Estrutura />
        <Localizacao />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
