import { config } from '../config'
import { CTAButton } from '../components/CTAButton'
import { YouTubeEmbed } from '../components/YouTubeEmbed'

export function Section1Headline() {
  return (
    <section className="relative overflow-hidden px-4 pt-4 pb-16 sm:px-6 sm:pt-6 sm:pb-24">
      <div className="absolute inset-0 -z-10 bg-[#f97316]/5 blur-3xl" />
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-xl font-extrabold leading-tight text-[var(--color-foreground)] sm:text-2xl md:text-3xl">
          O único app que treina seu ouvido com vozes reais da igreja, desafinadas, sem banda, sob
          pressão e igualzinho ao{' '}
          <span className="text-[#f94f06]"> ao vivo de verdade</span>
        </h1>
        <p className="mb-8 text-sm text-[var(--color-foreground)]/80 sm:text-base">
          Em 7 dias de treino, você para de travar, para de depender de cifra e começa a pegar o tom
          antes de todo mundo. Isso tudo simulando o caos do ao vivo!
        </p>
        <div className="mx-auto mb-8 max-w-3xl">
          <YouTubeEmbed
            videoId={config.videos.hero}
            title="Ouvido Assembleiano - Apresentação"
          />
        </div>
        <CTAButton>Treinar meu ouvido agora mesmo!</CTAButton>
        <a
          href="#situacoes"
          className="mt-8 flex justify-center text-[var(--color-muted)] transition hover:text-[#f97316]"
          aria-label="Rolar para ver mais"
        >
          <svg
            className="h-8 w-8 animate-scroll-hint"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
