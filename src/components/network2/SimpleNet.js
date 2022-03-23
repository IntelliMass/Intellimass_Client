import React, { useRef, useEffect, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
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
            <ForceGraph2D
                graphData={network}
                nodeLabel="paperId"
                height={700}
                width={1000}

                linkCurvature="curvature"
                enablePointerInteraction={true}
                enableNodeDrag={true}
                // linkDirectionalParticleWidth={1}
                //
                // linkDirectionalArrowRelPos={1}
                // linkDirectionalArrowLength={4}

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
