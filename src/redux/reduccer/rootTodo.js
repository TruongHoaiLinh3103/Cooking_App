const initState = {
    chat: [],
}
const rootTodo = (state = initState, action) => {
    switch(action.type){
        case 'DELETE__COMMENT':
            let chat = state.chat;
            chat = chat.filter(item => item.id !== action.payload.id)
            return{
                ...state, chat
            }
        case 'EDIT__COMMENT':
            let edit = state.chat;
            edit = edit.filter(item => item.id === action.payload.id ? item.comment = action.payload.comment : item.comment)
            return{
                ...state, edit
            }
        case 'ADD__COMMENT':
            let chats = {id: action.payload.id, comment:action.payload.comment, user: action.payload.user}
            return{
                ...state, chat:[...state.chat, chats]
            } 
        default:
            return state
    }
};

export default rootTodo;