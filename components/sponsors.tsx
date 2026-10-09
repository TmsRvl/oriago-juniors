import { ArrowUpRight, Crown, Plus, Star } from 'lucide-react'
import { contacts, sponsors } from '@/lib/club-data'
import { SectionHeading } from '@/components/section-heading'
import Image from 'next/image'
import { prefixPath } from '@/lib/utils-path'

// function SponsorMark({ name, large }: { name: string; large?: boolean }) {
//   const initials = name
//     .split(' ')
//     .filter((w) => w.length > 2)
//     .slice(0, 2)
//     .map((w) => w[0])
//     .join('')
//   return (
//     <div className="flex items-center gap-3">
//       <span
//         className={
//           large
//             ? 'flex size-16 items-center justify-center rounded-2xl bg-white font-display text-2xl font-bold text-background md:size-20 md:text-3xl'
//             : 'flex size-11 items-center justify-center rounded-xl bg-white/10 font-display text-lg font-bold text-white'
//         }
//         aria-hidden="true"
//       >
//         {initials}
//       </span>
//       <span className={large ? 'font-display text-3xl font-bold uppercase leading-none md:text-5xl' : 'font-display text-xl font-semibold uppercase leading-tight'}>
//         {name}
//       </span>
//     </div>
//   )
// }

function SponsorMark({ name, logo, large }: { name: string; logo?: string; large?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={
          large
            ? 'relative h-24 w-40 shrink-0 md:h-28 md:w-48'
            : 'relative h-20 w-32 shrink-0'
        }
      >
        {logo ? (
          <Image
            src={prefixPath(logo)}
            alt={`Logo ${name}`}
            fill
            className="object-contain"
          />
        ) : (
          /* Fallback se manca il file immagine */
          <span className="font-display text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      <span
        className={
          large
            ? 'font-display text-3xl font-bold uppercase leading-none md:text-5xl'
            : 'font-display text-xl font-semibold uppercase leading-tight'
        }
      >
        {name}
      </span>
    </div>
  )
}

export function Sponsors() {
  return (
    <section id="sponsor" aria-labelledby="sponsor-title" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="sponsor-title"
          eyebrow="Sponsor"
          title={
            <>
              I Nostri Partner <span className="text-primary">Ufficiali</span>
            </>
          }
          description="Le realtà del territorio che credono nel progetto Oriago Juniors fin dal primo giorno. Grazie!"
          align="center"
        />
        <br />

        {/* <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <article className="relative overflow-hidden rounded-3xl border border-primary bg-gradient-to-br from-primary/25 via-primary/5 to-transparent p-8 md:p-10 lg:col-span-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              <Crown className="size-3.5" aria-hidden="true" />
              Main Sponsor
            </span>
            <div className="mt-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h3>
                <SponsorMark name={sponsors.top.name} large />
              </h3>
              <p className="text-sm uppercase tracking-widest text-white/60">{sponsors.top.tagline}</p>
            </div>
          </article> */}

          {/* {sponsors.top.map((s) => (
            <article key={s.name} className="glass-card rounded-2xl border-primary/50 p-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                <Star className="size-3" aria-hidden="true" />
                Top Supporter
              </span>
              <h3 className="mt-6">
                <SponsorMark name={s.name} />
              </h3>
              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{s.tagline}</p>
            </article>
          ))} */}

          {/* <a
            href={`mailto:${contacts.email}?subject=Sponsorizzazione%20Oriago%20Juniors`}
            className="group flex flex-col justify-between rounded-2xl border-2 border-dashed border-primary/50 p-6 transition-colors hover:border-primary hover:bg-primary/10 lg:row-span-2"
          >
            <div className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-90">
              <Plus className="size-7" aria-hidden="true" />
            </div>
            <div className="mt-10">
              <h3 className="font-display text-3xl font-bold uppercase leading-none">
                Diventa Nostro <span className="text-primary">Sponsor</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Lega il tuo marchio a una nuova realtà sportiva del territorio: maglie, campo, social ed eventi.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-primary">
                Contattaci
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
          </a> */}

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {sponsors.top.map((s) => (
              <li key={s.name} className="glass-card flex flex-col justify-between rounded-2xl border-white/10 p-5">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  <Star className="size-3" aria-hidden="true" />
                  Top Supporter
                </span>
                <div className="mt-4">
                  <SponsorMark name={s.name} logo={s.logo}/>
                  <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.tagline}</p>
                </div>
              </li>
            ))}
          </ul>
      </div>
    </section>
  )
}
