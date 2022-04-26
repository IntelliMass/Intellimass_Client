import {joinQuery, QueryState} from "../reducers/QueryReducer"
type QueryCreateAction = {type: "CREATE_QUERY", payload: QueryState}
type QueryUpdateKeywordsAction = {type: "UPDATE_KEYWORDS", payload: Array<KeywordsListObject>}
export type QueryAction = QueryCreateAction | QueryUpdateKeywordsAction;


export interface KeywordsListObject {
    keyword: string,
    operator: string,
    source?: string
}

const URL_POST = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/query";
const URL_GET = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/articles";
let URL_POST_NEW = "https://ec2-18-168-84-104.eu-west-2.compute.amazonaws.com:5000/query";


/**
 * Create research query
 *
 * @param queryParams:QueryState query parameters
 * @return {dispatch} Type + payload.
 */
export const  createQuery = (queryParams:QueryState): (dispatch: any) => Promise<void> =>{
    const query = joinQuery(queryParams.first_keyword, queryParams.extra_keywords);
    const editedQuery = query.slice(0, -1);
    const body = {query: editedQuery, feature: 'Authors'};
    return async dispatch => {
        await fetch(URL_POST_NEW, {
            method: 'post',
            body: JSON.stringify(body)
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
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
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
export function updateQueryKeywords(keywordsList:Array<KeywordsListObject>):QueryUpdateKeywordsAction {
    return {
        type: "UPDATE_KEYWORDS",
        payload: keywordsList
    };
}
