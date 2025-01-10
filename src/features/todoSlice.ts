import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type todo = {
  id: number
  text: string
  completed: boolean
}
const defaultTodo: todo[] = [
  { id: 1, text: "sample1", completed: false },
  { id: 2, text: "sample2", completed: true }
]
const todosSlice = createSlice({
  name: "todos",
  initialState: defaultTodo,
  reducers: {
    todoAdded(
      state: todo[],
      action: PayloadAction<{ id: number; text: string }>
    ) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action: PayloadAction<number>) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) todo.completed = !todo.completed
    }
  }
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer
