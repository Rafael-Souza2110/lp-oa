import { Carousel } from '../components/Carousel'

// Ordem do mais forte para o mais fraco (famoso6 é só emoji, fica por último)
const famosos = [
  { src: '/images/famoso1.webp', alt: 'Comentários de @filipemartinskeys e @ozielzinho no Instagram do Ouvido Assembleiano' },
  { src: '/images/famoso8.webp', alt: 'Comentário de @brunodejesus14 no Instagram do Ouvido Assembleiano' },
  { src: '/images/famoso3.webp', alt: 'Comentário de @thivitorio no Instagram do Ouvido Assembleiano' },
  { src: '/images/famoso2.webp', alt: 'Comentário de @raphadantop no Instagram do Ouvido Assembleiano' },
  { src: '/images/famoso4.webp', alt: 'Comentário de @racine_neto_reserva no Instagram do Ouvido Assembleiano' },
  { src: '/images/famoso5.webp', alt: 'Comentário de @marvvila no Instagram do Ouvido Assembleiano' },
  { src: '/images/famoso7.webp', alt: 'Comentário de @kamillabergs no Instagram do Ouvido Assembleiano' },
  { src: '/images/famoso6.webp', alt: 'Comentário de @mrpingobrasil no Instagram do Ouvido Assembleiano' },
]

export function Section6Famosos() {
  return (
    <section className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-5xl">
        <p className="mb-4 text-center text-sm font-bold uppercase tracking-wide text-[#f94f06]">
          Não é só a gente que tá dizendo
        </p>
        <h2 className="mx-auto mb-3 max-w-3xl text-center text-2xl font-extrabold leading-tight text-[var(--color-foreground)] sm:text-3xl">
          “<span className="text-[#f94f06]">Assembleia</span> é a maior faculdade de percepção musical do
          mundo!”
        </h2>
        <p className="mb-6 text-center font-semibold text-[var(--color-muted)]">— @ozielzinho</p>
        <p className="mx-auto mb-10 max-w-2xl text-center text-[var(--color-foreground)]/85">
          Quando o Ouvido <span className="font-script text-[#f94f06]">Assembleiano</span> apareceu no feed,
          até quem é referência na música gospel parou pra comentar.
        </p>
        <Carousel
          items={famosos}
          renderSlide={(item) => (
            <div className="flex justify-center">
              <img src={item.src} alt={item.alt} width={720} height={1280} className="h-auto w-[75%]" loading="lazy" />
            </div>
          )}
          desktopContent={
            <div className="hidden flex-wrap justify-center gap-y-8 md:flex">
              {famosos.map((item) => (
                <div key={item.src} className="flex basis-1/2 justify-center lg:basis-1/3">
                  <img src={item.src} alt={item.alt} width={720} height={1280} className="h-auto w-[85%]" loading="lazy" />
                </div>
              ))}
            </div>
          }
          autoSlideDuration={8000}
          ariaLabelPrefix="Ir para comentário"
        />
      </div>
    </section>
  )
}
