// QUERY STATE MANAGEMENT REDUCER
import { QueryCreateAction, QueryUpdateKeywordsAction } from "../actions/QueryActions";

export interface QueryState {
    query: string,
    first_keyword: string,
    first_operator: string,
    extra_keywords: Array<KeywordsListObject>,
    source: string,
    strategy: string
}

export interface KeywordsListObject {
    keyword: string,
    operator: string,
    source: string
}

const initState = {
    query: 'IOT',
    first_keyword: 'cyber',
    first_operator: 'AND',
    extra_keywords: [{keyword: "Architecture", operator: "Not", source: "user"}],
    source: 'file',
    strategy: 'suggestions'
};

const QueryReducer = (state: QueryState = initState, action:QueryCreateAction | QueryUpdateKeywordsAction) => {
    switch (action.type) {
        case "CREATE_QUERY":
            return {
                ...state,
                query: action.payload.query,
                first_keyword: action.payload.first_keyword,
                first_operator: action.payload.first_operator,
                extra_keywords: action.payload.extra_keywords,
                source: action.payload.source,
                strategy: action.payload.strategy
            };


        case "UPDATE_KEYWORDS":
            return {
                ...state,
                extra_keywords: action.payload,
            };

        default:
            return state;
    }
};

export default QueryReducer;