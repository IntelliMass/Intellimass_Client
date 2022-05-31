import {CollectionState, ICollection} from "../reducers/CollectionResucer";
import {ArticleOfList} from "./ArticleActions";
import {joinQuery, QueryState} from "../reducers/QueryReducer";

type GetCollectionsAction = {type: "GET_COLLECTIONS", payload: any };
type UpdateCollectionNameAction = {type: "UPDATE_COLLECTION_NAME", payload: any};
type InsertItemAction = {type: "INSERT_ITEM_TO_COLLECTION", payload: any};
type RemoveItemAction = {type: "REMOVE_ITEM_TO_COLLECTION", payload: any};
type DeleteCollectionAction = {type: "DELETE_COLLECTION", payload: any};
type CreateCollectionAction = {type: "CREATE_COLLECTION", payload: any};


export type CollectionsAction = GetCollectionsAction | UpdateCollectionNameAction |
    InsertItemAction | RemoveItemAction | DeleteCollectionAction | CreateCollectionAction;

let URL_COLLECTIONS = "https://api.intellimass.net/";


/**
 * Get User's private collections from the server
 * @return {dispatch} Type + payload.
 */
export const getCollections = (userid:string="anar"): (dispatch: any) => Promise<{ payload: any[]; type: string }> =>
    async dispatch => {
        const url = `${URL_COLLECTIONS}collections?user_id=${userid}`;
        await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (serverCollection:any) {
                dispatch({type: "GET_COLLECTIONS",
                    payload: serverCollection
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
        return {
            type: "GET_COLLECTIONS",
            payload: [],
        };
    }


export const  changeCollectionName = (id:string, userid:string="anar", collections: Array<ICollection>, oldName:string, newName: string): (dispatch: any) => Promise<void> =>{
    const user_ID = "anar";
    const url = `${URL_COLLECTIONS}rename_collection?user_id=${user_ID}`;
    const body = {collection_name: oldName, new_collection: newName};
    return async dispatch => {
        await fetch(url, {
            method: 'post',
            body: JSON.stringify(body)
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (serverCollection:any) {
                dispatch({ type: "UPDATE_COLLECTION_NAME",
                    payload: { ...serverCollection}
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }
}

export const  insertToCollection = (id:string, userid: string, collections: Array<ICollection>, collectionName: string, paperId: string): (dispatch: any) => Promise<void> =>{
    const user_ID = "anar";
    const url = `${URL_COLLECTIONS}insert_article?user_id=${user_ID}&query_id=${id}`;
    console.log(paperId)
    const body = {collection_name: collectionName, article_id: paperId};
    return async dispatch => {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body)
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (serverCollection:any) {
                dispatch({ type: "INSERT_ITEM_TO_COLLECTION",
                    payload: { ...serverCollection}
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }
}

export const  removeFromCollection = (id:string, userid: string, collections: Array<ICollection>, collectionName: string, paperId:string): (dispatch: any) => Promise<void> =>{
    const user_ID = "anar";
    const url = `${URL_COLLECTIONS}pop_article?user_id=${user_ID}`;
    const body = {collection_name: collectionName, article_id: paperId};
    return async dispatch => {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body)
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (serverCollection:any) {
                dispatch({ type: "REMOVE_ITEM_TO_COLLECTION",
                    payload: { ...serverCollection}
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }
}


export const  deleteCollection = (id:string, userid: string, collections: Array<ICollection>, collectionName: string): (dispatch: any) => Promise<void> =>{
    const user_ID = "anar";
    const url = `${URL_COLLECTIONS}collection_delete?user_id=${user_ID}`;
    const body = {collection_name: collectionName};
    return async dispatch => {
        await fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(body)
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (serverCollection:any) {
                dispatch({ type: "DELETE_COLLECTION",
                    payload: { ...serverCollection}
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }
}

export const  createCollection = (id:string, userid: string, collections: Array<ICollection>, collectionName: string): (dispatch: any) => Promise<void> =>{
    const user_ID = "anar";
    const url = `${URL_COLLECTIONS}create_collection?user_id=${user_ID}`;
    const body = {collection_name: collectionName};
    return async dispatch => {
        await fetch(url, {
            method: 'post',
            body: JSON.stringify(body)
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (serverCollection:any) {
                dispatch({ type: "CREATE_COLLECTION",
                    payload: { ...serverCollection}
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }
}


