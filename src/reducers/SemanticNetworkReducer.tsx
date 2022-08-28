import {SemanticNetworkAction} from "../actions/SemanticNetworkAction";

export interface ISemanticNetwork {
    nodes: Array<any>,
    links: Array<any>,
}

export interface NetworkState {
    network : ISemanticNetwork ;
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
