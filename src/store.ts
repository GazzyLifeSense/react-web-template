import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "@/features/todoSlice"

export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
