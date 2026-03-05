import { CTAButton } from '../components/CTAButton'

const beneficios = [
  'Você começa a pegar o tom em segundos.',
  'Não trava mais quando o cantor muda o tom no meio do hino.',
  'Aprende a construir os acordes na hora, sem depender de cifra.',
  'Não treme mais as pernas ao tentar tirar músicas em tons menores',
  'E o melhor: seu ouvido fica tão treinado e preparado que parece até que você nasceu com o "dom".',
]

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-white"
    >
      <path d="M6 12l4 4 8-8" />
    </svg>
  )
}

export function Section7Beneficios() {
  return (
    <section className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-3xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-[#f97316]">
          {beneficios.length} transformações
        </p>
        <h2 className="mb-6 text-center text-2xl font-extrabold text-[var(--color-foreground)] sm:text-3xl">
          O que muda depois do Ouvido <span className="font-script text-[#f94f06]">Assembleiano</span>?
        </h2>
        <p className="mb-8 text-center text-lg text-[var(--color-muted)]">
          Depois que você treina com o Ouvido <span className="font-script text-[#f94f06]">Assembleiano</span>...
          tocar ao vivo nunca mais é o mesmo.
        </p>
        <ol className="mb-10 space-y-5">
          {beneficios.map((item, i) => {
            const isLast = i === beneficios.length - 1
            return (
              <li
                key={i}
                className={`flex items-center gap-5 rounded-xl border bg-[var(--color-background)] p-5 transition-transform active:scale-[0.98] touch-manipulation ${
                  isLast
                    ? 'border-2 border-[#f97316]/50 bg-[#f97316]/5'
                    : 'border-[var(--color-border)]'
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f97316]">
                  <CheckIcon />
                </span>
                <span className={`text-[var(--color-foreground)] ${isLast ? 'font-semibold' : ''}`}>
                  {item}
                </span>
              </li>
            )
          })}
        </ol>
        <div className="text-center">
          <CTAButton>Quero essa transformação</CTAButton>
        </div>
      </div>
    </section>
  )
}
