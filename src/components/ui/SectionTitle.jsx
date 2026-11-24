import Reveal from './Reveal'

export default function SectionTitle({ children, apoio, escuro = false, className = '' }) {
  return (
    <Reveal className={className}>
      <h2 className={`text-3xl font-bold leading-tight tracking-tight md:text-5xl ${escuro ? 'text-white' : 'text-tinta'}`}>
        {children}
      </h2>
      {apoio && <p className={`mt-3 max-w-xl text-base leading-relaxed md:text-lg ${escuro ? 'text-white/70' : 'text-tinta/70'}`}>{apoio}</p>}
    </Reveal>
  )
}
