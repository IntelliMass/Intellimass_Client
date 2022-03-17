import { combineReducers } from "redux";
import SharedReducer from "./SharedReducer";
import QueryReducer from "./QueryReducer";
import ArticleReducer from "./ArticlesReducer";
import CatalogReducer from "./CatalogReducer";
import MetadataReducer from "./MetadataReducer";

const RootReducer = combineReducers({
    shared: SharedReducer,
    query: QueryReducer,
    article: ArticleReducer,
    catalog: CatalogReducer,
    metadata: MetadataReducer,
});

export default RootReducer;