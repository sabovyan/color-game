import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../Services/getData';

export const getAllColors = createAsyncThunk('colors/getAll', getData);

const { reducer } = createSlice({
  name: 'colorsJson',
  reducers: {},
  initialState: {
    data: [],
    error: null,
    isLoading: false,
    status: false,
  },
  extraReducers: {
    [getAllColors.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [getAllColors.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),

    [getAllColors.fulfilled]: (state, { payload }) => ({
      ...state,
      data: payload,
      isLoading: false,
      status: true,
    }),
  },
});

export default reducer;
