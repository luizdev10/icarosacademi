const estilos = {
  ouro: 'bg-ouro text-grafite hover-capaz:hover:bg-ouro-claro',
  escuro: 'bg-grafite text-white hover-capaz:hover:bg-tinta',
  contornoClaro: 'border border-tinta/25 text-tinta hover-capaz:hover:border-tinta/60',
  contornoEscuro: 'border border-white/25 text-white hover-capaz:hover:border-white/60',
}

export default function Button({ href, variante = 'ouro', pequeno = false, className = '', children, ...rest }) {
  return (
    <a
      href={href}
      className={`btn inline-flex min-h-11 items-center justify-center gap-2 rounded-lg font-semibold ${
        pequeno ? 'px-4 py-2 text-sm' : 'px-6 py-3.5 text-base'
      } ${estilos[variante]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
