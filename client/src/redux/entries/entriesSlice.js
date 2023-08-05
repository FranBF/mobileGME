import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  displayEntries: null
}

const entryReducer = createSlice({
  name: 'entry',
  initialState,
  reducers: {
    fetchEntries (state, action) {
      state.displayEntries = action.payload
    },
    deleteEntry (state, action) {
      if (state.displayEntries.map((d) => d._id === action.payload)) {
        state.displayEntries.splice(state.displayEntries.findIndex((d) => d._id === action.payload), 1)
      }
    }
  }
})

export const { fetchEntries, deleteEntry } = entryReducer.actions
export default entryReducer.reducer
