import {IMetadata, NewMetadata, ServerMetadata} from "../reducers/MetadataReducer";

type UpdateMetadataAction = {type: "UPDATE_METADATA", payload: any }
type UpdateSelectedMetadataAction = {type: "UPDATE_SELECTED_METADATA", payload: any}

export type MetadataAction = UpdateMetadataAction|  UpdateSelectedMetadataAction;

let URL_GET_METADATA = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/metadata";
let URL_PATCH_METADATA = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/categories";
let URL_GET_METADATA_NEW = "https://ec2-35-178-32-52.eu-west-2.compute.amazonaws.com:5000/metadata";



export const customMetadataMiddleware = (metadata:ServerMetadata):NewMetadata  =>{
    console.log(metadata)
    let authors: Array<IMetadata> = [];
    let topics:  Array<IMetadata> = [];
    let fields_of_study: Array<IMetadata> = [];
    let common_words: Array<IMetadata> = [];
    let years: Array<IMetadata>  = [];

    metadata.metadata.authors.forEach(item => authors.push({...item, id: item.title,  isSelected: false }));
    metadata.metadata.topics.forEach(item => topics.push({...item, id: item.title,  isSelected: false }));
    metadata.metadata.fields_of_study.forEach(item => fields_of_study.push({...item, id: item.title,  isSelected: false }));
    metadata.metadata.common_words.forEach(item => common_words.push({...item, id: item.title,  isSelected: false }));
    metadata.metadata.years.forEach(item => years.push({...item, id: item.title,  isSelected: false }));

    const newMetadata = {
        metadata: {
            authors : authors,
            topics :  topics,
            fields_of_study :fields_of_study,
            common_words : common_words,
            years : years
        }
    }
    return newMetadata;
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
                console.log(metadata)
                dispatch({type: "UPDATE_METADATA",
                    payload: customMetadataMiddleware(metadata)
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
