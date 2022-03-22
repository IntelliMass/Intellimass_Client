import { combineReducers } from "redux";
import SharedReducer from "./SharedReducer";
import QueryReducer from "./QueryReducer";
import ArticleReducer from "./ArticlesReducer";
import CatalogReducer from "./CatalogReducer";
import MetadataReducer from "./MetadataReducer";
import NetworkReducer from "./NetworkReducer";

const RootReducer = combineReducers({
    shared: SharedReducer,
    query: QueryReducer,
    article: ArticleReducer,
    catalog: CatalogReducer,
    metadata: MetadataReducer,
    network: NetworkReducer
});

export default RootReducer;