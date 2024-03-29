/**
 * Redux architecture
 * Query action file
 * */
import {QueryState} from "../reducers/QueryReducer";

//ACTION TYPES
type QueryCreateAction = {type: "CREATE_QUERY", payload: QueryState}
type QueryUpdateKeywordsAction = {type: "UPDATE_KEYWORDS", payload: Array<string>}
type QueryUpdateFromBreadcrumbsAction = {type: "UPDATE_QUERY_FROM_BREADCRUMBS", payload: Array<string>}
export type QueryAction = QueryCreateAction | QueryUpdateKeywordsAction | QueryUpdateFromBreadcrumbsAction;


export interface KeywordsListObject {
    keyword: string,
    operator: string,
    source?: string
}

let URL_POST_NEW = "https://api.intellimass.net/query";


/**
 * Create research query
 *
 * @param queryParams:QueryState query parameters
 * @return {dispatch} Type + payload.
 */
export const  createQuery = (queryParams: QueryState): (dispatch: any) => Promise<void> =>{
    let responseQueryString = '';
    queryParams.searching_words.forEach((item: string) => responseQueryString += item + '+' );
    let responseQuery = responseQueryString.slice(0, -1);
    const body = {
        query:responseQuery,
        operator: queryParams.searching_operator
    };

    return async dispatch => {
        await fetch(URL_POST_NEW, {
            method: 'post',
            body: JSON.stringify(body),
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res:{message: string, queryId: string}) {
                dispatch({ type: "CREATE_QUERY",
                    payload: { ...queryParams, queryId: res.queryId}
                });
            })
            .catch(function (error) {
                throw error;
            });
    }
}

/**
 * update research query by changing the keywords
 *
 * @param queryParams:QueryState query parameters
 * @return {dispatch} Type + payload.
 */
export function updateQueryKeywords(keywordsList:Array<string>):QueryUpdateKeywordsAction {
    return {
        type: "UPDATE_KEYWORDS",
        payload: keywordsList
    };
}

/**
 * Update query parameters from upload breadcrumb state
 *
 * @param  keY words list
 * @return {dispatch} Type + payload.
 */
export function updateQueryFromBreadCrumbs(keywordsList:Array<string>):QueryUpdateFromBreadcrumbsAction {
    return {
        type: "UPDATE_QUERY_FROM_BREADCRUMBS",
        payload: keywordsList
    };
}
