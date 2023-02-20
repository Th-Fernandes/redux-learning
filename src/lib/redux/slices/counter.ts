import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

const { increment, decrement } = counterSlice.actions;
const selectCount = (state:any) => state.counter.value;

export {
  increment,
  decrement,
  selectCount,
  counterSlice
}
