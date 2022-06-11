// NETWORK STATE MANAGEMENT REDUCER
import {customLinks, customNodes, NetworkAction} from "../actions/NetworkAction";

export interface INetwork {
    nodes: Array<any>,
    links: Array<any>,
}

export interface NetworkState {
    network : INetwork ;
    filteredNetwork: INetwork | [];
    connectionType: string;
}
// TODO: MAKE EFFECT ON:
// 1. SIZE OF NODE - by some rank?
// 2. COLOR OF NODE - by categories to categories color
// 3. SIZE OF CONNECTION - size ++ on each connection

const initState = {
    network: {
        nodes: [],
        links: []
    },
    filteredNetwork: {
        nodes:[],
        links: []
    },
    connectionType: 'Authors'
};


const realInitState = {
    ...initState,
    network: {
        nodes: customNodes(initState.network.nodes),
        links: customLinks(initState.network.links),
    }
}

const NetworkReducer = (state: NetworkState = realInitState, action:NetworkAction) => {
    switch (action.type) {
        case "GET_NETWORK":
            return {
                ...state,
                network: {...action.payload},
                filteredNetwork: {}
            };

        case "GET_FILTERED_NETWORK":
            return {
                ...state,
                metadataList: [...action.payload.metadataList],
                savedMetadataList: [...action.payload.savedMetadataList]
            };

        case "UPDATE_CONNECTION_TYPE":
            return {
                ...state,
                connectionType: action.payload,
            };

        default:
            return state;
    }
};

export default NetworkReducer;
