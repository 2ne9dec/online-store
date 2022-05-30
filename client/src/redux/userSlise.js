import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
  isAuth: false,
};

const userSlise = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setUser(state, action) {
      const { email, password } = action.payload;
      state.currentUser = { email, password };
      state.isAuth = true;
    },
  },
});

export default userSlise.reducer;
export const { setUser } = userSlise.actions;
