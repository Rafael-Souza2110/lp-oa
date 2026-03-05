const alternativas = [
  { item: 'Professor Particular?', preco: 'No mínimo R$150,00 por mês' },
  { item: 'Cursos?', preco: 'No mínimo R$100,00' },
  { item: 'Tentar treinar o ouvido sozinho?', preco: 'Te custa tempo e no final você só se ilude achando que progrediu' },
  { item: 'Se entupir de teoria no youtube?', preco: 'Custa sua saúde mental' },
]

export function Section10ObjecaoPreco() {
  return (
    <section className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-2xl font-extrabold text-[var(--color-foreground)] sm:text-3xl">
          Preços aí fora X <span className="text-[#f94f06]">Ouvido</span>{' '}
          <span className="font-script text-[#f94f06]">Assembleiano</span>
        </h2>
        <div className="space-y-4">
          {alternativas.map((alt, i) => (
            <div
              key={i}
              className="flex flex-col justify-between gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 sm:flex-row sm:items-center"
            >
              <span className="font-medium text-[var(--color-foreground)]">{alt.item}</span>
              <span
                className={
                  alt.preco.includes('R$') ? 'font-medium text-red-600 dark:text-red-400' : 'text-[var(--color-muted)]'
                }
              >
                {alt.preco}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-lg font-semibold text-[var(--color-foreground)]">
          E o <span className="text-[#f94f06]">OUVIDO ASSEMBLEIANO</span> quanto custa? kk veja a bizarrice logo abaixo
        </p>
      </div>
    </section>
  )
}
