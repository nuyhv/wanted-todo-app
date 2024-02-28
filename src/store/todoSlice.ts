import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { v4 } from "uuid";

interface Todo {
  id: string;
  text: string;
}

const initialState: Todo[] = [
  { id: v4(), text: "List1" },
  { id: v4(), text: "List2" },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.push({ id: v4(), text: action.payload });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos;
export default todoSlice.reducer;
