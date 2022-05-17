import { combineReducers } from "redux";
import SharedReducer from "./SharedReducer";
import QueryReducer from "./QueryReducer";
import ArticleReducer from "./ArticlesReducer";
import CatalogReducer from "./CatalogReducer";
import MetadataReducer from "./MetadataReducer";
import NetworkReducer from "./NetworkReducer";
import UserReducer from "./UserReducer";
import CollectionResucer from "./CollectionResucer";
import BreadcrumbReducer from "./BreadcrumbReducer";

const RootReducer = combineReducers({
    shared: SharedReducer,
    query: QueryReducer,
    article: ArticleReducer,
    catalog: CatalogReducer,
    metadata: MetadataReducer,
    network: NetworkReducer,
    user: UserReducer,
    collection: CollectionResucer,
    breadcrumbs: BreadcrumbReducer
});

export default RootReducer;
