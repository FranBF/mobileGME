import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null
}

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login (state, action) {
      state.currentUser = action.payload
    },
    logout (state) {
      state.currentUser = null
    }
  }
})

export const { login, logout } = userReducer.actions
export default userReducer.reducer
