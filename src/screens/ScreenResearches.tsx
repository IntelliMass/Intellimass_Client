import React from "react";
import {NetworkContainer} from "../components/network-container/NetworkContainer";

type ResearchesScreenProps = {};

const ScreenResearches: React.FC<ResearchesScreenProps> = () => {

    return (
        <div >
            <NetworkContainer/>
       </div>
    );
};

export default ScreenResearches;

ScreenResearches.defaultProps = {};
