import { Championship } from '@/components/championship'
import { CrestWatermark } from '@/components/crest-watermark'
import { Hero } from '@/components/hero'
import { NextMatch } from '@/components/next-match'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Sponsors } from '@/components/sponsors'
import { Squad } from '@/components/squad'

export default function Page() {
  return (
    <>
      <CrestWatermark />
      <SiteHeader />
      <main>
        <Hero />
        <NextMatch />
        <Championship />
        <Squad />
        <Sponsors />
      </main>
      <SiteFooter />
    </>
  )
}
