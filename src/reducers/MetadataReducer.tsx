// METADATA STATE MANAGEMENT REDUCER
import {MetadataAction} from "../actions/MeatadataAction";
import {IMetadataWithCategory} from "../components/new-metadata-list/NewMetadataList";

export interface MetadataState {
    metadataList : Array<IMetadata>;
    savedMetadataList: Array<IMetadata>;
    metadataType: string;
}

export interface RankMetadata {
    rank: number,
    title: string | number
}

export interface ServerMetadata {
    metadata: {
        authors: Array<RankMetadata>,
        topics:  Array<RankMetadata>,
        fields_of_study: Array<RankMetadata>,
        common_words: Array<RankMetadata>,
        years: Array<RankMetadata>
    }
}

export interface NewMetadata {
    metadata: {
        authors: Array<IMetadata>,
        topics:  Array<IMetadata>,
        fields_of_study: Array<IMetadata>,
        common_words: Array<IMetadata>,
        years: Array<IMetadata>
    }
}

export interface NewMetadataState {
    metadataList : NewMetadata;
    savedMetadataList: Array<IMetadataWithCategory>;
}

export interface NewIMetadata {
    rank: number,
    title: string | number;
}


export type IMetadata = {
    title: string | number;
    rank: number;
    isSelected: boolean;
    id: string | number;
}


const initState: NewMetadataState = {
    metadataList:{
        metadata: {
            authors: [],
            topics:  [],
            fields_of_study: [],
            common_words: [],
            years: []
        }
    },
    savedMetadataList: []
};

const MetadataReducer = (state: NewMetadataState = initState, action:MetadataAction) => {
    switch (action.type) {
        case "UPDATE_METADATA":
            return {
                ...state,
                metadataList: {...action.payload},
            };

        case "UPDATE_SELECTED_METADATA":
            return {
                ...state,
                metadataList: { ...action.payload.metadata },
                savedMetadataList: [...action.payload.savedMetadata ]
            };

        case "UPDATE_SELECTED_METADATA_FROM_BREADCRUMB":
            return {
                ...state,
                savedMetadataList: [...action.payload ]
            };

        case "RESET_METADATA":
            return {
                ...state,
                metadataList: [],
                savedMetadataList: []
            };
        default:
            return state;
    }
};

export default MetadataReducer;
