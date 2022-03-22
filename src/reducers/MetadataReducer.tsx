// METADATA STATE MANAGEMENT REDUCER
import {IMetadata} from "../components/metadata/Metadata";
import {MetadataAction} from "../actions/MeatadataAction";

export interface MetadataState {
    metadataList : Array<IMetadata>;
    savedMetadataList: Array<IMetadata>;
}

const initState = {
    metadataList: [
        // {title: "Networks", rank: 500, isSelected: false, id: "uuid1"},
        // {title: "Cyber", rank: 60, isSelected: false, id: "uuid2"},
        // {title: "Chips", rank: 100, isSelected: true, id: "uuid3"},
        // {title: "Software", rank: 200, isSelected: true, id: "uuid4"},
        // {title: "Hardware", rank: 90, isSelected: false, id: "uuid5"},
        // {title: "Intel company", rank: 90, isSelected: false, id: "uuid6"},
        // {title: "Apple company", rank: 90, isSelected: false, id: "uuid7"},
        // {title: "Android cellphones", rank: 90, isSelected: false, id: "uuid8"},
        // {title: "Networks", rank: 500, isSelected: false, id: "uuid9"},
        // {title: "Cyber", rank: 60, isSelected: false, id: "uuid10"},
        // {title: "Chips", rank: 100, isSelected: true, id: "uuid11"},
        // {title: "Software", rank: 200, isSelected: true, id: "uuid12"},
        // {title: "Hardware", rank: 90, isSelected: false, id: "uuid13"},
        // {title: "Intel company", rank: 90, isSelected: false, id: "uuid14"},
        // {title: "Apple company", rank: 90, isSelected: false, id: "uuid15"},
        // {title: "Android cellphones", rank: 90, isSelected: false, id: "uuid16"},
        // {title: "Networks", rank: 500, isSelected: false, id: "uuid17"},
        // {title: "Cyber", rank: 60, isSelected: false, id: "uuid18"},
        // {title: "Chips", rank: 100, isSelected: true, id: "uuid19"},
        // {title: "Software", rank: 200, isSelected: true, id: "uuid20"},
        // {title: "Hardware", rank: 90, isSelected: false, id: "uuid21"},
        // {title: "Intel company", rank: 90, isSelected: false, id: "uuid22"},
        // {title: "Apple company", rank: 90, isSelected: false, id: "uuid23"},
        // {title: "Android cellphones", rank: 90, isSelected: false, id: "uuid24"},
    ],
    savedMetadataList: [
        // {title: "IOT", rank: 10, isSelected: false, id: "uuid25"},
        // {title: "Architecture", rank: 20, isSelected: false, id: "uuid26"},
    ]
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
                metadataList: [...action.payload.metadataList],
                savedMetadataList: [...action.payload.savedMetadataList]
            };

        default:
            return state;
    }
};

export default MetadataReducer;