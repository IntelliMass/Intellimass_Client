import React from "react";
import { useAppSelector } from "../../hooks/hooks"
import {Col, Row} from 'antd';
import {UiTitle} from "../ui-title/UiTitle";
import "./HomePageHeader.scss"

type HomePageHeaderProps = {
    numberOfCollection: number,
    numberOfArticles: number,
    numberOfAuthors: number,
    numberOfFrequentsWord: number
};

export const HomePageHeader: React.FC<HomePageHeaderProps> = (props) => {
    const userName = useAppSelector<string>(state => state.user.userName);

    return (
        <div className="home-data-container">
            <span className="title-home">Hey {userName || 'user'}, Let's discover articles with IntelliMass</span>
            <Row>
                <Col className="Col-total">
                    <div className="stati concrete ">
                        <i className="icon-book-open icons"></i>
                        <div>
                            <b> {props.numberOfCollection}</b>
                            <span>Total Collections</span>
                        </div>
                    </div>
                </Col>
                <Col className="Col-total">
                    <div className="stati concrete ">
                        <i className="icon-basket-loaded icons"></i>
                        <div>
                            <b>{props.numberOfArticles}</b>
                            <span>Total articles</span>
                        </div>
                    </div>
                </Col>
                {/*<Col className="Col-total">*/}
                {/*    <div className="stati bg-concrete ">*/}
                {/*        <i className="icon-basket icons"></i>*/}
                {/*        <div>*/}
                {/*            <b>{props.numberOfFrequentsWord}</b>*/}
                {/*            <span>Total frequents word</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Col>*/}
                {/*<Col className="Col-total">*/}
                {/*    <div className="stati bg-concrete ">*/}
                {/*        <i className="icon-bag icons"></i>*/}
                {/*        <div>*/}
                {/*            <b>{props.numberOfArticles}</b>*/}
                {/*            <span>Total authors</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Col>*/}
            </Row>
        </div>
    );
};
