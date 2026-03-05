import { DepoimentosCarousel } from '../components/DepoimentosCarousel'

const depoimentosImages = [
  '/images/depoimento1-oa.png',
  '/images/depoimento2-oa.png',
  '/images/depoimento3-oa.png',
  '/images/depoimento4-oa.png',
  '/images/depoimento5-oa.png',
  '/images/depoimento6-oa.png',
  '/images/depoimento7-oa.png',
  '/images/depoimento8-oa.png',
  '/images/depoimento9-oa.png',
  '/images/depoimento10-oa.png',
  '/images/depoimento11-oa.png',
  '/images/depoimento12-oa.png',
]

export function Section9Depoimentos() {
  return (
    <section className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-2xl font-extrabold text-[var(--color-foreground)] sm:text-3xl">
          O que os músicos que já usam o OUVIDO{' '}
          <span className="font-script text-[#f94f06]">Assembleiano</span> estão falando?
        </h2>
        <DepoimentosCarousel images={depoimentosImages} autoSlideDuration={15000} />
      </div>
    </section>
  )
}
