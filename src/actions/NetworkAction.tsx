/**
 * Redux architecture
 * Network action file
 * */
import {INetwork} from "../reducers/NetworkReducer";

//ACTION TYPES
type getNetworkAction = {type: "GET_NETWORK", payload: any }
type getFilteredNetworkAction = {type: "GET_FILTERED_NETWORK", payload: any}
type UpdateConnectionAction = {type: "UPDATE_CONNECTION_TYPE", payload: string}

export type NetworkAction = getNetworkAction| UpdateConnectionAction|  getFilteredNetworkAction;

let URL_GET_NETWORK_NEW = "https://api.intellimass.net/network";

export const customValue = (listAuthorsNames: Array<string>) => {
    return listAuthorsNames.join();
};

/**
 * Middleware for custom nodes
 *
 * @param  nodes list
 * @return {dispatch} Type + payload.
 */
export const customNodes = (nodes: Array<any>):Array<any> => {
    let newNodes:Array<any>  = [];
    let newNode = {};
    nodes.forEach(node => {
        newNode = {};
        newNode = {...node,
            id: node.title,
            isClusterNode: true,
            name: node.title,
            size: node.size/200
        };
        newNodes.push(newNode);
    })
    return newNodes;
}

/**
 * Middleware for custom links
 *
 * @param  links list
 * @return {dispatch} Type + payload.
 */
export const customLinks = (links: Array<any>):Array<any> => {
    let newLinks:Array<any>  = [];
    let newLink = {};
    links.forEach(link => {
        newLink = {};
        newLink = {...link,
            name: customValue(link.value as Array<string>),
            size: 2,
            color: "black",
        };
        newLinks.push(newLink);
    })
    return newLinks;
}

/**
 * Middleware for custom semantic links
 *
 * @param  links list
 * @return {dispatch} Type + payload.
 */
export const customSemanticLinks = (links: Array<any>):Array<any> => {
    let newLinks:Array<any>  = [];
    let newLink = {};
    console.log(links[0])
    links.forEach(link => {
        newLink = {};
        newLink = {...link,
            name:link.target,
            size: link.size/10,
            color: "white",
        };
        newLinks.push(newLink);
    })
    return newLinks;
}


/**
 * Middleware for custom nodes
 *
 * @param  links list
 * @return {dispatch} Type + payload.
 */
export const customNodesSize = (network: INetwork) => {
    // COUNT OF CONNECTION ON EACH NODE
    let nodesNewSizes: Array<string> = [];
    let nodesCounter: Array<number> = [];
    let nodesCount = 0;

    if(network){
        network.links.forEach(link => {
            let newNode = link.target;
            if (nodesNewSizes && nodesNewSizes.indexOf(newNode) != -1) {
                nodesCounter[nodesNewSizes.indexOf(newNode)] = nodesCounter[nodesNewSizes.indexOf(newNode)] + 10;
            } else {
                nodesNewSizes.push(newNode);
                nodesCounter.push(10);
                nodesCount++;
            }
        })
    }


    let networkNewNodes = [...network.nodes];
    // RUN ON THE NODES AND CHANGE THE SIZE TO NUMBER OF COUNT
    nodesNewSizes.forEach((newNode, index) => {
        let place = networkNewNodes.findIndex(foundNode => foundNode.title == newNode);
        if (place !== -1 && networkNewNodes) networkNewNodes[place].size = nodesCounter[index];
    });
    return networkNewNodes;
}


/**
 * Get Network from the server
 * authors/abstract/title/default
 * @return {dispatch} Type + payload.
 */
export const getNetwork = (id:string, filterItems:string="", feature:string="frequentWords", count:number=100, clusters:string, numOfClusters:number): (dispatch: any) => Promise<void> =>
    async dispatch => {
        const url = `${URL_GET_NETWORK_NEW}?id=${id}&count=${count}&feature=${feature}&filters=${filterItems}&clusters=${clusters}&numOfClusters=${numOfClusters}`;

        await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (network:any) {
                const customNetwork = {
                    nodes: customNodes(network.network.nodes),
                    links: customLinks(network.network.links),
                }
                dispatch({type: "GET_NETWORK",
                    payload:  customNetwork
                });
            })
            .catch(function (error) {
                throw error;
            });
    }

/**
 * Upadate the conection network type
 *
 * @param  type
 * @return {dispatch} Type + payload.
 */
export function updateConnectionType(type:string) {
    return {
        type: "UPDATE_CONNECTION_TYPE",
        payload: type,
    };
}
