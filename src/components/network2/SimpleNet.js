import React, { useRef, useEffect, useState } from "react";
import ForceGraph3D from "react-force-graph-3d";
import "./SimpleNet.scss"
import {ArticleCard} from "../article-card/ArticleCard";


export function SimpleNet(props) {
    const {network, selectedNode, setSelectedNode } = props;
    const [hoveredNode, setHoveredNode] = useState(null);
    const forceRef = useRef(null);

    useEffect(() => {
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
                nodeLabel="title"
                height={700}
                width={1000}
                backgroundColor={'#f4f6f8'}
                linkCurvature="curvature"
                enablePointerInteraction={true}
                enableNodeDrag={true}
                // linkDirectionalParticleWidth={1}
                // linkDirectionalArrowRelPos={1}
                // linkDirectionalArrowLength={4}
                //nodeRelSize="nodeRelSize"
                nodeCanvasObject={(node, ctx) =>  {
                    console.log('hey')
                    nodePaint(node, node.color, ctx, node.size)
                }}
                //nodePointerAreaPaint={nodePaint}
                linkWidth={3}
                linkColor={"#FFA07A"}

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
