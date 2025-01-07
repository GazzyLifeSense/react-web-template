import { useState, useEffect } from "react"

export function useDelayedValue(
  value: { x: number; y: number },
  delay: number
) {
  const [delayedValue, setDelayedValue] = useState(value)

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value)
    }, delay)
  }, [value, delay])

  return delayedValue
}
