import {QueryState, KeywordsListObject} from "../reducers/QueryReducer"
export type QueryCreateAction = {type: "CREATE_QUERY", payload: QueryState}
export type QueryUpdateKeywordsAction = {type: "UPDATE_KEYWORDS", payload: Array<KeywordsListObject>}


/**
 * Create research query
 *
 * @param queryParams:QueryState query parameters
 * @return {dispatch} Type + payload.
 */
export function createQuery(queryParams:QueryState):QueryCreateAction {
    return {
        type: "CREATE_QUERY",
        payload: queryParams
    };
}

/**
 * update research query by changing the keywords
 *
 * @param queryParams:QueryState query parameters
 * @return {dispatch} Type + payload.
 */
export function updateQueryKeywords(keywordsList:Array<KeywordsListObject>):QueryUpdateKeywordsAction {
    return {
        type: "UPDATE_KEYWORDS",
        payload: keywordsList
    };
}