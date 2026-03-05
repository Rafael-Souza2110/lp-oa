import { config } from '../config'

interface CTAButtonProps {
  children: React.ReactNode
  className?: string
  /** Quando informado, faz scroll suave até a seção em vez de ir ao checkout */
  scrollTo?: string
  /** Aria-label para acessibilidade (recomendado quando scrollTo) */
  ariaLabel?: string
}

const buttonClass =
  'inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#f97316] to-[#ea580c] px-8 py-4 font-bold text-white shadow-lg transition active:scale-[0.98] hover:opacity-90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2 touch-manipulation'

export function CTAButton({ children, className = '', scrollTo, ariaLabel }: CTAButtonProps) {
  if (scrollTo) {
    return (
      <a
        href={`#${scrollTo}`}
        className={`${buttonClass} ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }
  return (
    <a
      href={config.checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonClass} ${className}`}
      aria-label={ariaLabel ?? 'Ir para página de checkout'}
    >
      {children}
    </a>
  )
}
