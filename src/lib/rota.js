import { useEffect, useState } from 'react'

const ler = () => window.location.hash.replace(/^#\/?/, '')

export function useRota() {
  const [rota, setRota] = useState(ler)
  useEffect(() => {
    const f = () => setRota(ler())
    window.addEventListener('hashchange', f)
    return () => window.removeEventListener('hashchange', f)
  }, [])
  return rota
}

// Rotas: '' (início), 'planos' (página) ou o id de uma seção do início (ex.: 'localizacao').
export function irParaSecao(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  else window.scrollTo({ top: 0 })
}

// Clicar num link para a rota em que já estamos não dispara hashchange; rola manualmente.
export function aoClicarRota(rota, depois) {
  return (e) => {
    if (window.location.hash === `#/${rota}`) {
      e.preventDefault()
      rota ? irParaSecao(rota) : window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    depois?.()
  }
}

export const listaTexto = (itens) =>
  itens.length > 1 ? `${itens.slice(0, -1).join(', ')} e ${itens[itens.length - 1]}` : itens.join('')

export function formatarTelefone(numero) {
  const m = String(numero).match(/^55(\d{2})(\d{4,5})(\d{4})$/)
  return m ? `(${m[1]}) ${m[2]}-${m[3]}` : numero
}
