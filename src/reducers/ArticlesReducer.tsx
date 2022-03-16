// ARTICLES STATE MANAGEMENT REDUCER
import {ArticleAction, ArticleDetail, ArticleOfList, Author, Topic} from "../actions/ArticleActions";

type ServerArticle = {
    abstract: string,
    authors: Array<Author>,
    fieldsOfStudy: Array<string>,
    isOpenAccess: boolean,
    paperId: string,
    title: string,
    topics: Array<Topic>,
    year: number
}

export interface ArticleState {
    articles: Array<ArticleOfList> | [],
    articleDetail: ArticleDetail | {}
    serverArticles: Array<ServerArticle> | []
}



const initState = {
    articles: [],
    serverArticles: [],
    articleDetail: {}
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

        default:
            return state;
    }
};

export default ArticleReducer;