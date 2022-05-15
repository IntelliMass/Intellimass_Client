import {CollectionState, ICollection} from "../reducers/CollectionResucer";
import {ArticleOfList} from "./ArticleActions";

type GetCollectionsAction = {type: "GET_COLLECTIONS", payload: any };
type UpdateCollectionNameAction = {type: "UPDATE_COLLECTION_NAME", payload: any};
type InsertItemAction = {type: "INSERT_ITEM_TO_COLLECTION", payload: any};
type RemoveItemAction = {type: "REMOVE_ITEM_TO_COLLECTION", payload: any};
type DeleteCollectionAction = {type: "DELETE_COLLECTION", payload: any};
type CreateCollectionAction = {type: "CREATE_COLLECTION", payload: any};


export type CollectionsAction = GetCollectionsAction | UpdateCollectionNameAction |
    InsertItemAction | RemoveItemAction | DeleteCollectionAction | CreateCollectionAction;

let URL_COLLECTIONS = "https://api.intellimass.net/collections";


/**
 * Get User's private collections from the server
 * @return {dispatch} Type + payload.
 */
export const getCollections = (userid:string="anar"): (dispatch: any) => Promise<{ payload: any[]; type: string }> =>
    async dispatch => {
        const url = `${URL_COLLECTIONS}?user_id=${userid}`;
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


export function changeCollectionName(id:string, userid: string, collections: Array<ICollection>, oldName:string, newName: string) {
    const url = `${URL_COLLECTIONS}?id=${id}&userId=${userid}`;
    const foundIndex = collections.findIndex(collection => collection.collection_name == oldName);
    let newCollection =  {...collections[foundIndex]};
    newCollection.collection_name = newName;
    collections[foundIndex] = newCollection;
    return {
        type: "UPDATE_COLLECTION_NAME",
        payload: collections,
    };
}

export function insertToCollection(id:string, userid: string, collections: Array<ICollection>, collectionName: string, article: ArticleOfList) {
    const url = `${URL_COLLECTIONS}?id=${id}&userId=${userid}`;
    const foundIndex = collections.findIndex(collection => collection.collection_name == collectionName);
    let newCollection =  {...collections[foundIndex]};
    const newArticles = [...newCollection.articles_list, article];
    newCollection.articles_list = newArticles;
    collections[foundIndex] = newCollection;
    return {
        type: "INSERT_ITEM_TO_COLLECTION",
        payload: [],
    };
}


export function removeFromCollection(id:string, userid: string, collections: Array<ICollection>, collectionName: string, paperId:string) {
    const url = `${URL_COLLECTIONS}?id=${id}&userId=${userid}`;
    let newCollections = [...collections];
    const index = collections.findIndex(collection => collection.collection_name === collectionName);
    if (index) {
        const newCollectionArticles = newCollections[index].articles_list.filter(article => article.paperId !== paperId);
        newCollections[index].articles_list = newCollectionArticles;
        return {
            type: "REMOVE_ITEM_TO_COLLECTION",
            payload: [...newCollections],
        };
    }



}

export function deleteCollection(id:string, userid: string, collections: Array<ICollection>, collectionName: string) {
    const url = `${URL_COLLECTIONS}?id=${id}&userId=${userid}`;
    const filteredCollections = collections.filter(collection => collection.collection_name !== collectionName);
    return {
        type: "DELETE_COLLECTION",
        payload: [...filteredCollections],
    };
}

export function createCollection(id:string, userid: string, collections: Array<ICollection>, collectionName: string) {
    const url = `${URL_COLLECTIONS}?id=${id}&userId=${userid}`;
    const newCollection: ICollection = {
        collection_name: collectionName,
        articles_list: []
    }
    const newCollections = [newCollection,...collections];
    return {
        type: "CREATE_COLLECTION",
        payload: [...newCollections],
    };
}
