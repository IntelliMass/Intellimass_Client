import {IBreadCrumb, ServerStringMetadata} from "../reducers/BreadcrumbReducer";
import {INewSingleCatalog} from "../reducers/CatalogReducer";
import {stringCategoriesFromArray} from "./CatalogAction";
import {IMetadata, NewMetadata} from "../reducers/MetadataReducer";
import {IMetadataWithCategory} from "../components/new-metadata-list/NewMetadataList";

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
        await fetch(url, {
            headers: {
                'use-mock': 'true'
            }
        })
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

    const customMetadataForBreadCrumb = (items: ServerStringMetadata[]) => {
        let responseItems: ServerStringMetadata[] = [];
        items.forEach(item => {
            if (item.type === 'frequentWords') responseItems.push({type: "COMMON_WORDS", title: item.title});
            else if (item.type === 'authors') responseItems.push({type: "AUTHORS", title: item.title});
            else if (item.type === 'topics') responseItems.push({type: "TOPICS", title: item.title});
            else if (item.type === 'years') responseItems.push({type: "YEARS", title: item.title});
            else  responseItems.push({type: "FIELDS_OF_STUDY", title: item.title});

        });
        return responseItems;
    }

export function uploadBreadcrumbs(breadCrumb: any) {
    const resivedBreadcrumbs: IBreadCrumb = {
        clusters: breadCrumb.clusters,
        results: breadCrumb.results,
        metadataList: customMetadataForBreadCrumb(breadCrumb.metadataList),
        index: breadCrumb.index,
        queryList: breadCrumb.queryList,
        time: breadCrumb.time
    }

    return {
        type: "LOCAL_UPLOAD_BREADCRUMB",
        payload: { ... resivedBreadcrumbs }
    };
}

