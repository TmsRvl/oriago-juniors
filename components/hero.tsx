import Image from 'next/image'
import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react'
import {roster} from '@/lib/club-data'
import { prefixPath } from '@/lib/utils-path'

const totalPlayers = Object.values(roster).reduce(
  (total, players) => total + players.length, 
  0
)

const stats = [
  { value: '2026', label: 'Anno di fondazione' },
  { value: 'CSI', label: 'Venezia' },
  { value: String(totalPlayers), label: 'Giocatori in rosa' },
]

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <Image
        src={prefixPath("/images/maglie2.png")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-right opacity-95"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/20"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />

      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center px-4 py-20 md:px-6">
        <div className="max-w-3xl">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Nuova Fondazione
          </span> */}

          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-8xl">
            Il Futuro del Calcio a Oriago <span className="text-gradient-orange">Comincia Ora</span>
          </h1>

          {/* <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Passione, amicizia e spirito di squadra: gli Oriago Juniors scendono in campo per la prima volta nel
            Campionato CSI Venezia. Una nuova storia, scritta insieme alla nostra comunità.
          </p> */}

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Un nuovo progetto calcistico nato dalla voglia di creare qualcosa di nostro, costruito sul territorio e con l’obiettivo di formare un gruppo unito dentro e fuori dal campo.
          </p>

          


          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#rosa"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-4 font-display text-base font-semibold uppercase tracking-wider text-primary-foreground shadow-[0_0_40px_-8px] shadow-primary transition-colors hover:bg-brand-deep"
            >
              Scopri la Rosa
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#campionato"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-4 font-display text-base font-semibold uppercase tracking-wider text-white backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              <CalendarDays className="size-5" aria-hidden="true" />
              Calendario 
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</dt>
                <dd className="order-first font-display text-3xl font-bold text-white md:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
