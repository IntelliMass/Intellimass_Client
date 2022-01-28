// ARTICLES STATE MANAGEMENT REDUCER
import { ArticleAction, ArticleDetail, ArticleOfList} from "../actions/ArticleActions";


export interface ArticleState {
    articles: Array<ArticleOfList> | [],
    articleDetail: ArticleDetail | {}
}

const initState = {
    articles: [],
    articleDetail: {}
};

const ArticleReducer = (state: ArticleState = initState, action:ArticleAction) => {
    switch (action.type) {
        case "GET_ARTICLES":
            return {
                ...state,
                articles: action.payload,
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