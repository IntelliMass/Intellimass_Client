import React from "react";
import {BreadCrumbAction} from "../actions/BreadCrumbAction";

export interface ServerStringMetadata {
    type: string,
    title: string
}

export interface IBreadCrumb {
    time: string,
    queryList: string[],
    clusters: string[],
    metadataList: ServerStringMetadata[],
    count: number,
    index: number,
}

export interface BreadCrumbState {
    breadCrumbList: IBreadCrumb[],
    currentState: IBreadCrumb,
    isUpdatedFlag: boolean
}

const initState: BreadCrumbState = {
    breadCrumbList: [],
    currentState: {
        index: -1,
        time: "2015-09-01 | 14:32:15",
        queryList: [],
        clusters: [],
        metadataList: [],
        count: 100
    },
    isUpdatedFlag: false
};

const ArticleReducer = (state: BreadCrumbState = initState, action:BreadCrumbAction) => {
    switch (action.type) {
        case "GET_BREADCRUMB":
            return {
                ...state,
                breadCrumbList: [...action.payload],
            };

        case "LOCAL_UPLOAD_BREADCRUMB":
            return {
                ...state,
                currentState: {...action.payload},
            };

        default:
            return state;
    }
};

export default ArticleReducer;
