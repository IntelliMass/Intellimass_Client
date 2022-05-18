import {SharedAction} from "./SharedAction";

type GetArticlesAction = {type: "GET_ARTICLES", payload: ArticleOfList }
type GetArticleDetailAction = {type: "GET_ARTICLE_DETAIL", payload: ArticleDetail}
type UpdateCountAction = {type: "UPDATE_ARTICLES_COUNT", payload: number}
type UpdatePaperIDAction = {type: "UPDATE_SELECTED_PAPER_ID", payload: string}


export type ArticleAction = GetArticlesAction|  GetArticleDetailAction  | UpdateCountAction | UpdatePaperIDAction;

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
    topics?: any[],
    references?: any[],
    cluster?: string
}

let URL_GET_ARTICLES_NEW = "https://api.intellimass.net/articles/articles";
let URL_GET_ARTICLE_NEW = "https://api.intellimass.net/getOne";
let URL_GET_FILTERED_ARTICLES = "https://api.intellimass.net/articles";


let OFFSET = 100;
let FIELDS = "title,authors,abstract,fieldsOfStudy,influentialCitationCount,isOpenAccess,paperId,venue,year";

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
                    console.log(
                        "There has been a problem with your fetch operation: " + error.message
                    );
                    throw error;
                });
        }




/**
 * Get single article data from the server
 * @return {dispatch} Type + payload.
 */
export const getArticleDetail = (articleId:string): (dispatch: any) => Promise<void> =>
    async dispatch => {
        const url = URL_GET_ARTICLE_NEW + `?id=${articleId}`
        await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (recivedArticle:ArticleDetail) {
                console.log(recivedArticle)
                dispatch({type: "GET_ARTICLE_DETAIL",
                    payload:  recivedArticle
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
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }


export function updateCount(count:number) {
    return {
        type: "UPDATE_ARTICLES_COUNT",
        payload: count,
    };
}

export function updatePaperID(newID:string) {
    return {
        type: "UPDATE_SELECTED_PAPER_ID",
        payload: newID,
    };
}
