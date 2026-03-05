import { config } from '../config'
import { YouTubeEmbed } from '../components/YouTubeEmbed'
import { CTAButton } from '../components/CTAButton'

export function Section5Solucao() {
  return (
    <section className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-6 text-center text-2xl font-extrabold text-[var(--color-foreground)] sm:text-3xl">
          Mas e se você pudesse simular o caos do ao vivo: a pressão da igreja, o cantor que erra, o
          tom que muda...?
        </h2>
        <h3 className="mb-6 text-center text-2xl font-extrabold text-[var(--color-foreground)]">
          Por isso criamos o Ouvido <span className="font-script text-[#f94f06]">Assembleiano</span>!
        </h3>
        <p className="mb-6 text-[var(--color-muted)]">
          O <span className="text-[#f94f06]">OUVIDO ASSEMBLEIANO é um app</span> com um acervo de
          áudios gravados por vozes reais, sem estúdio, sem produção,{' '}
          <span className="text-[#f94f06]">igual à irmã desafinada da sua igreja</span>.
        </p>
        <p className="mb-6 text-[var(--color-muted)]">
          Sem baixo. Sem banda. Sem pistas fáceis.
        </p>
        <p className="mb-6 text-[var(--color-muted)]">
          <span className="text-[#f94f06]">Seu ouvido é forçado a trabalhar de verdade</span>. E quando
          você aprende a achar o tom numa voz crua e cheia de falhas, tocar ao vivo fica fácil.
        </p>
        <p className="mb-8 text-[var(--color-muted)]">
          Você não fica mais dependente de cifra. <span className="text-[#f94f06]">Seu ouvido vira a cifra</span>.
        </p>
        <div className="mx-auto mb-8 max-w-[75%]">
          <img
            src="/images/demo-app-gif.gif"
            alt="Demonstração do app Ouvido Assembleiano por dentro"
            className="w-full"
          />
        </div>
        {config.videos.apresentacao && (
          <YouTubeEmbed
            videoId={config.videos.apresentacao}
            title="Ouvido Assembleiano - Apresentação do app"
            className="mb-8"
          />
        )}
        <div className="text-center">
          <CTAButton>Quero começar a treinar</CTAButton>
        </div>
      </div>
    </section>
  )
}
