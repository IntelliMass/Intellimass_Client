import { combineReducers } from "redux";
import SharedReducer from "./SharedReducer";

const RootReducer = combineReducers({
    shared: SharedReducer
});

export default RootReducer;