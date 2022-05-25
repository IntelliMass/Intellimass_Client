import {KeywordsListObject, QueryAction} from "../actions/QueryActions";

export interface QueryState {
    searching_words: string[],
    searching_operator: string
    queryId: string
}

const initState = {
    searching_words: [],
    searching_operator: "AND",
    queryId: ''
};

export const joinQueryString = (firstKeyword: string, allKeywords: Array<string>) => {
    return firstKeyword + '+' + allKeywords.join();
}

export const joinQuery = (firstKeyword: string, allKeywords:Array<{keyword: string, operator:string}>) => {
    let keyWords:Array<string> = [];
    allKeywords.forEach(item=>keyWords.push(item.keyword));
    const items = joinQueryString(firstKeyword, keyWords);
    return items;
}


const QueryReducer = (state: QueryState = initState, action:QueryAction) => {
    switch (action.type) {
        case "CREATE_QUERY":
            return {
                ...state,
                searching_words: [...action.payload.searching_words],
                searching_operator: action.payload.searching_operator,
                queryId: action.payload.queryId
            };


        case "UPDATE_KEYWORDS":
            return {
                ...state,
                searching_words: [...action.payload],
            };

        case "UPDATE_QUERY_FROM_BREADCRUMBS":
            return {
                ...state,
                searching_words: [...action.payload],
            };

        default:
            return state;
    }
};

export default QueryReducer;
