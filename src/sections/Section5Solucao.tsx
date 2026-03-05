function LightbulbIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 shrink-0 animate-pulse-subtle text-[#f97316] sm:h-10 sm:w-10"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}

export function Section5Solucao() {
  return (
    <section id="solucao" className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 flex flex-col gap-4 rounded-2xl border-2 border-[#f97316]/30 bg-[#f97316]/5 p-6 shadow-sm sm:flex-row sm:items-start sm:gap-5 sm:p-8">
          <div className="flex justify-center sm:justify-start">
            <LightbulbIcon />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-semibold leading-relaxed text-[var(--color-foreground)] sm:text-2xl">
              Mas e se você pudesse{' '}
              <span className="text-[#f97316] font-semibold">simular o caos do ao vivo?</span>{' '}
              A pressão da igreja, o
              cantor que erra, o tom que muda...?
            </h2>
          </div>
        </div>
        <h3 className="mb-6 text-center text-2xl font-extrabold text-[var(--color-foreground)]">
          Por isso criamos o Ouvido <span className="font-script text-[#f94f06]">Assembleiano</span>!
        </h3>
        <div className="mx-auto mb-8 max-w-[75%]">
          <img
            src="/images/demo-app-gif.gif"
            alt="Demonstração do app Ouvido Assembleiano por dentro"
            className="w-full"
          />
        </div>
        <p className="mb-6 text-[var(--color-foreground)]/85">
          O <span className="font-bold text-[#f94f06]">OUVIDO ASSEMBLEIANO é um app</span> com um acervo de
          áudios gravados por vozes reais, sem estúdio, sem produção,{' '}
          <span className="font-bold text-[#f94f06]">igual à irmã desafinada da sua igreja</span>.
        </p>
        <p className="mb-6 text-[var(--color-foreground)]/85">
          Sem baixo. Sem banda. Sem pistas fáceis.
        </p>
        <p className="mb-6 text-[var(--color-foreground)]/85">
          <span className="font-bold text-[#f94f06]">Seu ouvido é forçado a trabalhar de verdade</span>. E quando
          você aprende a achar o tom numa voz crua e cheia de falhas, tocar ao vivo fica fácil.
        </p>
        <p className="mb-8 text-[var(--color-foreground)]/85">
          Você não fica mais dependente de cifra. <span className="font-bold text-[#f94f06]">Seu ouvido vira a cifra</span>.
        </p>
      </div>
    </section>
  )
}
