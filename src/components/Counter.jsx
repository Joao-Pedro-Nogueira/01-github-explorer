import { useState } from "react"

export function Counter() {

  const [counting, setCounting] = useState(0)
  function increment() {
    setCounting(counting + 1)
  }

  return (
    <div>
      <h2>{counting}</h2>
      <button type="button" onClick={increment}>
        Increment one more
      </button>
    </div>
  )
}