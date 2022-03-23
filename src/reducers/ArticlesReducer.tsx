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
    connectionType: string,
    count: number,
}



const initState = {
    articles: [],
    serverArticles: [],
    articleDetail: {},
    connectionType: "Authors",
    count: 100,
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

        case "UPDATE_CONNECTION_TYPE":
            return {
                ...state,
                connectionType: action.payload,
            };

        case "UPDATE_ARTICLES_COUNT":
            return {
                ...state,
                count: action.payload,
            };
        default:
            return state;
    }
};

export default ArticleReducer;