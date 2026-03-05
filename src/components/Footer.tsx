import { CTAButton } from './CTAButton'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-4 py-12 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <CTAButton scrollTo="oferta" ariaLabel="Ir para oferta e garantir acesso">
            Garantir meu acesso ao Ouvido Assembleiano
          </CTAButton>
        </div>
        <p className="text-center text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} Ouvido Assembleiano. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
