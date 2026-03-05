import { useEffect, useState } from 'react'
import { config } from '../config'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function Countdown() {
  const { hours: initHours, minutes: initMinutes, seconds: initSeconds } = config.countdown

  const [timeLeft, setTimeLeft] = useState({
    hours: initHours,
    minutes: initMinutes,
    seconds: initSeconds,
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 }
        }
        if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 }
        }
        if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 }
        }
        setIsExpired(true)
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (isExpired) {
    return (
      <div className="rounded-xl border border-red-500/50 bg-red-500/10 px-6 py-4 text-center">
        <span className="font-bold text-red-600 dark:text-red-400">
          Oferta encerrada!
        </span>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      <div className="flex min-w-[60px] flex-col items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 sm:min-w-[70px] sm:px-4 sm:py-3">
        <span className="text-xl font-extrabold tabular-nums text-[#f97316] sm:text-2xl">
          {pad(timeLeft.hours)}
        </span>
        <span className="text-xs font-medium text-[var(--color-muted)]">horas</span>
      </div>
      <div className="flex min-w-[60px] flex-col items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 sm:min-w-[70px] sm:px-4 sm:py-3">
        <span className="text-xl font-extrabold tabular-nums text-[#f97316] sm:text-2xl">
          {pad(timeLeft.minutes)}
        </span>
        <span className="text-xs font-medium text-[var(--color-muted)]">min</span>
      </div>
      <div className="flex min-w-[60px] flex-col items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 sm:min-w-[70px] sm:px-4 sm:py-3">
        <span className="text-xl font-extrabold tabular-nums text-[#f97316] sm:text-2xl">
          {pad(timeLeft.seconds)}
        </span>
        <span className="text-xs font-medium text-[var(--color-muted)]">seg</span>
      </div>
    </div>
  )
}
