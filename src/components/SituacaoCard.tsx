interface SituacaoCardProps {
  texto: string
  icon: React.ReactNode
}

export function SituacaoCard({ texto, icon }: SituacaoCardProps) {
  return (
    <blockquote className="group flex max-w-full shrink-0 flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] border-l-4 border-l-[#f97316] bg-[var(--color-background)]/80 p-6 shadow-sm transition active:scale-[0.99]">
      <span className="mb-4 flex shrink-0 justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316] transition group-hover:bg-[#f97316]/20">
          {icon}
        </span>
      </span>
      <div className="min-w-0 flex-1 overflow-hidden">
        <p className="break-words text-base leading-relaxed text-[var(--color-foreground)] sm:text-lg">
          {texto}
        </p>
      </div>
    </blockquote>
  )
}
