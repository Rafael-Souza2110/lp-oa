import { Countdown } from '../components/Countdown'
import { CTAButton } from '../components/CTAButton'

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1.5 h-5 w-5 sm:mb-2 sm:h-7 sm:w-7"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1.5 h-5 w-5 sm:mb-2 sm:h-7 sm:w-7"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1.5 h-5 w-5 sm:mb-2 sm:h-7 sm:w-7"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

const beneficiosOferta = [
  'Aplicativo Completo',
  'Modo Aprenda',
  'Modo Academia',
  'Modo Treino Rápido',
  'Modo QUIZ (Revisão de Assuntos)',
  'Estatísticas de Progresso',
  'Suporte Via Whatsapp',
  'Bônus 1: Comunidade de Usuários no Whatsapp',
  'Bônus 2: Acesso a atualizações futuras (Exclusivo para membros fundadores)',
]

export function Section11Oferta() {
  return (
    <section id="oferta" className="border-t border-[var(--color-border)] px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-2xl">
        <div className="rounded-2xl border-2 border-[#f97316] bg-[#f97316]/5 p-8 shadow-lg ring-2 ring-[#f97316]/20 ring-offset-2 ring-offset-[var(--color-background)]">
          <p className="mb-4 text-center font-bold text-[#f94f06]">
            Oferta de lançamento!
          </p>
          <p className="mb-6 text-center text-[var(--color-muted)]">
            Promoção se encerra em:
          </p>
          <div className="mb-8 flex justify-center">
            <Countdown />
          </div>
          <div className="mb-8 text-center">
            <span className="inline-block rounded-lg bg-red-500/20 px-3 py-1 text-sm font-bold text-red-600 dark:text-red-400">
              50%
            </span>
            <h3 className="mt-4 text-2xl font-extrabold text-[var(--color-foreground)]">
              Plano Membro Fundador
            </h3>
            <p className="text-[var(--color-muted)]">
              Valor exclusivo de lançamento!
            </p>
            <p className="mt-4 text-4xl font-extrabold text-[#f97316]">
              R$ 39,90
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              Sem letrinhas miúdas!
            </p>
          </div>
          <ul className="mb-8 space-y-3">
            {beneficiosOferta.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-[var(--color-foreground)]">
                <span className="text-green-500">✔</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mx-auto mb-6 flex w-full max-w-full flex-col items-center sm:w-fit">
            <CTAButton className="w-full sm:w-auto">
              Quero Comprar Agora!
            </CTAButton>
            <div className="mt-4 flex w-full flex-nowrap items-start justify-between gap-2 sm:gap-4">
              <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                <span className="text-[var(--color-foreground)]">
                  <ShieldIcon />
                </span>
                <span className="text-xs font-medium text-[var(--color-foreground)] sm:text-sm">Compra Segura</span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                <span className="text-[var(--color-foreground)]">
                  <LockIcon />
                </span>
                <span className="text-xs font-medium text-[var(--color-foreground)] sm:text-sm">Privacidade Protegida</span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                <span className="text-[var(--color-foreground)]">
                  <TrophyIcon />
                </span>
                <span className="text-xs font-medium text-[var(--color-foreground)] sm:text-sm">Satisfação Garantida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
