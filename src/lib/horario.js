import { config } from '../config'

const NOMES_DIA = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
const ABREV = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const paraMinutos = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

// "05:00" vira "5h"; "08:30" vira "8h30".
export function formatarHora(hhmm) {
  const [h, m] = hhmm.split(':').map(Number)
  return m ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`
}

// Dia da semana (0 = domingo) e minutos desde meia-noite, sempre no fuso de Fortaleza.
function agoraEmFortaleza(data) {
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Fortaleza',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(data)
  const pegar = (tipo) => partes.find((p) => p.type === tipo).value
  return { dia: ABREV.indexOf(pegar('weekday')), minutos: Number(pegar('hour')) * 60 + Number(pegar('minute')) }
}

const faixaDoDia = (dia) => config.horarios.find((h) => h.dias.includes(dia))

export function indiceDeHoje(data = new Date()) {
  const { dia } = agoraEmFortaleza(data)
  return config.horarios.findIndex((h) => h.dias.includes(dia))
}

// { aberto, texto } ou null quando não há horários no config.
export function statusAbertura(data = new Date()) {
  if (!config.horarios.length) return null
  const { dia, minutos } = agoraEmFortaleza(data)
  const hoje = faixaDoDia(dia)

  if (hoje && minutos >= paraMinutos(hoje.abre) && minutos < paraMinutos(hoje.fecha)) {
    return { aberto: true, texto: `Aberto agora, fecha às ${formatarHora(hoje.fecha)}` }
  }
  if (hoje && minutos < paraMinutos(hoje.abre)) {
    return { aberto: false, texto: `Fechado, abre hoje às ${formatarHora(hoje.abre)}` }
  }
  for (let i = 1; i <= 7; i++) {
    const dia2 = (dia + i) % 7
    const faixa = faixaDoDia(dia2)
    if (faixa) {
      const quando = i === 1 ? 'amanhã' : NOMES_DIA[dia2]
      return { aberto: false, texto: `Fechado, abre ${quando} às ${formatarHora(faixa.abre)}` }
    }
  }
  return { aberto: false, texto: 'Fechado agora' }
}

export const textoDaFaixa = (h) => `${formatarHora(h.abre)} às ${formatarHora(h.fecha)}`
