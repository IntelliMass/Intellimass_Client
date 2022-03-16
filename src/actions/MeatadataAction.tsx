import {log} from "util";

type UpdateMetadataAction = {type: "UPDATE_METADATA", payload: any }
type UpdateSelectedMetadataAction = {type: "UPDATE_SELECTED_METADATA", payload: any}
export type MetadataAction = UpdateMetadataAction|  UpdateSelectedMetadataAction;

let URL_GET_METADATA = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/metadata";
let URL_PATCH_METADATA = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/categories";

/**
 * Get Metadata from the server
 * @return {dispatch} Type + payload.
 */
export const getMetadata = (id:string): (dispatch: any) => Promise<void> =>
    async dispatch => {
        console.log(id)
        const url = `${URL_GET_METADATA}?id=${id}&size=100`;
        console.log(url)
        await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (metadata:any) {
                dispatch({type: "UPDATE_METADATA",
                    payload: metadata
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
export const patchMetadata = (categories:Array<string>): (dispatch: any) => Promise<void> =>
    async dispatch => {
        await fetch(URL_PATCH_METADATA)
            .then(function (response) {
                return response.json();
            })
            .then(function (res: any) {
                console.log(res)
                dispatch({type: "UPDATE_SELECTED_METADATA",
                    payload:  categories
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }
