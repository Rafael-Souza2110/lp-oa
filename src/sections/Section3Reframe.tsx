const passosErrados = [
  'Passa vergonha no ao vivo e percebe que precisa melhorar',
  'Chega em casa e pesquisa "Como tocar de ouvido"',
  'Depois de se entupir de teoria você coloca músicas aleatórias pra tocar e você tenta tirar o tom e os acordes',
]

export function Section3Reframe() {
  return (
    <section className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-2xl font-extrabold text-[var(--color-foreground)] sm:text-3xl">
          Aposto que <span className="text-[#f97316]">você treina assim</span> atualmente:
        </h2>

        {/* Timeline */}
        <div className="relative mb-10">
          {/* Linha vertical */}
          <div
            className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-gradient-to-b from-[#f97316] via-[#f97316]/60 to-[#f97316]/30 sm:left-[23px]"
            aria-hidden
          />
          <ol className="space-y-0">
            {passosErrados.map((passo, i) => (
              <li key={i} className="relative flex gap-4 pb-8 last:pb-0 sm:gap-6">
                {/* Nó da timeline */}
                <div className="relative z-10 flex shrink-0 items-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f97316] bg-[var(--color-background)] text-sm font-bold text-[#f97316] shadow-sm sm:h-12 sm:w-12">
                    {i + 1}
                  </span>
                </div>
                {/* Card do passo */}
                <div className="min-w-0 flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-sm">
                  <p className="text-[var(--color-foreground)]">{passo}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="rounded-xl border border-[var(--color-border)] bg-[#f97316]/5 px-6 py-4 text-center text-lg font-semibold text-[var(--color-foreground)]">
          Tá errado? Não... Mas esse processo não tem eficiência e{' '}
          <span className="text-[#f97316]">eu te explico porque!</span>
        </p>
      </div>
    </section>
  )
}
