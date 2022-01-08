import {QueryState} from "../reducers/QueryReducer"
type QueryCreateAction = {type: "CREATE_QUERY", payload: QueryState}
type QueryUpdateKeywordsAction = {type: "UPDATE_KEYWORDS", payload: Array<KeywordsListObject>}
export type QueryAction = QueryCreateAction | QueryUpdateKeywordsAction;


export interface KeywordsListObject {
    keyword: string,
    operator: string,
    source?: string
}

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