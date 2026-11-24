import { useEffect, useState } from 'react'

// Data atual, atualizada a cada 30 segundos (para o indicador "aberto agora" não ficar velho).
export function useAgora() {
  const [agora, setAgora] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setAgora(new Date()), 30000)
    return () => clearInterval(id)
  }, [])
  return agora
}
