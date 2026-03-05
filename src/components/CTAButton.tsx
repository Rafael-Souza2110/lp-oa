import { config } from '../config'

interface CTAButtonProps {
  children: React.ReactNode
  className?: string
}

export function CTAButton({ children, className = '' }: CTAButtonProps) {
  return (
    <a
      href={config.checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#f97316] to-[#ea580c] px-8 py-4 font-bold text-white shadow-lg transition hover:opacity-90 hover:shadow-xl ${className}`}
    >
      {children}
    </a>
  )
}
