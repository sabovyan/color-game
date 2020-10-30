import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'finishStatus',
  initialState: false,
  reducers: {
    setFinishStatus: (state) => !state,
  },
});

export const { setFinishStatus } = actions;

export default reducer;
