/**
 * Redux architecture
 * Properties action file
 * */

import {IMetadata, NewMetadata, ServerMetadata} from "../reducers/MetadataReducer";
import {IMetadataWithCategory} from "../components/new-metadata-list/NewMetadataList";
import {ServerStringMetadata} from "../reducers/BreadcrumbReducer";

//ACTION TYPES
type UpdateMetadataAction = {type: "UPDATE_METADATA", payload: any }
type UpdateSelectedMetadataAction = {type: "UPDATE_SELECTED_METADATA", payload: any}
type ResetMetadataAction = {type: "RESET_METADATA", payload: any}
type UpdateMetadataFromBreadcrumbsAction = {type: "UPDATE_SELECTED_METADATA_FROM_BREADCRUMB", payload: string[]}

export type MetadataAction = UpdateMetadataAction|  UpdateSelectedMetadataAction | ResetMetadataAction | UpdateMetadataFromBreadcrumbsAction;

let URL_GET_METADATA_NEW = "https://api.intellimass.net/metadata";


/**
 * Middleware for custom metadata
 *
 * @param  one metadata object
 * @return new metadata custom object
 */
export const customMetadataMiddleware = (metadata:ServerMetadata):NewMetadata  =>{
    let authors: Array<IMetadata> = [];
    let topics:  Array<IMetadata> = [];
    let fields_of_study: Array<IMetadata> = [];
    let common_words: Array<IMetadata> = [];
    let years: Array<IMetadata>  = [];

    if (metadata.metadata){
        metadata.metadata.authors.forEach(item => authors.push({...item, id: item.title,  isSelected: false }));
        metadata.metadata.topics.forEach(item => topics.push({...item, id: item.title,  isSelected: false }));
        metadata.metadata.fields_of_study.forEach(item => fields_of_study.push({...item, id: item.title,  isSelected: false }));
        metadata.metadata.common_words.forEach(item => common_words.push({...item, id: item.title,  isSelected: false }));
        metadata.metadata.years.forEach(item => years.push({...item, id: item.title,  isSelected: false }));
    }

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
export const getMetadata = (id:string, count:number=100, filterItems:string="", clusters:string="", numOfClusters:number=4): (dispatch: any) => Promise<void> =>
    async dispatch => {
        const url = `${URL_GET_METADATA_NEW}?id=${id}&count=${count.toString()}&filters=${filterItems}&clusters=${clusters}&numOfClusters=${numOfClusters}`;
        await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (metadata:any) {
                dispatch({type: "UPDATE_METADATA",
                    payload: customMetadataMiddleware(metadata)
                });
            })
            .catch(function (error) {
                throw error;
            });
    }


/**
 * patch selected Metadata to filter articles
 * @return {dispatch} Type + payload.
 */
export function patchMetadata(metadata:Array<IMetadata>, savedMetadata:Array<IMetadataWithCategory> ) {
    return {
        type: "UPDATE_SELECTED_METADATA",
        payload:  {
            metadata: metadata,
            savedMetadata: savedMetadata
        }
    };
}

export function resetMetadata() {
    return {
        type: "RESET_METADATA",
        payload:  {
            metadata: [],
            savedMetadata: []
        }
    };
}

/**
 * upload the metadata from breadcrum state
 *
 * @param  list of metadata
 */
export function updateMetadataFromBreadcrumbs(items:ServerStringMetadata[]) {

    let newMetadataArray:IMetadata;
    let newMetadataCategoryArray:IMetadataWithCategory[] = [];
    items.forEach(item => {
        newMetadataArray = {
            title: item.title,
            rank: 39,
            isSelected: false,
            id: item.title
        };
        newMetadataCategoryArray.push({metadata: newMetadataArray, category: item.type});
    });

    return {
        type: "UPDATE_SELECTED_METADATA_FROM_BREADCRUMB",
        payload:  newMetadataCategoryArray
    };
}
