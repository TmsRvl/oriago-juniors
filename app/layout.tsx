import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald', weight: ['500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Oriago Juniors',
  description:
    'Sito ufficiale degli Oriago Juniors, squadra di calcio amatoriale di Oriago al debutto nel Campionato CSI Venezia. Prossima gara, rosa, calendario e sponsor.',
  generator: 'v0.app',
  icons: {
    icon: '/images/tigre2.png',
    apple: '/images/tigre2.png',
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
