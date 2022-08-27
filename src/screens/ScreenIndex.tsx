import React from "react";
import Header from "../landing-header/Header";
import {OuterLayout} from "../landing-header/Outer";
import {CardSection} from "../landing-header/CardSection";
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
                {/*<CardSection />*/}
            </OuterLayout>
            <ScrolledButton/>
        </div>
    );
};

export default ScreenIndex;

ScreenIndex.defaultProps = {};
