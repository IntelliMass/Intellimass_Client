import React, { useEffect, useRef, useState, useMemo } from "react";
import './NetworkContainer.scss';
import ForceGraph2D from "react-force-graph-2d";
import {clusterIds} from "../network/exampleData";

type NetworkContainerProps = {};

export const NetworkContainer: React.FC<NetworkContainerProps> = () => {
    // CENTER
    const [initialCenter, setInitialCenter] = useState(true);
    const [clusters, setClusters] = useState([]);

    const forceRef = useRef();

    return (
        <div className="network-container">
            asda
        </div>
    );
};

NetworkContainer.defaultProps = {};
