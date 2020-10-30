import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'step',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: (state) => 0,
  },
});

export const { decrement, increment, reset } = actions;

export default reducer;
