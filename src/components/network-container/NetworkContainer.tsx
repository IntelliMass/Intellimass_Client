import React, { useEffect, useRef, useState, useMemo } from "react";
import './NetworkContainer.scss';
import ForceGraph2D from "react-force-graph-2d";
import {clusterIds, data} from "../network/exampleData";
import {Cluster, CLUSTERS, Node, Link, ARTICLES_LINKS_BY_AUTHORS, ARTICLES_NODES_AUTHORS} from "./data/ArticlesMock";


type NetworkContainerProps = {};

export const NetworkContainer: React.FC<NetworkContainerProps> = () => {
    // CENTER
    const [initialCenter, setInitialCenter] = useState(true);
    const [clusters, setClusters] = useState<Array<Cluster>>([...CLUSTERS]);
    const [nodes, setNodes] = useState<Array<Node>>([...ARTICLES_NODES_AUTHORS]);
    const [links, setLinks] = useState<Array<Link>>([...ARTICLES_LINKS_BY_AUTHORS]);

    const forceRef = useRef();



    const graphData = useMemo(() => {
        return {
            nodes: clusters,
            links: links
        };
    }, []);

    const handleNodeClick = (node:any) => {
        // toggleClusterCollapse(node.id);
        // if (collapsedClusters.includes(node.id)) {
        //     forceRef.current.zoom(3.5, 400);
        //     forceRef.current.centerAt(node.x, node.y, 400);
        // }
    };

    return (
        <div className="network-container">
            {/*<ForceGraph2D*/}
            {/*    width={window.innerWidth}*/}
            {/*    height={700}*/}
            {/*    ref={forceRef}*/}
            {/*    onNodeClick={handleNodeClick}*/}
            {/*    graphData={graphData}*/}
            {/*    cooldownTicks={50}*/}
            {/*    nodeRelSize={1}*/}
            {/*    onEngineStop={() => {*/}
            {/*        // if (initialCenter) {*/}
            {/*        //     forceRef.current.zoomToFit();*/}
            {/*        // }*/}
            {/*        // setInitialCenter(false);*/}
            {/*    }}*/}
            {/*    nodeCanvasObjectMode={() => "after"}*/}
            {/*    nodeCanvasObject={(node, ctx, globalScale) => {*/}
            {/*        const label = node.name;*/}
            {/*        const fontSize = 14 * (node.size / 1500)*/}

            {/*        ctx.font = `${fontSize}px Sans-Serif`;*/}
            {/*        ctx.textAlign = "center";*/}
            {/*        ctx.textBaseline = "middle";*/}
            {/*        ctx.fillStyle = node.isClusterNode ? "white" : "black"; //node.color;*/}
            {/*        if (node.isClusterNode) {*/}
            {/*            const lineHeight = fontSize * 1.2;*/}
            {/*            const lines = label.split(",");*/}
            {/*            let x = node.x;*/}
            {/*            let y = node.y - lineHeight;*/}
            {/*            for (let i = 0; i < lines.length; ++i) {*/}
            {/*                ctx.fillText(lines[i], x, y);*/}
            {/*                y += lineHeight;*/}
            {/*            }*/}
            {/*        } else if (globalScale >= 3.5) {*/}
            {/*            ctx.fillText(label, node.x, node.y + 2.5);*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    enableNodeDrag={false}*/}
            {/*    nodeVisibility={(node) => {*/}
            {/*    //     if (collapsedClusters.includes(node.clusterId)) {*/}
            {/*    //         return false;*/}
            {/*    //     } else return true;*/}
            {/*        return true*/}
            {/*    }}*/}
            {/*    linkVisibility={(link) => {*/}
            {/*        // if (*/}
            {/*        //     collapsedClusters.includes(link.source.id) &&*/}
            {/*        //     !link.target.isClusterNode*/}
            {/*        // ) {*/}
            {/*        //     return false;*/}
            {/*        // } else if (*/}
            {/*        //     hiddenClusters.includes(link.source.id) ||*/}
            {/*        //     hiddenClusters.includes(link.target.id)*/}
            {/*        // ) {*/}
            {/*        //     return false;*/}
            {/*        // } else return true;*/}
            {/*        return true*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    );
};

NetworkContainer.defaultProps = {};
