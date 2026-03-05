import { AnimateOnScroll } from './components/AnimateOnScroll'
import { Header } from './components/Header'
import { Section1Headline } from './sections/Section1Headline'
import { Section2Dor } from './sections/Section2Dor'
import { Section3Reframe } from './sections/Section3Reframe'
import { Section4Agitacao } from './sections/Section4Agitacao'
import { Section5Solucao } from './sections/Section5Solucao'
import { Section7Beneficios } from './sections/Section7Beneficios'
import { Section8Publico } from './sections/Section8Publico'
import { Section9Depoimentos } from './sections/Section9Depoimentos'
import { Section10ObjecaoPreco } from './sections/Section10ObjecaoPreco'
import { Section11Oferta } from './sections/Section11Oferta'
import { Section13FAQ } from './sections/Section13FAQ'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <div className="hero-area">
        <Header />
        <div className="section-block section-block--base">
          <Section1Headline />
        </div>
      </div>
      <main>
        <div className="section-block section-block--alt">
          <AnimateOnScroll>
            <Section2Dor />
          </AnimateOnScroll>
        </div>
        <div className="section-block section-block--base">
          <AnimateOnScroll delay={100}>
            <Section3Reframe />
          </AnimateOnScroll>
        </div>
        <div className="section-block section-block--alt">
          <AnimateOnScroll delay={100}>
            <Section4Agitacao />
          </AnimateOnScroll>
        </div>
        <div className="section-block section-block--base">
          <AnimateOnScroll delay={100}>
            <Section5Solucao />
          </AnimateOnScroll>
        </div>
        <div className="section-block section-block--alt">
          <AnimateOnScroll delay={100}>
            <Section7Beneficios />
          </AnimateOnScroll>
        </div>
        <div className="section-block section-block--base">
          <AnimateOnScroll delay={100}>
            <Section8Publico />
          </AnimateOnScroll>
        </div>
        <div className="section-block section-block--alt">
          <AnimateOnScroll delay={100}>
            <Section9Depoimentos />
          </AnimateOnScroll>
        </div>
        <div className="section-block section-block--base">
          <AnimateOnScroll delay={100}>
            <Section10ObjecaoPreco />
          </AnimateOnScroll>
        </div>
        <div className="section-block section-block--alt">
          <AnimateOnScroll delay={100}>
            <Section11Oferta />
          </AnimateOnScroll>
        </div>
        <div className="section-block section-block--base">
          <AnimateOnScroll delay={100}>
            <Section13FAQ />
          </AnimateOnScroll>
        </div>
      </main>
      <div className="section-block section-block--alt">
        <Footer />
      </div>
    </div>
  )
}

export default App
