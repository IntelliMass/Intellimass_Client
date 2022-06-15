import React, {useRef, useEffect, useState, useCallback} from "react";
import ForceGraph3D from "react-force-graph-3d";
import "../network2/SimpleNet.scss"
import SpriteText from 'three-spritetext';


export function SemanticNetworkComp(props) {
    const { network } = props;
    const [hoveredNode, setHoveredNode] = useState(null);
    const forceRef = useRef(null);


    useEffect(()=>{
        console.log('Woop')
        console.log(network)
        if (network !== null && network.nodes.length > 0){
            console.log(network)
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

    // useEffect(()=>{
    //     console.log(network)
    // },[])

    return (
        <div className="network-wrapper">
            {network !== undefined && network.nodes.length > 0 &&
            <div>
                <ForceGraph3D
                    graphData={network}
                    nodeId="title"
                    nodeLabel="title"
                    nodeThreeObject={node => {
                        const sprite = new SpriteText(node.title);
                        sprite.color = 'pink';
                        sprite.textHeight = 8;
                        return sprite;
                    }}
                    height={700}
                    width={700}
                    linkWidth={'size'}

                    // linkColor={'red'}
                    // nodeAutoColorBy="cluster"
                    linkOpacity={0.3}
                    nodeVal='size'
                    backgroundColor={'black'}
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
                    zoomToFit={{ms: 0, px: 0}}
                    onNodeClick={handleClick}
                />
            </div>
            }
        </div>
    );
}

