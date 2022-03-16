import React from "react";
import {NetworkContainer} from "../components/network-container/NetworkContainer";
import {NetworkContainerSecond} from "../components/network-container/NetworkContainerSecond";

type ResearchesScreenProps = {};

const ScreenResearches: React.FC<ResearchesScreenProps> = () => {

    return (
        <div >
            <NetworkContainerSecond/>
       </div>
    );
};

export default ScreenResearches;

ScreenResearches.defaultProps = {};
