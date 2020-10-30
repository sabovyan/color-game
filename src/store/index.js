import { configureStore } from '@reduxjs/toolkit';
import reducer from './features/index';

const store = configureStore({
  reducer,
});

export default store;
