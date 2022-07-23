import React, {useRef, useEffect, useState, useCallback} from "react";
import ForceGraph3D from "react-force-graph-3d";
import "../network2/SimpleNet.scss"
import SpriteText from 'three-spritetext';


export function SemanticNetworkComp(props) {
    const { network } = props;
    const forceRef = useRef(null);


    useEffect(()=>{
        if (network !== null && network.nodes.length > 0){
            forceRef.current.d3Force("charge").strength(-400);
        }
    },[network])

    const handleClick = useCallback(node => {
        // Aim at node from outside it
        const distance = 40;
        const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

        forceRef.current.cameraPosition(
            { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
            node, // lookAt ({ x, y, z })
            3000  // ms transition duration
        );
    }, [forceRef]);

    return (

            <div>
                {network !== undefined && network.nodes.length > 0 &&
                <ForceGraph3D
                    graphData={network}
                    nodeId="title"
                    nodeLabel="title"
                    nodeThreeObject={node => {
                        const sprite = new SpriteText(node.title);
                        sprite.color = 'pink';
                        sprite.textHeight = node.size;
                        return sprite;
                    }}
                    width={1630}
                    height={950}
                    linkWidth={'size'}
                    linkOpacity={0.3}
                    nodeVal='size'
                    backgroundColor={'black'}
                    enableNodeDrag={true}
                    ref={forceRef}
                    zoomToFit={{ms: 0, px: 0}}
                    onNodeClick={handleClick}
                />
                }
            </div>
    );
}

