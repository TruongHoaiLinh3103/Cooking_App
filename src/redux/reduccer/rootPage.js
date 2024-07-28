import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    EDIT__PAGE: (state, action) => {
        let page = state.page;
        page = page !== action.payload ? page = action.payload : page
        state.page = page
    }
  },
})

// Action creators are generated for each case reducer function
export const { EDIT__PAGE } = counterSlice.actions

export default counterSlice.reducer