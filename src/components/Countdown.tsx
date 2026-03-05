import { useEffect, useRef, useState } from 'react'
import { config } from '../config'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function CountdownDigit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-w-[60px] flex-col items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 sm:min-w-[70px] sm:px-4 sm:py-3">
      <span
        key={value}
        className="inline-block text-xl font-extrabold tabular-nums text-[#f97316] animate-countdown-pulse sm:text-2xl"
      >
        {value}
      </span>
      <span className="text-xs font-medium text-[var(--color-muted)]">{label}</span>
    </div>
  )
}

export function Countdown() {
  const { hours: initHours, minutes: initMinutes, seconds: initSeconds } = config.countdown

  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: initHours,
    minutes: initMinutes,
    seconds: initSeconds,
  })
  const [isExpired, setIsExpired] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        const { hours, minutes, seconds } = prev

        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 }
        }
        if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 }
        }
        if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 0, minutes: 0, seconds: 0 }
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  useEffect(() => {
    const { hours, minutes, seconds } = timeLeft
    if (hours === 0 && minutes === 0 && seconds === 0) {
      setIsExpired(true)
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [timeLeft])

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
      <CountdownDigit value={pad(timeLeft.hours)} label="horas" />
      <CountdownDigit value={pad(timeLeft.minutes)} label="min" />
      <CountdownDigit value={pad(timeLeft.seconds)} label="seg" />
    </div>
  )
}
