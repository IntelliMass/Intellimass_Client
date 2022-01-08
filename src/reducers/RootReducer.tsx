import { combineReducers } from "redux";
import SharedReducer from "./SharedReducer";
import QueryReducer from "./QueryReducer";

const RootReducer = combineReducers({
    shared: SharedReducer,
    query: QueryReducer
});

export default RootReducer;