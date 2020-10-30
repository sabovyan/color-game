import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'selectedColor',
  initialState: '',
  reducers: {
    setSelectedColor: (_state, { payload }) => payload,
  },
});

export const { setSelectedColor } = actions;

export default reducer;
