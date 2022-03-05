import { combineReducers } from "redux";
import SharedReducer from "./SharedReducer";
import QueryReducer from "./QueryReducer";
import ArticleReducer from "./ArticlesReducer";

const RootReducer = combineReducers({
    shared: SharedReducer,
    query: QueryReducer,
    article: ArticleReducer,
});

export default RootReducer;