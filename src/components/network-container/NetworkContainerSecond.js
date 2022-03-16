import React, { useEffect, useRef, useState, useMemo } from "react";
import './NetworkContainer.scss';
import ForceGraph2D from "react-force-graph-2d";
import {clusterIds, data} from "../network/exampleData";
import { CLUSTERS, ARTICLES_LINKS_BY_AUTHORS, ARTICLES_NODES_AUTHORS} from "./data/ArticlesMock";



export const NetworkContainerSecond = () => {
    // CENTER
    const [initialCenter, setInitialCenter] = useState(true);
    const [clusters, setClusters] = useState([...CLUSTERS]);
    const [nodes, setNodes] = useState([...ARTICLES_NODES_AUTHORS]);
    const [links, setLinks] = useState([...ARTICLES_LINKS_BY_AUTHORS]);
    const [graph, setGraph] = useState({nodes:nodes, links:links});

    const forceRef = useRef();

    const graphData = useMemo(() => {
        return {
            nodes: clusters,
            links: links
        };
    }, []);

    useEffect(()=>{
        console.log(clusters)
        console.log(nodes)
        console.log(links)
        console.log(graphData)
    },[])

    useEffect(() => {
        // forceRef.current.d3Force("collide", d3.forceCollide(13));
        forceRef.current.d3Force("charge").strength(-40);
        forceRef.current.d3Force("link").distance(50);
        forceRef.current.d3Force("charge").distanceMax(150);
    }, []);


    const handleNodeClick = (node) => {
        console.log(node);
        // toggleClusterCollapse(node.id);
        // if (collapsedClusters.includes(node.id)) {
        //     forceRef.current.zoom(3.5, 400);
        //     forceRef.current.centerAt(node.x, node.y, 400);
        // }
    };

    return (
        <div className="network-container">
            <ForceGraph2D
                width={window.innerWidth}
                height={700}
                ref={forceRef}
                onNodeClick={handleNodeClick}
                graphData={graphData}
                cooldownTicks={50}
                nodeRelSize={1}
                onEngineStop={() => {
                    if (initialCenter) {
                        forceRef.current.zoomToFit();
                    }
                    setInitialCenter(false);
                }}
                nodeCanvasObjectMode={() => "after"}
                nodeCanvasObject={(node, ctx, globalScale) => {
                    const label = node.article.paperId;
                    const fontSize = 14 * (node.size / 1500)

                    ctx.font = `${fontSize}px Sans-Serif`;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = node.color;
                    //if (node.isClusterNode) {
                        // console.log();
                        const lineHeight = fontSize * 1.2;
                        const lines = label.split(",");
                        let x = node.x;
                        let y = node.y - lineHeight;
                        for (let i = 0; i < lines.length; ++i) {
                            ctx.fillText(lines[i], x, y);
                            y += lineHeight;
                        }
                    // } else if (globalScale >= 3.5) {
                    //     ctx.fillText(label, node.x, node.y + 2.5);
                    // }
                }}
                enableNodeDrag={false}
                nodeVisibility={(node) => {
                    //     if (collapsedClusters.includes(node.clusterId)) {
                    //         return false;
                    //     } else return true;
                    return true
                }}
                linkVisibility={(link) => {
                    // if (
                    //     collapsedClusters.includes(link.source.id) &&
                    //     !link.target.isClusterNode
                    // ) {
                    //     return false;
                    // } else if (
                    //     hiddenClusters.includes(link.source.id) ||
                    //     hiddenClusters.includes(link.target.id)
                    // ) {
                    //     return false;
                    // } else return true;
                    return true
                }}
            />
        </div>
    );
};

