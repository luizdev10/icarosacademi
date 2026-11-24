export default function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`font-display text-6xl font-extrabold uppercase leading-[0.9] md:text-8xl ${className}`}>
      {children}
    </h2>
  )
}
