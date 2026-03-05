const treinoFantasia = [
  'Você treina com músicas perfeitas do youtube como "Bondade de Deus", "Santo Pra Sempre" e qualquer outra música que está em alta',
  'Nessas músicas a banda toca em perfeita harmonia, cada instrumento está no seu devido lugar te dando várias pistas do tom e do próximo acorde. É tipo um "colchão" harmônico seguro.',
  'O tom da música é estável e cravado do primeiro ao último segundo',
  'A qualidade do áudio é impecável, facilitando a identificação de cada nota e acorde',
]

const realidadeAoVivo = [
  'Quase sempre você está sozinho com o cantor, sem o apoio de uma banda.',
  'Quando tem banda eles esperam você achar o tom',
  'O áudio do microfone do cantor é ruim',
  'O tom "flutua": a cantora começa em Sol e termina na lua',
  'Enquanto você procura o tom todos te observam com olhar de desprezo porque tá demorando demais',
]

export function Section4Agitacao() {
  return (
    <section className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-2xl font-extrabold text-[var(--color-foreground)] sm:text-3xl">
          Você treina em condições perfeitas. Mas toca em{' '}
          <span className="text-red-600 dark:text-red-500">condições caóticas.</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-red-600 bg-white p-6 shadow-sm dark:border-red-500 dark:bg-gray-900">
            <h3 className="mb-4 text-xl font-bold text-red-600 dark:text-red-500">
              Treino Fantasia
            </h3>
            <ul className="mb-6 space-y-3">
              {treinoFantasia.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-800 dark:text-gray-200">
                  <span className="text-red-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-red-50 p-4 dark:bg-red-950/30">
              <p className="font-semibold text-red-600 dark:text-red-500">
                O resultado: Uma falsa sensação de progresso
              </p>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-[#f97316] bg-[#f97316]/5 p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-[var(--color-foreground)]">
              A Realidade do <span className="font-script px-[6px] text-[#f94f06]">ao vivo</span>
            </h3>
            <ul className="mb-6 space-y-3">
              {realidadeAoVivo.map((item, i) => (
                <li key={i} className="flex gap-2 text-[var(--color-foreground)]">
                  <span className="text-[#f97316]">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-[#f97316]/10 p-4">
              <p className="font-semibold text-[#f97316]">
                O resultado: Pânico, vergonha e a sensação de que todo o seu estudo não serviu para
                nada no momento que mais importava.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
