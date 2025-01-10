import { useState } from "react"
import { todoAdded, todoToggled } from "@/features/todoSlice"
import { useAppDispatch, useAppSelector } from "@/hooks"

export default function ReduxDemo() {
  const [todoInput, setTodoInput] = useState("")
  const todos = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()

  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={e => setTodoInput(e.target.value)}
      />
      <button
        onClick={() => dispatch(todoAdded({ id: Date.now(), text: todoInput }))}
      >
        Add
      </button>
      <ul>
        {todos.map(todo => (
          <li className={!todo.completed ? "" : "line-through"} key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                dispatch(todoToggled(todo.id))
              }}
            />
            {todo.id + ": " + todo.text}
          </li>
        ))}
      </ul>
    </>
  )
}
