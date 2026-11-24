import { config, formatarPreco, linkWhatsappExperimental } from '../../config'
import { useAgora } from '../../hooks/useAgora'
import { statusAbertura } from '../../lib/horario'
import { aoClicarRota } from '../../lib/rota'
import Button from '../ui/Button'
import IconeWhatsApp from '../ui/IconeWhatsApp'

export default function Hero() {
  const t = config.textos.hero
  const agora = useAgora()
  const status = statusAbertura(agora)
  const menorPreco = config.mostrarPreco && config.planos.length ? Math.min(...config.planos.map((p) => p.preco)) : null

  return (
    <section className="bg-creme px-5 pb-14 pt-28 md:pb-20 md:pt-36">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-16">
        <div>
          <p className="entra text-sm font-semibold text-tinta/70">
            {config.nome}, {config.cidade}
          </p>
          <h1 style={{ "--d": "80ms" }} className="entra mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{t.titulo}</h1>
          <p style={{ "--d": "160ms" }} className="entra mt-6 max-w-xl text-lg leading-relaxed text-tinta/75">{t.apoio}</p>
          <div style={{ "--d": "240ms" }} className="entra mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={linkWhatsappExperimental} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <IconeWhatsApp className="size-5" /> {t.botaoPrincipal}
            </Button>
            {config.planos.length > 0 && (
              <Button href="#/planos" variante="contornoClaro" onClick={aoClicarRota('planos')} className="w-full sm:w-auto">
                {t.botaoSecundario}
              </Button>
            )}
          </div>
        </div>

        <aside aria-label={t.painelTitulo} style={{ "--d": "320ms" }} className="entra rounded-lg bg-grafite p-6 text-white shadow-[0_8px_24px_-12px_rgba(29,31,33,0.45)] md:p-8">
          <div className="faixa-diag -mx-6 -mt-6 mb-6 rounded-t-lg md:-mx-8 md:-mt-8" aria-hidden="true" />
          <dl className="grid gap-5">
            {status && (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">Funcionamento</dt>
                <dd className="mt-1.5 flex items-center gap-2.5 text-lg font-semibold" aria-live="polite">
                  <span
                    aria-hidden="true"
                    className={`size-2.5 shrink-0 rounded-full ${status.aberto ? 'ponto-vivo bg-ouro' : 'bg-white/40'}`}
                  />
                  {status.texto}
                </dd>
              </div>
            )}
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">Endereço</dt>
              <dd className="mt-1.5 text-base leading-relaxed text-white/90">{config.enderecoCurto}</dd>
            </div>
            {menorPreco !== null && (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/50">Planos</dt>
                <dd className="mt-1.5 text-lg font-semibold">
                  <span className="text-white/70">{t.precoPrefixo}</span>{' '}
                  <span className="font-display text-2xl font-bold text-ouro">{formatarPreco(menorPreco)}</span>
                </dd>
              </div>
            )}
          </dl>
        </aside>
      </div>
    </section>
  )
}
