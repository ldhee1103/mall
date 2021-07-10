import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser : null
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout : (state, action) => {
      state.currentUser = null;
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.currentUser;
export default userSlice.reducer;