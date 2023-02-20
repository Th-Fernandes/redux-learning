import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { namesListSlice } from './slices/namesList';


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    namesList: namesListSlice.reducer
  },
});


