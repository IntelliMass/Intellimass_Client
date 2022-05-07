import {INetwork} from "../reducers/NetworkReducer";

type getNetworkAction = {type: "GET_NETWORK", payload: any }
type getFilteredNetworkAction = {type: "GET_FILTERED_NETWORK", payload: any}
type UpdateConnectionAction = {type: "UPDATE_CONNECTION_TYPE", payload: string}

export type NetworkAction = getNetworkAction| UpdateConnectionAction|  getFilteredNetworkAction;



let URL_GET_NETWORK = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/network";
let URL_GET_FILTERED_NETWORK = "https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/filter-network";
let URL_GET_NETWORK_NEW = "https://ec2-35-178-32-52.eu-west-2.compute.amazonaws.com:5000/network";


//f3b3b7a0-eed7-49e0-a21a-d540d6cc22db
// https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/network?id=3cf608e5-a8aa-4eed-a2dd-832f51fc4fb3&size=100&feature=Authors
// https://6ic62rws84.execute-api.eu-west-2.amazonaws.com/dev/network?id=44e50536-7d82-4426-b88f-888ad408181f&size=100&feature=Authors

export const customValue = (listAuthorsNames: Array<string>) => {
    return listAuthorsNames.join();
};

// TODO: ADD HERE COLOR
// TODO: ADD HERE SIZE
export const customNodes = (nodes: Array<any>):Array<any> => {
    let newNodes:Array<any>  = [];
    let newNode = {};
    nodes.forEach(node => {
        newNode = {};
        newNode = {...node,
            id: node.title,
            isClusterNode: true,
            name: node.title,
            size: 300,
            color: "#B0C4DE",
        };
        newNodes.push(newNode);
    })
    return newNodes;
}

export const customLinks = (links: Array<any>):Array<any> => {
    let newLinks:Array<any>  = [];
    let newLink = {};
    links.forEach(link => {
        newLink = {};
        newLink = {...link,
            name: customValue(link.value as Array<string>),
            size: 2,
            color: "#555",
        };
        newLinks.push(newLink);
    })
    return newLinks;
}


export const customNodesSize = (network: INetwork) => {
    // COUNT OF CONNECTION ON EACH NODE
    let nodesNewSizes: Array<string> = [];
    let nodesCounter: Array<number> = [];
    let nodesCount = 0;

    if(network){
        network.links.forEach(link => {
            let newNode = link.target;
            // if(nodesNewSizes.length > 0)
            //     console.log(nodesNewSizes)
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
        networkNewNodes[place].size = nodesCounter[index];
    });
    return networkNewNodes;
}


/**
 * Get Network from the server
 * @return {dispatch} Type + payload.
 */
export const getNetwork = (id:string, filterType:string="topics", filterItems:string="", feature:string="Authors", count:number=100): (dispatch: any) => Promise<void> =>
    async dispatch => {
        const url = `${URL_GET_NETWORK_NEW}?id=${id}&count=${count}&feature=${feature}&filterFeature=${filterType}&filterList=${filterItems}`;
        await fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (network:any) {
                const customNetwork = {
                    nodes: customNodes(network.nodes),
                    links: customLinks(network.links),
                }
                const networkNodesAfterResize = {
                    nodes: [...customNodesSize(customNetwork)],
                    links: customNetwork.links
                } ;

                console.log(customNetwork)
                dispatch({type: "GET_NETWORK",
                    payload:  networkNodesAfterResize
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }


/**
 * Get filtered Network from the server
 * @return {dispatch} Type + payload.
 */
export const getFilteredNetwork = (categories:Array<string>): (dispatch: any) => Promise<void> =>
    async dispatch => {
        await fetch(URL_GET_FILTERED_NETWORK)
            .then(function (response) {
                return response.json();
            })
            .then(function (network: any) {
                dispatch({type: "GET_FILTERED_NETWORK",
                    payload:  network
                });
            })
            .catch(function (error) {
                console.log(
                    "There has been a problem with your fetch operation: " + error.message
                );
                throw error;
            });
    }

export function updateConnectionType(type:string) {
    return {
        type: "UPDATE_CONNECTION_TYPE",
        payload: type,
    };
}
