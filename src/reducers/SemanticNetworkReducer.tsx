import {customLinks, customNodes, NetworkAction} from "../actions/NetworkAction";
import {SemanticNetworkAction} from "../actions/SemanticNetworkAction";

export interface ISemanticNetwork {
    nodes: Array<any>,
    links: Array<any>,
}

export interface NetworkState {
    network : ISemanticNetwork ;
}

export interface ISemanticNode {
    title: string,
    size: number
}

export interface ISemanticLink {
    source: string,
    target: string,
    size: number
}

const initState = {
    network: {
        nodes: [],
        links: []
    },
};


const NetworkReducer = (state: NetworkState = initState, action:SemanticNetworkAction) => {
    switch (action.type) {
        case "GET_SEMANTIC_NETWORK":
            return {
                ...state,
                network: {...action.payload},
            };

        default:
            return state;
    }
};

export default NetworkReducer;
