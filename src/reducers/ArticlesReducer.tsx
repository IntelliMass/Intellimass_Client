// ARTICLES STATE MANAGEMENT REDUCER
import {ArticleAction, ArticleDetail, ArticleOfList, Author, Reference, Topic} from "../actions/ArticleActions";

type ServerArticle = {
    abstract: string,
    authors: Array<Author>,
    fieldsOfStudy: Array<string>,
    isOpenAccess: boolean,
    paperId: string,
    title: string,
    topics: Array<Topic>,
    year: number
    references?: Array<Reference>
}

export interface ArticleState {
    articles: Array<ArticleOfList> | [],
    articleDetail: ArticleDetail | {},
    serverArticles: Array<ServerArticle> | [],
    count: number,
    selectedPaperID: string
}

const initState = {
    articles: [],
    serverArticles: [],
    articleDetail: {},
    count: 100,
    selectedPaperID: ""
};

const ArticleReducer = (state: ArticleState = initState, action:ArticleAction) => {
    switch (action.type) {
        case "GET_ARTICLES":
            return {
                ...state,
                serverArticles: action.payload,
            };

        case "GET_ARTICLE_DETAIL":
            return {
                ...state,
                articleDetail: action.payload,
            };

        case "UPDATE_ARTICLES_COUNT":
            return {
                ...state,
                count: action.payload,
            };

        case "UPDATE_SELECTED_PAPER_ID":
            return {
                ...state,
                selectedPaperID: action.payload,
            };

        case "RESET_ARTICLES":
            return {
                ...state,
                articles: [],
                serverArticles: [],
                articleDetail: {},
                count: 100,
                selectedPaperID: ""
            }
        default:
            return state;
    }
};

export default ArticleReducer;
