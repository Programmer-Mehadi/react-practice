import { useEffect, useRef, useState } from "react"

const UseRef = () => {
  // set data
  const [data, setData] = useState(0)
  // set count ref
  const count = useRef(0)
  useEffect(() => {
    console.log("render inside useEffect")
    count.current = count.current + 1
  }, [data])
  const inputRef = useRef<HTMLInputElement>(null)
  // start rendering
  return (
    <div>
      <div>
        <div>
          <p>
            <b>Count: </b>
            {count.current}
          </p>
          <button
            onClick={() => {
              setData(data + 1)
            }}
          >
            INCREMENT COUNT
          </button>
        </div>
      </div>

      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
    </div>
  )
}

export default UseRef
