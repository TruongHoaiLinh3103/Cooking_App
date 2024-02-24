export const mapStateToProps = (state) => {
    return {
        dataTodo: state.todoState.chat
    }
}
export const mapDispatchToProps = (dispatch) => {
    return{
        deleteTodo: (deleteCMT) => dispatch({type: 'DELETE__COMMENT', payload: deleteCMT}),
        addTodo: (addCMT) => dispatch({type: 'ADD__COMMENT', payload: addCMT}),
        editTodo: (editCMT) => dispatch({type: 'EDIT__COMMENT', payload: editCMT})
    }
}