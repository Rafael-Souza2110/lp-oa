const paraVoce = [
  'Tecladista, violonista, guitarristas ou baixista',
  'Toca na igreja e já enfrentou a frustração de lidar com cantores que não têm habilidade vocal.',
  'Já toca seu instrumento mas não tem segurança para tirar músicas de ouvido e tocar ao vivo',
  'Já tentou diversos métodos e não conseguiu',
  'Já se entupiu de teoria e não saiu do lugar',
  'Quer deixar de depender das cifras e tocar com mais liberdade.',
]

const naoParaVoce = [
  'Acha que tirar música de ouvido é um "dom" que poucos têm.',
  'Prefere teoria e aulas longas em vez de prática real.',
  'Está satisfeito em depender dos outros pra achar o tom.',
  'Você prefere continuar tocando apenas com cifras e não quer desenvolver o ouvido.',
  'Prefere decorar acordes do que entender a música.',
  'Quer um milagre — e não um método que realmente funciona.',
]

export function Section8Publico() {
  return (
    <section className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-2xl font-extrabold text-[var(--color-foreground)] sm:text-3xl">
          Para quem é / Para quem não é
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-green-500/50 bg-green-500/5 p-6">
            <h3 className="mb-4 text-xl font-bold text-green-600 dark:text-green-400">
              ✓ É para você:
            </h3>
            <ul className="space-y-3">
              {paraVoce.map((item, i) => (
                <li key={i} className="flex gap-2 text-[var(--color-foreground)]">
                  <span className="text-green-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-red-500/50 bg-red-500/5 p-6">
            <h3 className="mb-4 text-xl font-bold text-red-600 dark:text-red-400">
              ✗ Não é para você que:
            </h3>
            <ul className="space-y-3">
              {naoParaVoce.map((item, i) => (
                <li key={i} className="flex gap-2 text-[var(--color-foreground)]">
                  <span className="text-red-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
