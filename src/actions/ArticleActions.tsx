type GetArticlesAction = {type: "GET_ARTICLES", payload: ArticleOfList }
type GetArticleDetailAction = {type: "GET_ARTICLE_DETAIL", payload: ArticleDetail}

export type ArticleAction = GetArticlesAction|  GetArticleDetailAction;

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

let URL1 = "https://api.semanticscholar.org/v1/paper/";
let URL2 = "https://api.semanticscholar.org/graph/v1/paper/search";
let URL3 = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/articles";
let OFFSET = 10;
let LIMIT = 100;
let FIELDS = "title,authors,abstract,fieldsOfStudy,influentialCitationCount,isOpenAccess,paperId,venue,year";

/**
 * Get Articles from the server
 * @return {dispatch} Type + payload.
 */
export const getArticles = (id:string): (dispatch: any) => Promise<void> =>
        async dispatch => {
            //let URL_GET_ARTICLES = `${URL2}?query=${query}&offset=${OFFSET.toString()}&limit=${LIMIT.toString()}&fields=${FIELDS}`;
            let URL_GET_ARTICLES = `${URL3}?id=${id}&count=${LIMIT.toString()}`;
            // let URL_GET_ARTICLES = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/articles?id=b3859f83-bed9-4fbc-869c-0ad80ec10a36&count=2"
            await fetch(URL_GET_ARTICLES)
                .then(function (response) {
                    return response.json();
                })
                .then(function (recivedArticles:any) {
                    dispatch({type: "GET_ARTICLES",
                        payload: recivedArticles
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
        await fetch(URL1+articleId)
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
