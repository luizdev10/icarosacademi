// Anilha de academia vista de frente, desenhada em cores chapadas. O texto do aro vem do config.
export default function Placa({ texto, className = '' }) {
  const aro = `${texto.toUpperCase()}   `.repeat(2)
  return (
    <svg
      viewBox="-200 -200 400 400"
      className={className}
      role="img"
      aria-label={texto}
      style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
    >
      <circle r="200" fill="#ffc20e" />
      <circle r="178" fill="#e0a800" />
      <circle r="150" fill="#ffc20e" />
      <path id="aro-placa" d="M -164,0 a164,164 0 1,1 328,0 a164,164 0 1,1 -328,0" fill="none" />
      <text fontSize="21" fill="#0b0b0b" letterSpacing="2">
        <textPath href="#aro-placa" textLength="1020" lengthAdjust="spacing">{aro}</textPath>
      </text>
      <circle r="70" fill="#e0a800" />
      <circle r="34" fill="#0b0b0b" />
      {[0, 90, 180, 270].map((g) => (
        <circle key={g} r="7" cy="-110" fill="#0b0b0b" transform={`rotate(${g + 45})`} />
      ))}
    </svg>
  )
}
