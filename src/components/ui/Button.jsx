const estilos = {
  acento: 'bg-acento text-fundo hover-capaz:hover:bg-papel',
  contorno: 'bg-white/10 text-papel hover-capaz:hover:bg-white/20',
  escuro: 'bg-fundo text-papel hover-capaz:hover:bg-black',
}

export default function Button({ href, variante = 'acento', pequeno = false, className = '', children, ...rest }) {
  return (
    <a
      href={href}
      className={`btn inline-flex min-h-11 items-center justify-center gap-2 font-bold ${
        pequeno ? 'px-4 py-2 text-sm' : 'px-6 py-3.5 text-base'
      } ${estilos[variante]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
