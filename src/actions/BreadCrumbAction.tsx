/**
 * Redux architecture
 * Breadcrumbs action file
 * */
import {IBreadCrumb} from "../reducers/BreadcrumbReducer";

//ACTION TYPES
type GetBreadCrumbAction = {type: "GET_BREADCRUMB", payload: any }
type UploadCrumbAction = {type: "LOCAL_UPLOAD_BREADCRUMB", payload: any}

export type BreadCrumbAction = GetBreadCrumbAction|  UploadCrumbAction;

let URL_GET_BREADCRUMBS = "https://api.intellimass.net/breadcrumbs";
let URL_SET_ITER = "https://api.intellimass.net/set_iter";

/**
 * get list of user's breadcrumb by user id and session id
 */
export const getBreadcrumb = (queryId: string): (dispatch: any) => Promise<void> =>
    async dispatch => {
        const url = `${URL_GET_BREADCRUMBS}?id=${queryId}`;
        await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (breadcrumbs: any) {
                console.log(breadcrumbs)
                dispatch({
                    type: "GET_BREADCRUMB",
                    payload: breadcrumbs.breadCrumbList
                });
            })
            .catch(function (error) {
                throw error;
            });
    }

/**
 * Extract string categories from categories list
 */
export const uploadBreadcrumbs = (breadCrumb: IBreadCrumb, queryId:string): (dispatch: any) => Promise<void> =>

    async dispatch => {
        const url = `${URL_SET_ITER}?id=${queryId}`;

        const body = {
            id:queryId,
            iter: 0
        };

        await fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (breadcrumbs: any) {
                dispatch({
                    type: "LOCAL_UPLOAD_BREADCRUMB",
                    payload: {...breadCrumb}
                });
            })
            .catch(function (error) {
                throw error;
            });
    }
