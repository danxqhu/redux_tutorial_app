import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    islogin: false,
  },
  reducers: {
    login: state => {
      state.islogin = true;
    },
    logout: state => {
      state.islogin = false;
    },
  },
});

export const authActions = loginSlice.actions;

export default loginSlice.reducer;
