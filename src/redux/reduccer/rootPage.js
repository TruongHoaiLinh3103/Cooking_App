import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1,
  user: ""
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    EDIT__PAGE: (state, action) => {
        let page = state.page;
        page = page !== action.payload ? page = action.payload : page
        state.page = page
    },
    EDIT__USER: (state, action) => {
      let user = state.user;
      user = user !== action.payload ? user = action.payload : user
      state.user = user
    }
  },
})

// Action creators are generated for each case reducer function
export const { EDIT__PAGE, EDIT__USER } = counterSlice.actions

export default counterSlice.reducer