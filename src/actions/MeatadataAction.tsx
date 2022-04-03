import {IMetadata} from "../components/metadata/Metadata";

type UpdateMetadataAction = {type: "UPDATE_METADATA", payload: any }
type UpdateSelectedMetadataAction = {type: "UPDATE_SELECTED_METADATA", payload: any}
export type MetadataAction = UpdateMetadataAction|  UpdateSelectedMetadataAction;

let URL_GET_METADATA = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/metadata";
let URL_PATCH_METADATA = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/categories";
let URL_GET_METADATA_NEW = "http://ec2-18-168-84-104.eu-west-2.compute.amazonaws.com:5000/metadata";


export const customMetadata = (items:any[]):Array<any>  =>{
    let newMetadataList:Array<any>  = [];
    let newMetadata = {};
    items.forEach(item => {
        newMetadata = {};
        newMetadata = {...item,
            id: item.title,
            isSelected: false,
        };
        newMetadataList.push(newMetadata);
    })
    return newMetadataList;
}

/**
 * Get Metadata from the server
 * @return {dispatch} Type + payload.
 */
export const getMetadata = (id:string): (dispatch: any) => Promise<void> =>
    async dispatch => {
        console.log(id)
        const url = `${URL_GET_METADATA_NEW}?id=${id}&count=100`;
        console.log(url)
        await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (metadata:any) {
                dispatch({type: "UPDATE_METADATA",
                    payload: customMetadata(metadata.mostCommonFrequentWords)
                    // payload: customMetadata(metadata.mostCommonTopics)
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }


/**
 * patch selected Metadata to filter articles
 * @return {dispatch} Type + payload.
 */
export function patchMetadata(metadata:Array<IMetadata>, savedMetadata:Array<IMetadata> ) {
    return {
        type: "UPDATE_SELECTED_METADATA",
        payload:  {
            metadata: metadata,
            savedMetadata: savedMetadata
        }
    };
}