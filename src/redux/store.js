import { combineReducers } from "redux";
import rootTodo from "./reduccer/rootTodo";

const rootReducer = combineReducers({
    todoState: rootTodo,
})

export default rootReducer;