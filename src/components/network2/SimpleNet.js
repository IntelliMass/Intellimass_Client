import React, { useRef, useEffect, useState } from "react";
import ForceGraph3D from "react-force-graph-3d";
import "./SimpleNet.scss"
import ForceGraph2D from "react-force-graph-2d";


export function SimpleNet(props) {
    const {network, selectedNode, setSelectedNode, actionOption } = props;
    const [hoveredNode, setHoveredNode] = useState(null);
    const forceRef = useRef(null);
    const [customWidth, setCustomWidth] = useState(1200)


    useEffect(()=>{
        console.log(network)
        forceRef.current.d3Force("charge").strength(-400);
    },[network])

    useEffect(()=>{
        if( actionOption === "none")
            setCustomWidth(1200);
        else
            setCustomWidth(800);
    },[actionOption])

    const NodeHover = () => {
        return(
            <div className="node-hover">
            </div>
        );
    };

    function nodePaint({ id, x, y }, color, ctx, size) {
        ctx.fillStyle = color;
        console.log(size)
        [
            () => { ctx.beginPath(); ctx.arc(x, y, size, 0, 2 * Math.PI, false); ctx.fill(); } // circle
        ][id%4]();
    }

    const NodeClicked = () => {
        return(
            <div className="node-clicked">
            </div>
        );
    };

    return (
        <div className="network-wrapper">
            {selectedNode? <NodeClicked/> : null}
            {hoveredNode? <NodeHover/> : null}
             {/*ForceGraph2D*/}
             <ForceGraph3D
                graphData={network}
                nodeId="title"
                nodeLabel="title"
                height={800}
                width={customWidth}
                linkWidth={2}
                linkColor={"#FFFFFF"}
                nodeAutoColorBy="cluster"
                nodeVal='size'
                backgroundColor={'#1e3b5e'}
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
