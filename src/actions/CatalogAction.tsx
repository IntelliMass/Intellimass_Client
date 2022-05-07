type UpdateCatalogAction = {type: "UPDATE_CATALOG", payload: any }
type UpdateSelectedAction = {type: "UPDATE_SELECTED", payload: any}
export type CatalogAction = UpdateCatalogAction|  UpdateSelectedAction;

let URL_GET_CATALOG = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/categories";
let URL_PATCH_CATEGORIES = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/categories";
let URL_GET_CATEGORIES_NEW = "https://ec2-35-178-32-52.eu-west-2.compute.amazonaws.com:5000/categories";


/**
 * Get Catalog from the server
 * @return {dispatch} Type + payload.
 */
export const getCatalog = (id:string): (dispatch: any) => Promise<void> =>

    async dispatch => {
        const url = `${URL_GET_CATEGORIES_NEW}?id=${id}&count=100`;
        await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (catalog:any) {
                dispatch({type: "UPDATE_CATALOG",
                    payload: catalog
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
 * patch selected categories to filter articles
 * @return {dispatch} Type + payload.
 */
export const patchCategories = (categories:Array<string>): (dispatch: any) => Promise<void> =>
    async dispatch => {
        await fetch(URL_PATCH_CATEGORIES)
            .then(function (response) {
                return response.json();
            })
            .then(function (res: any) {
                console.log(res)
                dispatch({type: "UPDATE_SELECTED",
                    payload:  categories
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }


