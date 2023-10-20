import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import quoteReducer from '../features/quoteFeature/quoteSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quote: quoteReducer,
  },
});
