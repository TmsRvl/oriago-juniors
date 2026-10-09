import Image from 'next/image'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { contacts, navLinks } from '@/lib/club-data'
import { prefixPath } from '@/lib/utils-path'

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/oriagojuniors/', icon: InstagramIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/OriagoJuniors/', icon: FacebookIcon },
]

export function SiteFooter() {
  return (
    <footer id="contatti" aria-labelledby="contatti-title" className="border-t border-primary/30 bg-black/60 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src={prefixPath("/images/logo-oriago.png")} alt="" width={48} height={58} className="h-14 w-auto mix-blend-screen" />
            <p className="font-display text-2xl font-bold uppercase leading-none">
              Oriago <span className="text-primary">Juniors</span>
            </p>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Squadra di calcio amatoriale fondata a Oriago di Mira. Est. 2026 – Campionato CSI Venezia.
          </p>
          {/* <ul className="mt-6 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} Oriago Juniors`}
                  className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="size-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul> */}
        </div>

        <div>
          <h2 id="contatti-title" className="font-display text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Contatti Societari
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={`mailto:${contacts.email}`} className="flex items-center gap-3 text-white/80 hover:text-primary">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {contacts.email}
              </a>
            </li>
            {/* NUMERO DI TELEFONO */}
            {/* <li>
              <a href={contacts.phoneHref} className="flex items-center gap-3 text-white/80 hover:text-primary">
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {contacts.phone}
              </a>
            </li> */}
          </ul>
          <ul className="mt-8 flex pl-8 gap-6">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} Oriago Juniors`}
                  className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="size-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-primary">Impianto di Allenamento</h2>
          <ul className="mt-5 space-y-4 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {contacts.training}
            </li>
            {/* ORARI ALLENAMENTI */}
            {/* <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {contacts.trainingTimes}
            </li> */}
          </ul>
        </div>

        <nav aria-label="Link rapidi">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-primary">Esplora</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/70 hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs uppercase tracking-wider text-white/50 sm:flex-row md:px-6">
          <p>&copy; Oriago Juniors - CSI Venezia</p>
        </div>
      </div>
    </footer>
  )
}
