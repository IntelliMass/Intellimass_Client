import {ArticleOfList} from "../../actions/ArticleActions";

export interface Node {
    id: string;
    name: string;
    centrality: number;
    degrees: number;    // size
    color: string;
    article: ArticleOfList;    // and remove name
}

export interface Link {
    source: string;
    target: string;
    value: object;
}


export interface LinkValue {
  // define object
}

export interface Article {
    source: string;
    target: string;
    value: object;
}