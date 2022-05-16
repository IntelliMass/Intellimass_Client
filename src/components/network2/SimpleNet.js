import React, { useRef, useEffect, useState } from "react";
import ForceGraph3D from "react-force-graph-3d";
import "./SimpleNet.scss"
import {ArticleCard} from "../article-card/ArticleCard";


export function SimpleNet(props) {
    const {network, selectedNode, setSelectedNode } = props;
    const [hoveredNode, setHoveredNode] = useState(null);
    const forceRef = useRef(null);

    useEffect(() => {
        console.log(network);
        forceRef.current.d3Force("charge").strength(-400);
    },[]);

    useEffect(()=>{
        console.log(network);
    },[network])

    const NodeHover = () => {
        return(
            <div className="node-hover">
                {/*<ArticlePopover/>*/}
            </div>
        );
    };

    function nodePaint({ id, x, y }, color, ctx, size) {
        console.log('yo')
        ctx.fillStyle = color;
        console.log(size)
        [
            () => { ctx.beginPath(); ctx.arc(x, y, size, 0, 2 * Math.PI, false); ctx.fill(); } // circle
        ][id%4]();
    }

    const NodeClicked = () => {
        return(
            <div className="node-clicked">
                {/*<ArticleCard article={selectedNode}/>*/}
            </div>
        );    
    };

    return (
        <div className="network-wrapper">
            {selectedNode? <NodeClicked/> : null}
            {hoveredNode? <NodeHover/> : null}
            <ForceGraph3D
                graphData={network}
                nodeId="title"
                nodeLabel="title"
                height={700}
                width={1000}
                linkWidth={10}
                linkColor={"#FFFFFF"}
                nodeAutoColorBy="cluster"
                nodeVal='size' 
                // backgroundColor={'#f4f6f8'}
                linkCurvature={0.05}
                enablePointerInteraction={true}
                enableNodeDrag={true}
                // zoomToFit={{ms: 0, px: 0}}
                ref={forceRef}
                onNodeHover={(node) => {
                    if (node) {
                        setHoveredNode(node);
                    } else {
                        setHoveredNode(null);
                    }
                }}
                onNodeClick={(node) => {
                    if (node) {
                        console.log(node)
                        setSelectedNode(node);
                    } else {
                        setSelectedNode(null);
                    }
                }}
            />
        </div>
    );
}
