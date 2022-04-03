// METADATA STATE MANAGEMENT REDUCER
import {IMetadata} from "../components/metadata/Metadata";
import {MetadataAction} from "../actions/MeatadataAction";

export interface MetadataState {
    metadataList : Array<IMetadata>;
    savedMetadataList: Array<IMetadata>;
}

const initState = {
    metadataList: [],
    savedMetadataList: []
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

        default:
            return state;
    }
};

export default MetadataReducer;