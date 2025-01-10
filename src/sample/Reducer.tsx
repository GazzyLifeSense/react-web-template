const ADD_TODO = "ADD_TODO"
const TODO_TOGGLED = "TODO_TOGGLED"

type todo = {
  id: number
  text: string
  completed: boolean
}

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: { text, id: Date.now() }
})

export const todoToggled = (id: number) => ({
  type: TODO_TOGGLED,
  payload: { id }
})

export const todosReducer = (
  state = [] as todo[],
  action: { type: any; payload: { id: any; text?: any } }
) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    case TODO_TOGGLED:
      return state.map(todo => {
        if (todo.id !== action.payload.id) return todo

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state
  }
}

import { useReducer, useState } from "react"
const defaultTodo: todo[] = [
  { id: 1, text: "sample1", completed: false },
  { id: 2, text: "sample2", completed: true }
]
export default function ReducerDemo() {
  const [todoInput, setTodoInput] = useState("")
  const [todos, dispatch] = useReducer(todosReducer, defaultTodo)
  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={e => setTodoInput(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(todoInput))}>Add</button>
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
