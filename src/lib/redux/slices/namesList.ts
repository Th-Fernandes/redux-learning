import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: ['Joe'],
  status: 'idle'
}

const namesListSlice = createSlice({
  name: 'namesList',
  initialState,
  reducers: {
    push: (state , test) => {
      state.value.push(test.payload)
    }
  }
})

const { push } = namesListSlice.actions;
const selectNamesList = (state: any) => state.namesList.value;

export { push, selectNamesList, namesListSlice  } 