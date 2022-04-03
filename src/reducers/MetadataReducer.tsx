// METADATA STATE MANAGEMENT REDUCER
import {IMetadata} from "../components/metadata/Metadata";
import {MetadataAction} from "../actions/MeatadataAction";

export interface MetadataState {
    metadataList : Array<IMetadata>;
    savedMetadataList: Array<IMetadata>;
    metadataType: string;
}

const initState = {
    metadataList: [],
    savedMetadataList: [],
    metadataType: 'frequentWords'
};

const MetadataReducer = (state: MetadataState = initState, action:MetadataAction) => {
    switch (action.type) {
        case "UPDATE_METADATA":
            return {
                ...state,
                metadataList: [...action.payload],
                savedMetadataList: []
            };

        case "UPDATE_SELECTED_METADATA":
            return {
                ...state,
                metadataList: [...action.payload.metadata],
                savedMetadataList: [...action.payload.savedMetadata]
            };

        case "UPDATE_METADATA_TYPE":
            return {
                ...state,
                metadataType: action.payload,
            };

        default:
            return state;
    }
};

export default MetadataReducer;