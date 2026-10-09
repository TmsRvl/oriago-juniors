'use client'

import { useEffect, useState } from 'react'

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now())
  return {
    done: diff === 0,
    parts: [
      { label: 'Giorni', value: Math.floor(diff / 86_400_000) },
      { label: 'Ore', value: Math.floor((diff / 3_600_000) % 24) },
      { label: 'Minuti', value: Math.floor((diff / 60_000) % 60) },
      { label: 'Secondi', value: Math.floor((diff / 1000) % 60) },
    ],
  }
}

export function Countdown({ target }: { target: string }) {
  const targetMs = new Date(target).getTime()
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining> | null>(null)

  useEffect(() => {
    setRemaining(getRemaining(targetMs))
    const id = setInterval(() => setRemaining(getRemaining(targetMs)), 1000)
    return () => clearInterval(id)
  }, [targetMs])

  if (remaining?.done) {
    return (
      <p className="text-center font-display text-2xl font-bold uppercase text-primary">Si gioca! Forza Oriago!</p>
    )
  }

  const parts = remaining?.parts ?? getRemaining(targetMs).parts.map((p) => ({ ...p, value: 0 }))

  return (
    <div className="mx-auto grid max-w-xl grid-cols-4 gap-2 md:gap-4" role="timer" aria-live="off">
      {parts.map((part) => (
        <div key={part.label} className="rounded-xl border border-white/10 bg-black/40 py-3 text-center md:py-4">
          <span className="block font-display text-3xl font-bold tabular-nums text-white md:text-5xl">
            {remaining ? String(part.value).padStart(2, '0') : '--'}
          </span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:text-xs">
            {part.label}
          </span>
        </div>
      ))}
    </div>
  )
}
