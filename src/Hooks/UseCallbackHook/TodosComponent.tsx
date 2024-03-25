/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { memo, useState } from "react"

const TodosComponent = ({ todos, addTodo }: { todos: any; addTodo: any }) => {
  console.log("render todos", todos)
  const [value, setValue] = useState("")

  return (
    <div>
      <h1>{todos.length}</h1>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            addTodo({
              id: todos.length ? todos[todos.length - 1].id + 1 : 1,
              text: value,
            })
            setValue("")
          }}
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default memo(TodosComponent)
