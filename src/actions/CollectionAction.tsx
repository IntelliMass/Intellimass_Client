import {ICollection} from "../reducers/CollectionResucer";
import {ArticleOfList} from "./ArticleActions";

type GetCollectionsAction = {type: "GET_COLLECTIONS", payload: any }
type UpdateCollectionNameAction = {type: "UPDATE_COLLECTION_NAME", payload: any}
type InsertItemAction = {type: "INSERT_ITEM_TO_COLLECTION", payload: any}
type RemoveItemAction = {type: "REMOVE_ITEM_TO_COLLECTION", payload: any}



export type CollectionsAction = GetCollectionsAction | UpdateCollectionNameAction | InsertItemAction | RemoveItemAction;

let URL_COLLECTIONS = "http://ec2-18-168-84-104.eu-west-2.compute.amazonaws.com:5000/collections";


/**
 * Get User's private collections from the server
 * @return {dispatch} Type + payload.
 */
// export const getCollections = (id:string, userid: string): (dispatch: any) => Promise<void> =>
//     async dispatch => {
//         const url = `${URL_COLLECTIONS}?id=${id}&userId=${userid}`;
//         // await fetch(url)
//         //     .then(function (response) {
//         //         return response.json();
//         //     })
//         //     .then(function (categories:any) {
//         //         dispatch({type: "GET_COLLECTIONS",
//         //             payload: categories
//         //         });
//         //     })
//         //     .catch(function (error) {
//         //         console.log(
//         //             "There has been a problem with your fetch operation: " + error.message
//         //         );
//         //         throw error;
//         //     });
//         return {
//             type: "GET_COLLECTIONS",
//             payload: [],
//         };
//     }

export function getCollections(id:string, userid: string, collections: Array<ICollection>) {
    const url = `${URL_COLLECTIONS}?id=${id}&userId=${userid}`;
    return {
        type: "GET_COLLECTIONS",
        payload: collections,
    };
}

export function changeCollectionName(id:string, userid: string, collections: Array<ICollection>, oldName:string, newName: string) {
    const url = `${URL_COLLECTIONS}?id=${id}&userId=${userid}`;
    const foundIndex = collections.findIndex(collection => collection.collectionName == oldName);
    let newCollection =  {...collections[foundIndex]};
    newCollection.collectionName = newName;
    collections[foundIndex] = newCollection;
    return {
        type: "UPDATE_COLLECTION_NAME",
        payload: collections,
    };
}

export function insertToCollection(id:string, userid: string, collections: Array<ICollection>, collectionName: string, article: ArticleOfList) {
    const url = `${URL_COLLECTIONS}?id=${id}&userId=${userid}`;
    const foundIndex = collections.findIndex(collection => collection.collectionName == collectionName);
    let newCollection =  {...collections[foundIndex]};
    const newArticles = [...newCollection.articles, article];
    newCollection.articles = newArticles;
    collections[foundIndex] = newCollection;
    return {
        type: "INSERT_ITEM_TO_COLLECTION",
        payload: [],
    };
}


export function removeFromCollection(id:string, userid: string, collections: Array<ICollection>, collectionName: string) {
    const url = `${URL_COLLECTIONS}?id=${id}&userId=${userid}`;
    const newCollections = collections.filter(collection => collection.collectionName != collectionName);
    return {
        type: "REMOVE_ITEM_TO_COLLECTION",
        payload: newCollections,
    };
}
