import { useEffect, useState } from "react"

const UseEffectBasic = () => {
  // declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  }, [count])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default UseEffectBasic
