// import Image from 'next/image'
// import { CalendarDays, Clock, MapPin, Navigation, Trophy } from 'lucide-react'
// import { nextMatch } from '@/lib/club-data'
// import { Countdown } from '@/components/countdown'
// import { SectionHeading } from '@/components/section-heading'

// export function NextMatch() {
//   return (
//     <section id="prossima-gara" aria-labelledby="prossima-gara-title" className="relative px-4 py-20 md:px-6 md:py-28">
//       <div className="mx-auto max-w-6xl">
//         <SectionHeading
//           id="prossima-gara-title"
//           eyebrow="Matchday"
//           title={
//             <>
//               Prossima <span className="text-primary">Partita</span>
//             </>
//           }
//           align="center"
//         />

//         <article className="glass-card relative mt-12 overflow-hidden rounded-3xl shadow-[0_0_80px_-30px] shadow-primary">
//           <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />

//           <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 md:px-8">
//             <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
//               <Trophy className="size-3.5" aria-hidden="true" />
//               Campionato CSI Venezia
//             </span>
//             <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{nextMatch.round}</span>
//           </div>

//           <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-10 md:gap-10 md:px-12 md:py-14">
//             <div className="flex flex-col items-center text-center">
//               <div className="flex size-24 items-center justify-center rounded-2xl border border-primary/30 bg-black md:size-36">
//                 <Image src="/images/logo-oriago.png" alt="Stemma Oriago Juniors" width={120} height={146} className="h-20 w-auto md:h-32" />
//               </div>
//               <h3 className="mt-4 font-display text-lg font-bold uppercase leading-tight md:text-3xl">Oriago Juniors</h3>
//               <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">{nextMatch.home ? 'Casa' : 'Trasferta'}</span>
//             </div>

//             <div className="flex flex-col items-center gap-3">
//               <span className="inline-block px-2 font-display text-4xl font-bold italic text-gradient-orange md:text-7xl">VS</span>
//               <span className="hidden items-center gap-1.5 rounded-full border border-primary/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary sm:inline-flex">
//                 <span className="size-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
//                 Prossimo Match
//               </span>
//             </div>

//             <div className="flex flex-col items-center text-center">
//               <div
//                 className="flex size-24 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] md:size-36"
//                 aria-hidden="true"
//               >
//                 <span className="font-display text-2xl font-bold tracking-wider text-white/80 md:text-4xl">{nextMatch.opponentShort}</span>
//               </div>
//               <h3 className="mt-4 font-display text-lg font-bold uppercase leading-tight md:text-3xl">{nextMatch.opponent}</h3>
//               <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Squadra Avversaria</span>
//             </div>
//           </div>

//           <div className="border-t border-white/10 px-5 py-8 md:px-8">
//             <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Calcio d&apos;inizio tra</p>
//             <Countdown target={nextMatch.kickoff} />
//           </div>

//           <div className="grid gap-4 border-t border-white/10 p-5 sm:grid-cols-2 md:p-8">
//             <div className="flex items-center gap-4 rounded-2xl bg-white/[0.04] p-5">
//               <CalendarDays className="size-7 shrink-0 text-primary" aria-hidden="true" />
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-muted-foreground">Data</p>
//                 <p className="font-display text-xl font-semibold uppercase">{nextMatch.dateLabel}</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 rounded-2xl bg-white/[0.04] p-5">
//               <Clock className="size-7 shrink-0 text-primary" aria-hidden="true" />
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-muted-foreground">Orario di inizio</p>
//                 <p className="font-display text-xl font-semibold uppercase">Ore {nextMatch.timeLabel}</p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-4 rounded-2xl border border-primary/50 bg-primary/10 p-5 sm:col-span-2 sm:flex-row sm:items-center">
//               <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
//                 <MapPin className="size-6" aria-hidden="true" />
//               </div>
//               <div className="flex-1">
//                 <p className="text-xs font-bold uppercase tracking-wider text-primary">Campo di Gioco / Impianto Sportivo</p>
//                 <p className="font-display text-lg font-semibold uppercase leading-tight">{nextMatch.venue}</p>
//                 <p className="mt-1 text-sm text-white/70">{nextMatch.address}</p>
//               </div>
//               <a
//                 href={nextMatch.mapsUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-background transition-colors hover:bg-primary"
//               >
//                 <Navigation className="size-4" aria-hidden="true" />
//                 Mappa
//                 <span className="sr-only">(si apre in una nuova scheda)</span>
//               </a>
//             </div>
//           </div>
//         </article>
//       </div>
//     </section>
//   )
// }


import Image from 'next/image'
import { CalendarDays, Clock, MapPin, Navigation, Trophy } from 'lucide-react'
import { games } from '@/lib/club-data'
import { Countdown } from '@/components/countdown'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function NextMatch() {
  const todayStart = new Date()
  todayStart.setHours(0, 0, 0, 0)

  const activeMatch = games
    .slice()
    .sort((a, b) => new Date(a.kickoff).getTime() - new Date(b.kickoff).getTime())
    .find((fixture) => {
      const matchDay = new Date(fixture.kickoff)
      matchDay.setHours(0, 0, 0, 0)
      return matchDay.getTime() >= todayStart.getTime()
    })

  if (!activeMatch) {
    return null
  }

  const isHome = activeMatch.home === 'Oriago Juniors'
  const opponent = isHome ? activeMatch.away : activeMatch.home
  const address = activeMatch.location.includes(', ')
    ? activeMatch.location.split(/, (.+)/)[1]
    : activeMatch.location

  return (
    <section id="prossima-gara" aria-labelledby="prossima-gara-title" className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="prossima-gara-title"
          eyebrow="Matchday"
          title={
            <>
              Prossima <span className="text-primary">Partita</span>
            </>
          }
          align="center"
        />

        <article className="glass-card relative mt-12 overflow-hidden rounded-3xl shadow-[0_0_80px_-30px] shadow-primary">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 md:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              <Trophy className="size-3.5" aria-hidden="true" />
              {activeMatch.competition}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{activeMatch.round}</span>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-10 md:gap-10 md:px-12 md:py-14">
            {/* Blocco Oriago Juniors: se isHome è true va a destra (order-3), altrimenti sta a sinistra (order-1) */}
            <div className={cn("flex flex-col items-center text-center", isHome ? "order-1" : "order-3")}>
              <div className="flex size-24 items-center justify-center rounded-2xl border border-primary/30 bg-black md:size-36">
                <Image src="/images/logo-oriago.png" alt="Stemma Oriago Juniors" width={120} height={146} className="h-20 w-auto md:h-32" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold uppercase leading-tight md:text-3xl">Oriago Juniors</h3>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">{isHome ? 'Casa' : 'Trasferta'}</span>
            </div>

            {/* Separatore centrale fisso al centro */}
            <div className="order-2 flex flex-col items-center gap-3">
              <span className="inline-block px-2 font-display text-4xl font-bold italic text-gradient-orange md:text-7xl">VS</span>
              <span className="hidden items-center gap-1.5 rounded-full border border-primary/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary sm:inline-flex">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
                Prossimo Match
              </span>
            </div>

            {/* Blocco Squadra Avversaria: se isHome è true va a sinistra (order-1), altrimenti sta a destra (order-3) */}
            <div className={cn("flex flex-col items-center text-center", isHome ? "order-3" : "order-1")}>
              <div
                className="flex size-24 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] md:size-36"
                aria-hidden="true"
              >
                <span className="font-display text-2xl font-bold tracking-wider text-white/80 md:text-4xl">{activeMatch.opponentShort}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold uppercase leading-tight md:text-3xl">{opponent}</h3>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {isHome ? 'Trasferta' : 'Casa'}
              </span>
            </div>
          </div>

          <div className="border-t border-white/10 px-5 py-8 md:px-8">
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Calcio d&apos;inizio tra</p>
            <Countdown target={activeMatch.kickoff} />
          </div>

          <div className="grid gap-4 border-t border-white/10 p-5 sm:grid-cols-2 md:p-8">
            <div className="flex items-center gap-4 rounded-2xl bg-white/[0.04] p-5">
              <CalendarDays className="size-7 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Data</p>
                <p className="font-display text-xl font-semibold uppercase">{activeMatch.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-white/[0.04] p-5">
              <Clock className="size-7 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Orario di inizio</p>
                <p className="font-display text-xl font-semibold uppercase">Ore {activeMatch.time}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-primary/50 bg-primary/10 p-5 sm:col-span-2 sm:flex-row sm:items-center">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <MapPin className="size-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Campo di Gioco / Impianto Sportivo</p>
                <p className="font-display text-lg font-semibold uppercase leading-tight">{activeMatch.venue}</p>
                <p className="mt-1 text-sm text-white/70">{address}</p>
              </div>
              <a
                href={activeMatch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-background transition-colors hover:bg-primary"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Mappa
                <span className="sr-only">(si apre in una nuova scheda)</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}