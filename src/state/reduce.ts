import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState =   {
  value: 0,
  status: 'idle'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  }
})

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state:any) => state.counter.value;



