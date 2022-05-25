import {INewSingleCatalog} from "../reducers/CatalogReducer";

type UpdateCatalogAction = {type: "GET_CATALOG", payload: any }
type UpdateSelectedAction = {type: "UPDATE_CATALOG", payload: any}
type UpdateNumberOfClustersAction = {type: "UPDATE_NUMBER_OF_CLUSTERS", payload: any}
type ResetClustersAction = {type: "RESET_CATEGORIES", payload: any}
type UpdateCategoriesFromBreadcrumbs = {type: "UPDATE_CATEGORIES_BREADCRUMBS", payload: any}

export type CatalogAction = UpdateCatalogAction|  UpdateSelectedAction | UpdateNumberOfClustersAction |ResetClustersAction | UpdateCategoriesFromBreadcrumbs;

let URL_GET_CATEGORIES_NEW = "https://api.intellimass.net/clusters";

export const stringCategoriesFromArray = (categories: Array<INewSingleCatalog>) => {
    let newParams = "";
    categories.forEach(category => {
        newParams += category.title + '%$';
    })
    const urlParams = newParams.slice(0,-2);
    console.log(urlParams)
    return urlParams;
}


/**
 * Get Catalog from the server
 * @return {dispatch} Type + payload.
 */
export const getCatalog = (id:string, count:number=100, filterItems="", clusters:string="", numOfClusters: number=4): (dispatch: any) => Promise<void> =>

    async dispatch => {
        const url = `${URL_GET_CATEGORIES_NEW}?id=${id}&count=${count.toString()}&filters=${filterItems}&clusters=${clusters}&numOfClusters=${numOfClusters}`;
        console.log(URL_GET_CATEGORIES_NEW)
        await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (catalog:any) {
                dispatch({type: "GET_CATALOG",
                    payload: catalog.clusters
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }


/**
 * patch selected Metadata to filter articles
 * @return {dispatch} Type + payload.
 */
export function patchCategories(selectedCategories:Array<INewSingleCatalog> ) {
    console.log('woop')
    console.log(selectedCategories)
    return {
        type: "UPDATE_CATALOG",
        payload: {
            selectedCategories: [...selectedCategories]
        }
    };
}

    /**
     * patch selected Metadata to filter articles
     * @return {dispatch} Type + payload.
     */
    export function patchNumberOfCluster(newNumber: number ) {
        return {
            type: "UPDATE_NUMBER_OF_CLUSTERS",
            payload:  newNumber
        };
    }


export function resetCluster() {
    return {
        type: "RESET_CATEGORIES",
        payload:  []
    };
}


export function updateCategoriesFromBreadcrumbs(selectedCategories: INewSingleCatalog[] , numOfClusters:number) {
    return {
        type: "UPDATE_CATEGORIES_BREADCRUMBS",
        payload:  {
            selectedCategories: selectedCategories,
            numOfClusters: numOfClusters
        }
    };
}

