'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/club-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 md:h-24 md:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Oriago Juniors – torna all'inizio">
          <img
            src="/images/logo-oriago.png"
            alt="Oriago Juniors Crest"
            width={80}
            height={80}
            className="size-16 object-contain mix-blend-screen md:size-20"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold uppercase tracking-wide md:text-xl">
              Oriago <span className="text-primary">Juniors</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Est. 2026
            </span>
          </span>
        </a>

        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white/75 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary sm:inline-flex">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
            Stagione Debutto
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navigazione mobile" className="border-t border-white/10 bg-background/95 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 font-display text-lg font-semibold uppercase tracking-wide text-white/85 last:border-0 hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
