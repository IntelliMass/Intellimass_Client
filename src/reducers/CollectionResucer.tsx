// COLLECTIONS STATE MANAGEMENT REDUCER

import {ArticleOfList} from "../actions/ArticleActions";
import {CollectionsAction} from "../actions/CollectionAction";

export interface ICollection {
    collectionName: string;
    articles: Array<ArticleOfList>;
}

export interface CollectionState {
    collections: Array<ICollection>,
}

const initState = {
    collections: []
};

const CatalogReducer = (state: CollectionState = initState, action:CollectionsAction) => {
    switch (action.type) {
        case "GET_COLLECTIONS":
            return {
                ...state,
                collections: [...action.payload],
            };

        case "UPDATE_COLLECTION_NAME":
            return {
                ...state,
                collections: [...action.payload],
            };

        case "INSERT_ITEM_TO_COLLECTION":
            return {
                ...state,
                collections: [...action.payload],
            };

        case "REMOVE_ITEM_TO_COLLECTION":
            return {
                ...state,
                collections: [...action.payload],
            };

        default:
            return state;
    }
};

export default CatalogReducer;
