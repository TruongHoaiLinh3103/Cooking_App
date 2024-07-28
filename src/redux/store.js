import { combineReducers } from "redux";
import rootTodo from "./reduccer/rootTodo";
import rootPage from "./reduccer/rootPage";

const rootReducer = combineReducers({
    todoState: rootTodo,
    page : rootPage
})

export default rootReducer;