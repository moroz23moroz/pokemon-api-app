import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../models/todo-item'

export interface TodoState {
  todo: ToDo[]
}

const initialState: TodoState = {
  todo: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    creareAction: (state) => {
      
    },
    updateAction: (state) => {
      
    },
    deleteAction: (state, action: PayloadAction<number>) => {

    },
  },
})

export const { creareAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer