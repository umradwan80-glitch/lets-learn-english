import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Lessons } from '@/components/lessons'
import { WhyUs } from '@/components/why-us'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Lessons />
        <WhyUs />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
