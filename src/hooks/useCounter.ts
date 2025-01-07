import { useState, useEffect } from "react"

export function useCounter(delay = 1000) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1)
    }, delay)
    return () => clearInterval(id)
  }, [])
  return count
}
