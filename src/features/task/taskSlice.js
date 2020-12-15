import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
      idCount: 0,
      tasks: [],
  },
  reducers: {
    newTask: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.idCount ++;
      const newItem = {
          id: state.idCount,
          title: action.payload,
          completed: false,
      }
      state.tasks = [newItem, ...state.tasks]
    },
    completeTask: (state, action) => {
        const task = state.tasks.find((t)=>t.id === action.payload.id)
        if (task) {
            task.completed = !task.completed;
        }
    },
    deleteTask: (state, action) => {
        state.tasks = state.tasks.filter((t)=>t.id !== action.payload.id)
    },
  },
});

export const { newTask, completeTask, deleteTask} = taskSlice.actions;

export const selectTasks= state => state.task.tasks;

export default taskSlice.reducer;
