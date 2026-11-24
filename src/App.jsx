import { useEffect, useRef } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'
import Hero from './components/sections/Hero'
import Modalidades from './components/sections/Modalidades'
import Estrutura from './components/sections/Estrutura'
import Planos from './components/sections/Planos'
import Localizacao from './components/sections/Localizacao'
import ChamadaFinal from './components/sections/ChamadaFinal'
import Faq from './components/sections/Faq'
import PaginaPlanos from './components/pages/PaginaPlanos'
import { irParaSecao, useRota } from './lib/rota'

export default function App() {
  const rota = useRota()
  const paginaPlanos = rota === 'planos'

  const primeiraVez = useRef(true)

  useEffect(() => {
    history.scrollRestoration = 'manual'
    if (primeiraVez.current) {
      // Ao entrar ou atualizar, o site abre sempre no topo (ou em #/planos), nunca numa seção que ficou no endereço.
      primeiraVez.current = false
      if (!paginaPlanos) history.replaceState(null, '', '#/')
      window.scrollTo({ top: 0 })
      return
    }
    if (paginaPlanos || rota === '') {
      window.scrollTo({ top: 0 })
    } else {
      requestAnimationFrame(() => {
        irParaSecao(rota)
        // O endereço volta para #/ depois de rolar, para atualizar a página não repetir o salto.
        history.replaceState(null, '', '#/')
      })
    }
  }, [rota, paginaPlanos])

  return (
    <>
      <Header />
      {paginaPlanos ? (
        <PaginaPlanos />
      ) : (
        <main>
          <Hero />
          <Modalidades />
          <Estrutura />
          <Planos />
          <Localizacao />
          <ChamadaFinal />
          <Faq />
        </main>
      )}
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
