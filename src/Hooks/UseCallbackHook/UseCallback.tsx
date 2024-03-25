/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react"
import TodosComponent from "./TodosComponent"

const UseCallback = () => {
  const [count, setCount] = useState<any>(0)
  const [todos, setTodos] = useState<any>([])
  const addTodo = useCallback(
    (data: any) => {
      setTodos([...todos, data])
    },
    [todos]
  )
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>INCREMENT COUNT</button>
      <TodosComponent todos={todos} addTodo={addTodo} />
    </div>
  )
}

export default UseCallback
