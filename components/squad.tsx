'use client'

import { useState } from 'react'
import { User } from 'lucide-react'
import { coaches, players, roleFilters, type Role } from '@/lib/club-data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { prefixPath } from '@/lib/utils-path'

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
            Le Nostre <span className="text-primary">Tigri</span>
              {/* La Nostra <span className="text-primary">Squadra</span> */}
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
            <li key={player.name} className="flex">
              <article className="glass-card group relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.06] to-black transition-transform duration-300 hover:-translate-y-1 hover:border-primary/70">
                
                <span
                  className="absolute left-3 top-2 font-display text-5xl font-bold leading-none text-gradient-orange opacity-90 sm:text-6xl md:text-7xl"
                  aria-hidden="true"
                >
                  {roleShort[player.role]}
                </span>

                {/* <div className="absolute inset-0 flex items-center justify-center pt-8" aria-hidden="true">
                  <User className="size-36 text-white/25 transition-colors group-hover:text-primary/50 sm:size-40 md:size-48" strokeWidth={1} />
                </div> */}

                <div className="absolute inset-0 flex items-end justify-center overflow-hidden" aria-hidden="true">
                  {player.avatar ? (
                    <Image
                      src={prefixPath(player.avatar)}
                      alt={player.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center pt-8">
                      <User className="size-36 text-white/25 transition-colors group-hover:text-primary/50 sm:size-40 md:size-48" strokeWidth={1} />
                    </div>
                  )}
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent" aria-hidden="true" />

                <div className="relative mt-auto w-full p-3 md:p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary md:text-[11px]">
                    {player.role}
                  </p>
                  <h3 className="mt-0.5 font-display text-xs font-semibold uppercase leading-tight sm:text-sm md:text-lg">
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
              <li key={coach} className="flex">
                <article className="glass-card group relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-2xl border-primary/40 bg-gradient-to-b from-primary/15 to-black transition-transform duration-300 hover:-translate-y-1 hover:border-primary/70">
                  <span
                    className="absolute left-3 top-2 font-display text-4xl font-bold leading-none text-gradient-orange opacity-90 sm:text-5xl md:text-6xl"
                    aria-hidden="true"
                  >
                    COACH
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center pt-8" aria-hidden="true">
                    <User className="size-36 text-white/25 transition-colors group-hover:text-primary/50 sm:size-40 md:size-48" strokeWidth={1} />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent" aria-hidden="true" />
                  <div className="relative mt-auto w-full p-3 md:p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary md:text-[11px]">
                      Allenatore
                    </p>
                    <h4 className="mt-0.5 font-display text-xs font-semibold uppercase leading-tight sm:text-sm md:text-lg">
                      {coach}
                    </h4>
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
