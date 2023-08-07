import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  displayDevices: null
}

const deviceReducer = createSlice({
  name: 'device',
  initialState,
  reducers: {
    fetchDevices (state, action) {
      state.displayDevices = action.payload
    },
    deleteDevice (state, action) {
      if (state.displayDevices.map((d) => d._id === action.payload)) {
        state.displayDevices.splice(state.displayDevices.findIndex((d) => d._id === action.payload), 1)
      }
    },
    addDevice (state, action) {
      state.displayDevices.push(action.payload)
    }
  }
})

export const { fetchDevices, deleteDevice, addDevice } = deviceReducer.actions
export default deviceReducer.reducer
