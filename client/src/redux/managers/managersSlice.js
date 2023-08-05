import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  displayManagers: null
}

const managerReducer = createSlice({
  name: 'manager',
  initialState,
  reducers: {
    fetchManagers (state, action) {
      state.displayManagers = action.payload
    },
    deleteManagers (state, action) {
      if (state.displayManagers.map((d) => d._id === action.payload)) {
        state.displayManagers.splice(state.displayManagers.findIndex((x) => x._id === action.payload), 1)
      }
    }
  }
})

export const { fetchManagers, deleteManagers } = managerReducer.actions
export default managerReducer.reducer
