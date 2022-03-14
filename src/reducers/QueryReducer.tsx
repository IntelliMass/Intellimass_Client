// QUERY STATE MANAGEMENT REDUCER
import {KeywordsListObject, QueryAction} from "../actions/QueryActions";

export interface QueryState {
    query: string,
    first_keyword: string,
    first_operator: string,
    extra_keywords: Array<KeywordsListObject>,
    connection: string,
    //strategy: string
}

const initState = {
    query: 'IOT,cyber',
    first_keyword: 'cyber',
    first_operator: 'AND',
    extra_keywords: [{keyword: "Architecture", operator: "Not", source: "user"}],
    connection: 'authors',
    //strategy: 'suggestions'
};

export const joinQueryString = (firstKeyword: string, allKeywords: Array<string>) => {
    return firstKeyword + ',' + allKeywords.join();
}

export const joinQuery = (firstKeyword: string, allKeywords:Array<{keyword: string, operator:string}>) => {
    let keyWords:Array<string> = [];
    allKeywords.forEach(item=>keyWords.push(item.keyword));

    return  joinQueryString(firstKeyword, keyWords);
}


const QueryReducer = (state: QueryState = initState, action:QueryAction) => {
    switch (action.type) {
        case "CREATE_QUERY":
            return {
                ...state,
                query: action.payload.query,
                first_keyword: action.payload.first_keyword,
                first_operator: action.payload.first_operator,
                extra_keywords: action.payload.extra_keywords,
                connection: action.payload.connection,
                //strategy: action.payload.strategy
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