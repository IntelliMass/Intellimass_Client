// COLLECTIONS STATE MANAGEMENT REDUCER

import {ArticleOfList} from "../actions/ArticleActions";
import {CollectionsAction} from "../actions/CollectionAction";

export interface ICollection {
    collection_name: string;
    articles_list: Array<ArticleOfList>;
}

export interface CollectionState {
    collection: Array<any>,
}

const initState = {
    collection: []
};

const CatalogReducer = (state: CollectionState = initState, action:CollectionsAction) => {
    switch (action.type) {
        case "GET_COLLECTIONS":
            return {
                ...state,
                collection: {...action.payload},
            };

        case "UPDATE_COLLECTION_NAME":
            return {
                ...state,
                collection: {...action.payload},
            };

        case "INSERT_ITEM_TO_COLLECTION":
            return {
                ...state,
                collection: {...action.payload},
            };

        case "REMOVE_ITEM_TO_COLLECTION":
            return {
                ...state,
                collection: {...action.payload},
            };

        case "DELETE_COLLECTION":
            return {
                ...state,
                collection: {...action.payload},
            };

        case "CREATE_COLLECTION":
            return {
                ...state,
                collection: {...action.payload},
            };

        default:
            return state;
    }
};

export default CatalogReducer;
