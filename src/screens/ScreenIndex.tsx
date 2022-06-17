import React, {useEffect} from "react";
import {NetworkContainer} from "../components/network-container/NetworkContainer";
import {NetworkContainerSecond} from "../components/network-container/NetworkContainerSecond";
import Header from "../landing-header/Header";
import {OuterLayout} from "../landing-header/Outer";
import {CardSection} from "../landing-header/CardSection";
import {Features} from "../landing-header/Features";
import {ExplanationSection} from "../landing-header/Explanaition";
import ScrolledButton from "../landing-header/ScrolledButton";
import {useHistory} from "react-router-dom";

type ResearchesScreenProps = {};

const ScreenIndex: React.FC<ResearchesScreenProps> = () => {
    const history = useHistory();
    useEffect(()=>{
        history.replace('/home');
    },[])


    return (
        <div >
            <Header/>
            <OuterLayout>
                <Features/>
                <ExplanationSection/>
                <CardSection />
            </OuterLayout>
            <ScrolledButton/>
        </div>
    );
};

export default ScreenIndex;

ScreenIndex.defaultProps = {};
