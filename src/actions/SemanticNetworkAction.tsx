import {NetworkState} from "../reducers/SemanticNetworkReducer";
import {customLinks, customNodes, customSemanticLinks} from "./NetworkAction";

type getNetworkAction = {type: "GET_SEMANTIC_NETWORK", payload: any };
export type SemanticNetworkAction = getNetworkAction;

let URL_GET_SEMANTIC_NETWORK = "https://api.intellimass.net/semanticNetwork/set";

/**
 * Get Network from the server
 * authors/abstract/title/default
 * @return {dispatch} Type + payload.
 */
export const getSemanticNetwork = (id:string, filterItems:string="", feature:string="frequentWords", count:number=100, clusters:string, numOfClusters:number): (dispatch: any) => Promise<void> =>
    async dispatch => {
        const url = `${URL_GET_SEMANTIC_NETWORK}?id=${id}&count=${count}&feature=${feature}&filters=${filterItems}&clusters=${clusters}&numOfClusters=${numOfClusters}`;

        await fetch(url, {
            headers: {
                'use-mock': 'true'
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (network:NetworkState) {
                const customNetwork = {
                    nodes: customNodes(network.network.nodes),
                    links: customSemanticLinks(network.network.links),
                }
                dispatch({type: "GET_SEMANTIC_NETWORK",
                    payload:  customNetwork
                });
            })
            .catch(function (error) {
                throw error;
            });
    }

