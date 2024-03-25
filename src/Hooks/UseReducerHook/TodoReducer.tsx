/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer, useState } from "react"

const TodoReducer = () => {
  const initialState: any = []
  const [value, setValue] = useState("")
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length ? state[state.length - 1].id + 1 : 1,
            text: action.payload,
          },
        ]
      case "delete":
        return state.filter((item: any) => item.id !== action.payload)
      default:
        return state
    }
  }
  const [todo, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>Todo Reducer</h2>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: "add", payload: value })
            setValue("")
          }}
          disabled={value === ""}
        >
          Add Todo
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <ul style={{ listStyle: "none" }}>
          {todo.map((item: any) => (
            <li
              key={item.id}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr",
                cursor: "pointer",
              }}
              onClick={() => dispatch({ type: "delete", payload: item.id })}
            >
              <span>{item.id}.</span> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoReducer
