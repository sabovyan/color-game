import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'renderColors',
  initialState: [],
  reducers: {
    setRenderColors: (state, { payload }) => payload,
  },
});

export const { setRenderColors } = actions;
export default reducer;
