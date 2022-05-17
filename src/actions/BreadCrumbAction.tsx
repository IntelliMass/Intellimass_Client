import {IBreadCrumb} from "../reducers/BreadcrumbReducer";
import {INewSingleCatalog} from "../reducers/CatalogReducer";
import {stringCategoriesFromArray} from "./CatalogAction";

type GetBreadCrumbAction = {type: "GET_BREADCRUMB", payload: any }
type UploadCrumbAction = {type: "LOCAL_UPLOAD_BREADCRUMB", payload: any}

export type BreadCrumbAction = GetBreadCrumbAction|  UploadCrumbAction;

let URL_GET_BREADCRUMBS = "https://api.intellimass.net/breadcrumbs";

const extractFromListToString = (items: string[]) => {
    let responseString: string = "";
    items.forEach(item => {
        responseString += item + "%$";
    })
    return responseString.slice(0, -2);
}

export const getBreadcrumb = (queryId: string): (dispatch: any) => Promise<void> =>

    async dispatch => {
        const url = `${URL_GET_BREADCRUMBS}?id=${queryId}`;
        await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (breadcrumbs: any) {
                console.log(breadcrumbs.breadCrumbList)
                dispatch({
                    type: "GET_BREADCRUMB",
                    payload: breadcrumbs.breadCrumbList
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }


export function uploadBreadcrumbs(breadCrumb: IBreadCrumb) {
    return {
        type: "LOCAL_UPLOAD_BREADCRUMB",
        payload: { ... breadCrumb }
    };
}

