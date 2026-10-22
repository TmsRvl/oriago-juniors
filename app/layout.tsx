
// import type { Metadata, Viewport } from 'next'
// import { Inter, Oswald } from 'next/font/google'
// import './globals.css'
// import { prefixPath } from '@/lib/utils-path'

// const inter = Inter({ 
//   subsets: ['latin'], 
//   variable: '--font-inter',
//   display: 'swap',
// })

// const oswald = Oswald({ 
//   subsets: ['latin'], 
//   variable: '--font-oswald', 
//   weight: ['500', '600', '700'],
//   display: 'swap',
// })

// export const metadata: Metadata = {
//   title: 'Oriago Juniors',
//   description:
//     'Sito ufficiale degli Oriago Juniors, squadra di calcio amatoriale di Oriago al debutto nel Campionato CSI Venezia. Prossima gara, rosa, calendario e sponsor.',
//   generator: 'v0.app',
//   icons: {
//     icon: prefixPath('/images/tigre2.png'),
//     apple: prefixPath('/images/tigre2.png'),
//   },
// }

// export const viewport: Viewport = {
//   colorScheme: 'dark',
//   themeColor: '#0B0B0E',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="it" className={`${inter.variable} ${oswald.variable}`}>
//       <body className="antialiased">
//         {children}
//       </body>
//     </html>
//   )
// }


import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { prefixPath } from '@/lib/utils-path'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({ 
  subsets: ['latin'], 
  variable: '--font-oswald', 
  weight: ['500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  // Dominio base del sito (sostituisci se usi www o dominio provvisorio)
  metadataBase: new URL('https://oriagojuniors.it'),

  // Titolo della pagina ottimizzato per Google (max ~60 caratteri)
  title: {
    default: 'Oriago Juniors | Calcio Amatoriale CSI Venezia',
    template: '%s | Oriago Juniors',
  },

  // Descrizione visualizzata sotto al link nei risultati di Google
  description:
    'Sito ufficiale degli Oriago Juniors, squadra di calcio amatoriale a 11 di Oriago di Mira al debutto nel Campionato e Coppa CSI Venezia. Calendario gare, rosa giocatori, risultati e sponsor.',

  // Parole chiave di ricerca
  keywords: [
    'Oriago Juniors',
    'Oriago Juniors Calcio',
    'CSI Venezia',
    'Campionato CSI Venezia',
    'Calcio Amatoriale Oriago',
    'Calcio Mira',
    'Calcio Venezia amatori',
    'Oriago Jrs',
  ],

  authors: [{ name: 'Oriago Juniors' }],
  creator: 'Oriago Juniors',
  publisher: 'Oriago Juniors',

  // Istruzioni per i bot di Google (scansiona e indicizza tutto)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Anteprima avanzata per condivisione link su WhatsApp, Facebook, Telegram
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://oriagojuniors.it',
    siteName: 'Oriago Juniors',
    title: 'Oriago Juniors',
    description:
      'Segui il cammino degli Oriago Juniors nel Campionato CSI Venezia: calendario, risultati, rosa e prossime partite.',
    images: [
      {
        url: prefixPath('/images/tigre2.png'),
        width: 800,
        height: 800,
        alt: 'Logo Stemma Oriago Juniors',
      },
    ],
  },

  // Icone e favicon
  icons: {
    icon: prefixPath('/images/tigre2.png'),
    shortcut: prefixPath('/images/tigre2.png'),
    apple: prefixPath('/images/tigre2.png'),
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B0B0E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${oswald.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}