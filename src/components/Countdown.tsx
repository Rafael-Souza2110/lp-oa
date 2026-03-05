import { config } from '../config'

export function Countdown() {
  const { days, hours, minutes } = config.countdown

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      <div className="flex min-w-[70px] flex-col items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3">
        <span className="text-2xl font-extrabold text-[#f97316] sm:text-3xl">{days}</span>
        <span className="text-xs font-medium text-[var(--color-muted)]">dias</span>
      </div>
      <div className="flex min-w-[70px] flex-col items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3">
        <span className="text-2xl font-extrabold text-[#f97316] sm:text-3xl">{hours}</span>
        <span className="text-xs font-medium text-[var(--color-muted)]">horas</span>
      </div>
      <div className="flex min-w-[70px] flex-col items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3">
        <span className="text-2xl font-extrabold text-[#f97316] sm:text-3xl">{minutes}</span>
        <span className="text-xs font-medium text-[var(--color-muted)]">min</span>
      </div>
    </div>
  )
}
