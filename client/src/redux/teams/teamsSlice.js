import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  displayTeams: null
}

const teamReducer = createSlice({
  name: 'team',
  initialState,
  reducers: {
    fetchTeams (state, action) {
      state.displayTeams = action.payload
    },
    deleteTeams (state, action) {
      if (state.displayTeams.map((d) => d._id === action.payload)) {
        state.displayTeams.splice(state.displayTeams.findIndex((d) => d._id === action.payload), 1)
      }
    }
  }
})

export const { fetchTeams, deleteTeams } = teamReducer.actions
export default teamReducer.reducer
