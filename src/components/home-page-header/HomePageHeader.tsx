import React from "react";
import { useAppSelector } from "../../hooks/hooks"
import {Col} from 'antd';
import {UiTitle} from "../ui-title/UiTitle";
import "./HomePageHeader.scss"

type HomePageHeaderProps = {};

export const HomePageHeader: React.FC<HomePageHeaderProps> = (props) => {
    const userName = useAppSelector<string>(state => state.user.userName);
    console.log(userName);

    return (
        <div className="home-data-container">
            <span className="title-home">Hey {userName || 'user'}, Let discover articles with IntelliMass</span>
            <Col className="Col-total"  key={"home-total-collections"} order={0}>
                <UiTitle title="Total collections" type="medium" />
                <div className="value alerts-value">
                    3
                </div>
            </Col>
            <Col className="Col-total" key={"home-total-articles"} order={1}>
                <UiTitle title="Total saved articles" type="medium" />
                <div className="value alerts-value">
                    40
                </div>
            </Col>
        </div>
    );
};
