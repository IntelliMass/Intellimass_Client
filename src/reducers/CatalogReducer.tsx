// QUERY STATE MANAGEMENT REDUCER
import {KeywordsListObject, QueryAction} from "../actions/QueryActions";
import {CatalogAction} from "../actions/CatalogAction";

export interface CatalogState {
    catalogs: Array<string>,
    selectedCategories: Array<string>
}

const initState = {
    catalogs: ['Computer Science', 'Academy', 'Servers', 'Business', 'Data Science'],
    selectedCategories: ['Computer Science', 'Academy']
};


const CatalogReducer = (state: CatalogState = initState, action:CatalogAction) => {
    switch (action.type) {
        case "UPDATE_CATALOG":
            return {
                ...state,
                catalogs: [...action.payload],
                selectedCategories: []
            };

        case "UPDATE_SELECTED":
            return {
                ...state,
                selectedCategories: [...action.payload],
            };

        default:
            return state;
    }
};

export default CatalogReducer;