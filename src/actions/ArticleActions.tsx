import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
type GetArticlesAction = {type: "GET_ARTICLES", payload: ArticleOfList }
type GetArticleDetailAction = {type: "GET_ARTICLE_DETAIL", payload: ArticleDetail}

export type ArticleAction = GetArticlesAction|  GetArticleDetailAction;

export interface WSResponse {
    data: Array<ArticleOfList>,
    offset: number,
    next: number,
    total: number
}

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
    year: number
}

let URL1 = "https://api.semanticscholar.org/v1/paper/0796f6cd7f0403a854d67d525e9b32af3b277331";
let URL2 = "https://api.semanticscholar.org/graph/v1/paper/search";
let QUERY="literature+graph";
let OFFSET = 10;
let LIMIT = 100;
let FIELDS = "title,authors,abstract,fieldsOfStudy,influentialCitationCount,isOpenAccess,paperId,venue,year";


/**
 * Get Articles from the server
 * @return {dispatch} Type + payload.
 */
export const getArticles = (query:string): (dispatch: any) => Promise<void> =>
        async dispatch => {
            let URL_GET_ARTICLES = `${URL2}?query=${query}&offset=${OFFSET.toString()}&limit=${LIMIT.toString()}&fields=${FIELDS}`;
            await fetch(URL_GET_ARTICLES)
                .then(function (response) {
                    return response.json();
                })
                .then(function (recivedArticles:WSResponse) {
                    dispatch({type: "GET_ARTICLES",
                        payload: recivedArticles.data
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
export const getArticleDetail = (): (dispatch: any) => Promise<void> =>
    async dispatch => {
        await fetch(URL1)
            .then(function (response) {
                return response.json();
            })
            .then(function (recivedArticle:ArticleDetail) {
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
