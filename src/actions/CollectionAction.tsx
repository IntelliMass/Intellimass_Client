/**
 * Redux architecture
 * Collection action file
 * */

//ACTION TYPES
import {ICollection} from "../reducers/CollectionResucer";

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
export const getCollections = (userid:string): (dispatch: any) => Promise<{ payload: any[]; type: string }> =>
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
                throw error;
            });
        return {
            type: "GET_COLLECTIONS",
            payload: [],
        };
    }

/**
 * Update collection name
 * @return {dispatch} Type + payload.
 */
export const  changeCollectionName = (id:string, userid:string, collections: Array<ICollection>, oldName:string, newName: string): (dispatch: any) => Promise<void> =>{
    const url = `${URL_COLLECTIONS}rename_collection?user_id=${userid}`;
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
                throw error;
            });
    }
}

/**
 * Update collection's article by adding new article
 * @return {dispatch} Type + payload.
 */
export const  insertToCollection = (id:string, userid: string, collections: Array<ICollection>, collectionName: string, paperId: string): (dispatch: any) => Promise<void> =>{
    const url = `${URL_COLLECTIONS}insert_article?user_id=${userid}&query_id=${id}`;
    const body = {collection_name: collectionName, article_id: paperId};
    return async dispatch => {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
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
                throw error;
            });
    }
}

/**
 * Update collection's article by adding remove article
 * @return {dispatch} Type + payload.
 */
export const  removeFromCollection = (id:string, userid: string, collections: Array<ICollection>, collectionName: string, paperId:string): (dispatch: any) => Promise<void> =>{
    const url = `${URL_COLLECTIONS}pop_article?user_id=${userid}`;
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
                throw error;
            });
    }
}


/**
 * Delete collection
 * @return {dispatch} Type + payload.
 */
export const  deleteCollection = (id:string, userid: string, collections: Array<ICollection>, collectionName: string): (dispatch: any) => Promise<void> =>{
    const url = `${URL_COLLECTIONS}collection_delete?user_id=${userid}`;
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
                throw error;
            });
    }
}

/**
 * Create new collection with a collection name and user id
 * @return {dispatch} Type + payload.
 */
export const  createCollection = (id:string, userid: string, collections: Array<ICollection>, collectionName: string): (dispatch: any) => Promise<void> =>{
    const url = `${URL_COLLECTIONS}create_collection?user_id=${userid}`;
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
                throw error;
            });
    }
}


