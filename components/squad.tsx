'use client'

import { useState } from 'react'
import { User } from 'lucide-react'
import { coaches, players, roleFilters, type Role } from '@/lib/club-data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Filter = (typeof roleFilters)[number]['value']

const roleShort: Record<Role, string> = {
  Portiere: 'POR',
  Difensore: 'DIF',
  Centrocampista: 'CEN',
  Attaccante: 'ATT',
}

export function Squad() {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = players.filter((p) => filter === 'all' || p.role === filter)

  return (
    <section id="rosa" aria-labelledby="rosa-title" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="rosa-title"
          eyebrow="Rosa Giocatori"
          title={
            <>
              La Nostra <span className="text-primary">Squadra</span>
            </>
          }
          description="I ragazzi che hanno scelto di scrivere la prima pagina della storia degli Oriago Juniors."
        />

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtra per ruolo">
          {roleFilters.map((role) => (
            <button
              key={role.value}
              type="button"
              aria-pressed={filter === role.value}
              onClick={() => setFilter(role.value)}
              className={cn(
                'rounded-full border px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors',
                filter === role.value
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-white/15 text-white/70 hover:border-primary/60 hover:text-white',
              )}
            >
              {role.label}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((player) => (
            <li key={player.name}>
              <article className="glass-card group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:border-primary/70">
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-white/[0.06] to-black">
                  <span
                    className="absolute left-3 top-2 font-display text-6xl font-bold leading-none text-gradient-orange opacity-90 md:text-7xl"
                    aria-hidden="true"
                  >
                    {roleShort[player.role]}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex justify-center" aria-hidden="true">
                    <User className="size-40 translate-y-6 text-white/25 transition-colors group-hover:text-primary/50 md:size-48" strokeWidth={1} />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent" aria-hidden="true" />
                </div>
                <div className="relative -mt-16 px-4 pb-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">{player.role}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold uppercase leading-tight md:text-xl">
                    {player.name}
                  </h3>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold uppercase tracking-wide md:text-3xl">
            Staff <span className="text-primary">Tecnico</span>
          </h3>
          <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {coaches.map((coach) => (
              <li key={coach}>
                <article className="glass-card group relative overflow-hidden rounded-2xl border-primary/40 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/70">
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-primary/15 to-black">
                    <span
                      className="absolute left-3 top-2 font-display text-5xl font-bold leading-none text-gradient-orange opacity-90 md:text-6xl"
                      aria-hidden="true"
                    >
                      COACH
                    </span>
                    <div className="absolute inset-x-0 bottom-0 flex justify-center" aria-hidden="true">
                      <User className="size-40 translate-y-6 text-white/25 transition-colors group-hover:text-primary/50 md:size-48" strokeWidth={1} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent" aria-hidden="true" />
                  </div>
                  <div className="relative -mt-16 px-4 pb-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Allenatore</p>
                    <h4 className="mt-1 font-display text-lg font-semibold uppercase leading-tight md:text-xl">{coach}</h4>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
