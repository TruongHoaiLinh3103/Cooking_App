import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chat: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    DELETE__COMMENT: (state, action) => {
        let chat = state.chat;
        chat = chat.filter(item => item.id !== action.payload.id)
        return{
            ...state, chat
        }
    },
    EDIT__COMMENT: (state, action) => {
        let edit = state.chat;
        edit = edit.filter(item => item.id === action.payload.id ? item.comment = action.payload.comment : item.comment)
        state.chat = edit
    },
    ADD__COMMENT: (state, action) => {
        let chats = {id: action.payload.id, comment:action.payload.comment, user: action.payload.user, img: action.payload.img ? action.payload.img : "", nguyenlieu: action.payload.nguyenlieu ? action.payload.nguyenlieu : ""}
        return{
            ...state, chat:[...state.chat, chats]
        }
    }
  }
})

// Action creators are generated for each case reducer function
export const { DELETE__COMMENT, EDIT__COMMENT, ADD__COMMENT } = counterSlice.actions

export default counterSlice.reducer