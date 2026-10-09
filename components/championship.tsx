// 'use client'

// import { useState } from 'react'
// import { CalendarDays, ExternalLink, Flag, Handshake, ListChecks, Timer, Users } from 'lucide-react'
// import { CSI_PORTAL_URL, upcomingFixtures } from '@/lib/club-data'
// import { SectionHeading } from '@/components/section-heading'
// import { cn } from '@/lib/utils'

// const tabs = [
//   { id: 'formula', label: 'Formula del Torneo', icon: ListChecks },
//   { id: 'calendario', label: 'Prossime Giornate', icon: CalendarDays },
// ] as const

// const formulaItems = [
//   { icon: Users, title: 'Calcio a 11 amatoriale', text: 'Torneo dedicato a squadre amatoriali del territorio veneziano, organizzato dal Centro Sportivo Italiano.' },
//   { icon: Flag, title: 'Girone all’italiana', text: 'Partite di andata e ritorno nel girone; le migliori classificate accedono alla fase finale provinciale.' },
//   { icon: Timer, title: 'Due tempi da 35’', text: 'Sostituzioni volanti secondo regolamento CSI e tesseramento obbligatorio per tutti gli atleti.' },
//   { icon: Handshake, title: 'Fair play al centro', text: 'La Coppa Disciplina premia correttezza e rispetto: valori che contano quanto il risultato.' },
// ]

// export function Championship() {
//   const [active, setActive] = useState<(typeof tabs)[number]['id']>('formula')
  

//   return (
//     <section id="campionato" aria-labelledby="campionato-title" className="px-4 py-20 md:px-6 md:py-28">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
//           <SectionHeading
//             id="campionato-title"
//             eyebrow="Il Campionato"
//             title={
//               <>
//                 Il Percorso in <span className="text-primary">Campionato CSI Venezia</span>
//               </>
//             }
//             description="La nostra prima stagione ufficiale: un cammino domenica dopo domenica, tra le squadre amatoriali della provincia."
//           />

//           <div role="tablist" aria-label="Informazioni campionato" className="flex shrink-0 gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-1.5">
//             {tabs.map((tab) => {
//               const Icon = tab.icon
//               const selected = active === tab.id
//               return (
//                 <button
//                   key={tab.id}
//                   type="button"
//                   role="tab"
//                   id={`tab-${tab.id}`}
//                   aria-selected={selected}
//                   aria-controls={`panel-${tab.id}`}
//                   onClick={() => setActive(tab.id)}
//                   className={cn(
//                     'inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors',
//                     selected ? 'bg-primary text-primary-foreground' : 'text-white/70 hover:text-white',
//                   )}
//                 >
//                   <Icon className="size-4" aria-hidden="true" />
//                   {tab.label}
//                 </button>
//               )
//             })}
//           </div>
//         </div>

//         <div className="mt-12">
//           {active === 'formula' ? (
//             <div id="panel-formula" role="tabpanel" aria-labelledby="tab-formula" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//               {formulaItems.map((item) => (
//                 <article key={item.title} className="glass-card group rounded-2xl p-6 transition-colors hover:border-primary/60">
//                   <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
//                     <item.icon className="size-6" aria-hidden="true" />
//                   </div>
//                   <h3 className="mt-5 font-display text-xl font-semibold uppercase">{item.title}</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-white/65">{item.text}</p>
//                 </article>
//               ))}
//             </div>
//           ) : (
//             <ol id="panel-calendario" role="tabpanel" aria-labelledby="tab-calendario" className="grid gap-3">
//               {upcomingFixtures.map((fixture) => (
//                 <li
//                   key={fixture.round}
//                   className="glass-card grid grid-cols-1 items-center gap-3 rounded-2xl p-5 sm:grid-cols-[9rem_1fr_auto_auto] md:px-8"
//                 >
//                   <div>
//                     <p className="text-xs font-bold uppercase tracking-widest text-primary">{fixture.round}</p>
//                     <p className="font-display text-lg font-semibold uppercase">{fixture.date}</p>
//                   </div>
//                   <p className="font-display text-lg font-semibold uppercase md:text-2xl">
//                     <span className={cn(fixture.home === 'Oriago Juniors' && 'text-primary')}>{fixture.home}</span>
//                     <span className="mx-3 text-sm text-muted-foreground">vs</span>
//                     <span className={cn(fixture.away === 'Oriago Juniors' && 'text-primary')}>{fixture.away}</span>
//                   </p>
//                   <span className="text-sm text-muted-foreground text-left justify-self-start">{fixture.type}</span>
//                   <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-sm font-semibold">
//                     <Timer className="size-4 text-primary" aria-hidden="true" />
//                     {fixture.time}
//                   </span>
//                 </li>
//               ))}
//             </ol>
//           )}
//         </div>

//         <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-primary/50 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent p-6 md:flex-row md:items-center md:p-10">
//           <div>
//             <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Risultati e classifiche</p>
//             <p className="mt-2 max-w-xl font-display text-2xl font-bold uppercase leading-tight md:text-3xl">
//               Tutti i risultati ufficiali sono pubblicati dal CSI Venezia
//             </p>
//           </div>
//           <a
//             href={CSI_PORTAL_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-4 text-left font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-brand-deep md:text-base"
//           >
//             Consulta il Portale Ufficiale CSI Venezia per Risultati Completi
//             <ExternalLink className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
//             <span className="sr-only">(si apre in una nuova scheda)</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import { ExternalLink, Timer } from 'lucide-react'
import { CSI_PORTAL_CHAMPIONSHIP, CSI_PORTAL_CUP, games } from '@/lib/club-data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function Championship() {
  return (
    <section id="campionato" aria-labelledby="campionato-title" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="campionato-title"
          eyebrow="Prossimi appuntamenti"
          title={
            <>
              Non perderti le prossime gare, <span className="text-primary">vieni a fare il tifo!</span>
            </>
          }
          description="La nostra prima stagione ufficiale: un cammino settimana dopo settimana, tra le squadre amatoriali della provincia di Venezia."
        />

        <div className="mt-12">
          <ol className="grid gap-3">
            {games.filter((fixture) => new Date(fixture.kickoff) >= new Date()).map((fixture) => (
              <li
                key={fixture.round}
                className="glass-card grid grid-cols-1 items-center gap-3 rounded-2xl p-5 sm:grid-cols-[9rem_1fr_auto_auto] md:px-8"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{fixture.round}</p>
                  <p className="font-display text-lg font-semibold uppercase">{fixture.date}</p>
                </div>
                <p className="font-display text-lg font-semibold uppercase md:text-2xl">
                  <span className={cn(fixture.home === 'Oriago Juniors' && 'text-primary')}>{fixture.home}</span>
                  <span className="mx-3 text-sm text-muted-foreground">vs</span>
                  <span className={cn(fixture.away === 'Oriago Juniors' && 'text-primary')}>{fixture.away}</span>
                </p>
                <span className="text-left text-sm text-muted-foreground justify-self-start">{fixture.competition}</span>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-sm font-semibold">
                  <Timer className="size-4 text-primary" aria-hidden="true" />
                  {fixture.time}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-primary/50 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent p-6 md:flex-row md:items-center md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Risultati e classifiche</p>
            <p className="mt-2 max-w-xl font-display text-2xl font-bold uppercase leading-tight md:text-3xl">
              Tutti i risultati ufficiali sono pubblicati dal CSI Venezia
            </p>
          </div>
          <a
            href={CSI_PORTAL_CHAMPIONSHIP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-4 text-left font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-brand-deep md:text-base"
          >
            Risultati in Campionato
            <ExternalLink className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            <span className="sr-only">(si apre in una nuova scheda)</span>
          </a>
          <a
            href={CSI_PORTAL_CUP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-4 text-left font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-brand-deep md:text-base"
          >
            Risultati di Coppa Venezia
            <ExternalLink className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            <span className="sr-only">(si apre in una nuova scheda)</span>
          </a>
        </div>
      </div>
    </section>
  )
}