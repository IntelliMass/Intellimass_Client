import {CatalogAction} from "../actions/CatalogAction";

export interface INewSingleCatalog {
    title: string,
    rank: number
}

export interface CatalogState {
    catalogs: Array<INewSingleCatalog>,
    selectedCategories: Array<INewSingleCatalog>,
    numOfClusters: number
}

const initState = {
    catalogs: [],
    selectedCategories: [],
    numOfClusters: 4
};


const CatalogReducer = (state: CatalogState = initState, action:CatalogAction) => {
    switch (action.type) {
        case "UPDATE_CATALOG":
            return {
                ...state,
                catalogs: [...action.payload],
                selectedCategories: []
            };

        case "UPDATE_SELECTED_METADATA":
            return {
                ...state,
                catalogs: [...action.payload.catalogs],
                selectedCategories: [...action.payload.selectedCategories]
            };

        case "UPDATE_NUMBER_OF_CLUSTERS":
            return {
                ...state,
                numOfClusters: action.payload
            };

        default:
            return state;
    }
};

export default CatalogReducer;
