/**
 * Redux architecture
 * Articles action file
 * */

//ACTION TYPES
type GetArticlesAction = {type: "GET_ARTICLES", payload: ArticleOfList }
type GetArticleDetailAction = {type: "GET_ARTICLE_DETAIL", payload: ArticleDetail}
type UpdateCountAction = {type: "UPDATE_ARTICLES_COUNT", payload: number}
type UpdatePaperIDAction = {type: "UPDATE_SELECTED_PAPER_ID", payload: string}
type ResetArticlesAction = {type: "RESET_ARTICLES", payload: any[]}
type UpdateCountFromBreadcrumAction = {type: "UPDATE_NUMBER_BY_BREADCRUMBS", payload: number}

export type ArticleAction = GetArticlesAction|  GetArticleDetailAction  | UpdateCountAction | UpdatePaperIDAction | ResetArticlesAction | UpdateCountFromBreadcrumAction;

export interface ArticleDetail {
    title: string,
    authors: Array<Author>,
    abstract: string,
    fieldsOfStudy: Array<string>,
    influentialCitationCount: number,
    isOpenAccess: boolean,
    paperId: string,
    venue:string,
    year: number,

    citationVelocity:string,
    citations: Array<Citations>,
    is_publisher_licensed:boolean,
    isPublisherLicensed:boolean,
    is_open_access:boolean,
    numCitedBy:number,
    numCiting:number,
    references:Array<Reference>,
    topics: Array<Topic>
}

export interface Author {
    authorId: string | null,
    name: string | null,
}

export interface Reference {
    arxivId: string,
    authors: Array<Author>,
    doi: string
    intent: Array<string>,
    isInfluential: boolean
    paperId: string
    title: string
    url: string
    venue: string
    year: number
}

export interface Citations{
    arxivId: string,
    authors: Array<Author>,
    doi: string,
    intent: Array<string>,
    isInfluential: boolean,
    paperId: string
    title: string
    url: string
    venue: string
    year: number
}

export interface Topic {
    topic: string,
    topicId: string,
    url: string
}

export interface ArticleOfList {
    title: string,
    authors: Array<Author>,
    abstract: string,
    fieldsOfStudy: Array<string>,
    influentialCitationCount: number,
    isOpenAccess: boolean,
    paperId: string,
    venue:string,
    year: number,
    frequentWords?: string[],
    topics?: Topic[],
    references?: any[],
    cluster?: string,
    query_word?: string[],
    timestamp?:string
    queryId? : string
}

let URL_GET_ARTICLES_NEW = "https://api.intellimass.net/articles/articles";
let URL_GET_ARTICLE_NEW = "https://api.intellimass.net/getOne";
let URL_GET_FILTERED_ARTICLES = "https://api.intellimass.net/articles";

/**
 * Get Articles from the server
 * @return {dispatch} Type + payload.
 */
export const getArticles = (id:string, limit: number = 100 ): (dispatch: any) => Promise<void> =>
        async dispatch => {
            let URL_GET_ARTICLES = `${URL_GET_ARTICLES_NEW}?id=${id}&count=${limit.toString()}`;
            await fetch(URL_GET_ARTICLES)
                .then(function (response) {
                    return response.json();
                })
                .then(function (recivedArticles:any) {
                    dispatch({type: "GET_ARTICLES",
                        payload: recivedArticles.articles
                    });
                })
                .catch(function (error) {

                    throw error;
                });
        }




/**
 * Get single article data from the server
 * @return {dispatch} Type + payload.
 */
export const getArticleDetail = (articleId:string, queryID:string = "e4b549da-d0d6-49ad-93d4-40bc4c9936ad"): (dispatch: any) => Promise<void> =>
    async dispatch => {
        const url = URL_GET_ARTICLE_NEW + `?id=${articleId}&query_id=${queryID}`;
        await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (recivedArticle:ArticleDetail) {
                dispatch({type: "GET_ARTICLE_DETAIL",
                    payload:  recivedArticle
                });
            })
            .catch(function (error) {

                throw error;
            });
    }

/**
 * Get Articles from the server
 * @return {dispatch} Type + payload.
 */
export const getFilteredArticles = (id:string, filterItems:string="", limit:number=100, clusters:string="", numOfClusters: number=4): (dispatch: any) => Promise<void> =>
    async dispatch => {
        let URL_GET_ARTICLES = `${URL_GET_FILTERED_ARTICLES}?id=${id}&count=${limit.toString()}&filters=${filterItems}&clusters=${clusters}&numOfClusters=${numOfClusters}`;
        await fetch(URL_GET_ARTICLES)
            .then(function (response) {
                return response.json();
            })
            .then(function (recivedArticles:any) {
                dispatch({type: "GET_ARTICLES",
                    payload: recivedArticles.articles
                });
            })
            .catch(function (error) {
                throw error;
            });
    }

/**
 * Update articles amount
 */
export function updateCount(count:number) {
    return {
        type: "UPDATE_ARTICLES_COUNT",
        payload: count,
    };
}

/**
 * Update selected article
 */
export function updatePaperID(newID:string) {
    return {
        type: "UPDATE_SELECTED_PAPER_ID",
        payload: newID,
    };
}

/**
 * reset articles list
 */
export function resetArticles() {
    return {
        type: "RESET_ARTICLES",
        payload: [],
    };
}

/**
 * Update articles state from breadcrumb changes
 */
export function updateCountFromBreadcrum(count: number) {
    return {
        type: "UPDATE_NUMBER_BY_BREADCRUMBS",
        payload: count,
    };
}

