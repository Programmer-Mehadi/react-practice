import { useEffect, useState } from "react"

const UseEffectReturn = () => {
  // declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  //? cleanup function inside useEffect will call after every render cycle(except for the first render)

  useEffect(() => {
    console.log("render inside useEffect")
    return () => {
      console.log("cleanup inside useEffect")
    }
  }, [count])

  // start rendering
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default UseEffectReturn
