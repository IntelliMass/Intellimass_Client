import React, { useRef, useEffect, useState } from "react";
import ForceGraph3D from "react-force-graph-3d";
import "../network2/SimpleNet.scss"


export function SemanticNetworkComp(props) {
    const {network } = props;
    const [hoveredNode, setHoveredNode] = useState(null);
    const forceRef = useRef(null);


    useEffect(()=>{
        if(network)
        forceRef.current.d3Force("charge").strength(-400);
    },[network])


    return (
        <div className="network-wrapper">
            {network &&  <ForceGraph3D
                graphData={network}
                nodeId="title"
                nodeLabel="title"
                height={700}
                width={700}
                linkWidth={2}
                // linkColor={'red'}
                // nodeAutoColorBy="cluster"
                nodeVal='size'
                backgroundColor={'white'}
                // linkCurvature={0.05}
                // enablePointerInteraction={true}
                enableNodeDrag={true}
                ref={forceRef}
                onNodeHover={(node) => {
                    if (node) {
                        setHoveredNode(node);
                    } else {
                        setHoveredNode(null);
                    }
                }}
                // onNodeClick={(node) => {
                //     if (node) {
                //         setSelectedNode(node);
                //     } else {
                //         setSelectedNode(null);
                //     }
                // }}
            />}
        </div>
    );
}
