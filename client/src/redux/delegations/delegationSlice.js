import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  displayDelegations: null
}

const delegationReducer = createSlice({
  name: 'Delegation',
  initialState,
  reducers: {
    fetchDelegations (state, action) {
      state.displayDelegations = action.payload
    }
  }
})

export const { fetchDelegations } = delegationReducer.actions
export default delegationReducer.reducer
