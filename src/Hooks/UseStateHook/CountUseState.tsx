import { useState } from "react"

const CountUseState = () => {
  // declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default CountUseState
