import { useState } from 'react'
import { config } from '../../config'
import { asset } from '../../lib/asset'

// Mostra a logo (círculo inteiro, sem filtros). Sem o arquivo, cai para o nome em texto.
export default function Logo({ altura = 40, className = '' }) {
  const [falhou, setFalhou] = useState(false)
  const { src, alt } = config.logo
  const [primeira, ...resto] = config.nome.split(' ')

  if (src && !falhou) {
    return (
      <img
        src={asset(src)}
        alt={alt}
        height={altura}
        style={{ height: altura, width: 'auto' }}
        onError={() => setFalhou(true)}
        className={`shrink-0 ${className}`}
      />
    )
  }

  return (
    <span
      aria-label={config.nome}
      className={`flex flex-col font-display font-extrabold leading-none tracking-wide ${className}`}
      style={{ fontSize: altura * 0.5 }}
    >
      <span className="text-white">{primeira.toUpperCase()}</span>
      <span className="text-ouro" style={{ fontSize: '0.62em', letterSpacing: '0.22em', marginTop: '0.2em' }}>
        {resto.join(' ').toUpperCase()}
      </span>
    </span>
  )
}
