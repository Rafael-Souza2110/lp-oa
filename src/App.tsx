import { lazy, Suspense } from 'react'
import { AnimateOnScroll } from './components/AnimateOnScroll'
import { Header } from './components/Header'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import { Section1Headline } from './sections/Section1Headline'
import { Footer } from './components/Footer'

const Section2Dor = lazy(() => import('./sections/Section2Dor').then((m) => ({ default: m.Section2Dor })))
const Section3Reframe = lazy(() => import('./sections/Section3Reframe').then((m) => ({ default: m.Section3Reframe })))
const Section4Agitacao = lazy(() => import('./sections/Section4Agitacao').then((m) => ({ default: m.Section4Agitacao })))
const Section5Solucao = lazy(() => import('./sections/Section5Solucao').then((m) => ({ default: m.Section5Solucao })))
const Section7Beneficios = lazy(() => import('./sections/Section7Beneficios').then((m) => ({ default: m.Section7Beneficios })))
const Section8Publico = lazy(() => import('./sections/Section8Publico').then((m) => ({ default: m.Section8Publico })))
const Section9Depoimentos = lazy(() => import('./sections/Section9Depoimentos').then((m) => ({ default: m.Section9Depoimentos })))
const Section10ObjecaoPreco = lazy(() => import('./sections/Section10ObjecaoPreco').then((m) => ({ default: m.Section10ObjecaoPreco })))
const Section11Oferta = lazy(() => import('./sections/Section11Oferta').then((m) => ({ default: m.Section11Oferta })))
const Section13FAQ = lazy(() => import('./sections/Section13FAQ').then((m) => ({ default: m.Section13FAQ })))

function SectionPlaceholder() {
  return <div className="min-h-[200px]" aria-hidden />
}

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <div className="hero-area">
        <Header />
        <div className="section-block section-block--base">
          <Section1Headline />
        </div>
      </div>
      <main>
        <div className="section-block section-block--alt">
          <Suspense fallback={<SectionPlaceholder />}>
            <AnimateOnScroll>
              <Section2Dor />
            </AnimateOnScroll>
          </Suspense>
        </div>
        <div className="section-block section-block--base">
          <Suspense fallback={<SectionPlaceholder />}>
            <AnimateOnScroll delay={100}>
              <Section3Reframe />
            </AnimateOnScroll>
          </Suspense>
        </div>
        <div className="section-block section-block--alt">
          <Suspense fallback={<SectionPlaceholder />}>
            <AnimateOnScroll delay={100}>
              <Section4Agitacao />
            </AnimateOnScroll>
          </Suspense>
        </div>
        <div className="section-block section-block--base">
          <Suspense fallback={<SectionPlaceholder />}>
            <AnimateOnScroll delay={100}>
              <Section5Solucao />
            </AnimateOnScroll>
          </Suspense>
        </div>
        <div className="section-block section-block--alt">
          <Suspense fallback={<SectionPlaceholder />}>
            <AnimateOnScroll delay={100}>
              <Section7Beneficios />
            </AnimateOnScroll>
          </Suspense>
        </div>
        <div className="section-block section-block--base">
          <Suspense fallback={<SectionPlaceholder />}>
            <AnimateOnScroll delay={100}>
              <Section8Publico />
            </AnimateOnScroll>
          </Suspense>
        </div>
        <div className="section-block section-block--alt">
          <Suspense fallback={<SectionPlaceholder />}>
            <AnimateOnScroll delay={100}>
              <Section9Depoimentos />
            </AnimateOnScroll>
          </Suspense>
        </div>
        <div className="section-block section-block--base">
          <Suspense fallback={<SectionPlaceholder />}>
            <AnimateOnScroll delay={100}>
              <Section10ObjecaoPreco />
            </AnimateOnScroll>
          </Suspense>
        </div>
        <div className="section-block section-block--alt">
          <Suspense fallback={<SectionPlaceholder />}>
            <AnimateOnScroll delay={100}>
              <Section11Oferta />
            </AnimateOnScroll>
          </Suspense>
        </div>
        <div className="section-block section-block--base">
          <Suspense fallback={<SectionPlaceholder />}>
            <AnimateOnScroll delay={100}>
              <Section13FAQ />
            </AnimateOnScroll>
          </Suspense>
        </div>
      </main>
      <div className="section-block section-block--alt">
        <Footer />
      </div>
    </div>
  )
}

export default App
