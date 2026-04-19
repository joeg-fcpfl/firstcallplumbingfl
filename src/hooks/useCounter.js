import { useState, useEffect } from 'react'

export function useCounter(target, duration = 2000, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    let start = 0
    const increment = target / (duration / 16)
    let raf

    const tick = () => {
      start += increment
      if (start >= target) {
        setCount(target)
      } else {
        setCount(Math.floor(start))
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, active])

  return count
}
