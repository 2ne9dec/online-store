import { configureStore } from '@reduxjs/toolkit';
import userSlise from './userSlise';

export const store = configureStore({
  reducer: {
    users: userSlise,
  },
});
