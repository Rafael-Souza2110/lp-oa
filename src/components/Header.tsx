import { useTheme } from '../contexts/ThemeContext'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const logoSrc = theme === 'dark'
    ? '/logos/LOGO PRETA.png'
    : '/logos/LOGO BRANCA.png'

  return (
    <header className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#f97316]/5 blur-3xl" />
      <div className="container relative mx-auto flex max-w-6xl items-center justify-center px-4 pb-4 pt-8 sm:px-6 sm:pb-5 sm:pt-10">
        <a href="#" className="flex items-center justify-center">
          <img
            src={logoSrc}
            alt="Ouvido Assembleiano"
            className="h-[4.2rem] w-auto animate-pulse-subtle sm:h-[4.8rem] md:h-24"
            onError={(e) => {
              e.currentTarget.src = theme === 'dark'
                ? '/logos/LOGO BRANCA.png'
                : '/logos/LOGO PRETA.png'
              e.currentTarget.alt = 'Ouvido Assembleiano'
            }}
          />
        </a>
        <button
          type="button"
          onClick={toggleTheme}
          className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 shadow-sm transition hover:border-[#f97316]/50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 sm:right-6"
          aria-label={theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
          title={theme === 'dark' ? 'Clique para modo claro' : 'Clique para modo escuro'}
        >
          <span
            className={`flex rounded-full p-1.5 transition ${
              theme === 'light'
                ? 'bg-[#f97316] text-white'
                : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
            }`}
            aria-hidden
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
          <span
            className={`flex rounded-full p-1.5 transition ${
              theme === 'dark'
                ? 'bg-[#f97316] text-white'
                : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
            }`}
            aria-hidden
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </span>
        </button>
      </div>
    </header>
  )
}
