import React from "react";
import Header from "../landing-header/Header";
import {OuterLayout} from "../landing-header/Outer";
import {Features} from "../landing-header/Features";
import {ExplanationSection} from "../landing-header/Explanaition";
import ScrolledButton from "../landing-header/ScrolledButton";

type ResearchesScreenProps = {};

const ScreenIndex: React.FC<ResearchesScreenProps> = () => {
    return (
        <div >
            <Header/>
            <OuterLayout>
                <Features/>
                <ExplanationSection/>
            </OuterLayout>
            <ScrolledButton/>
        </div>
    );
};

export default ScreenIndex;

ScreenIndex.defaultProps = {};
