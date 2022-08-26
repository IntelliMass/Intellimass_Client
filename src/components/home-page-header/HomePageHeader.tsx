import React from "react";
import { useAppSelector } from "../../hooks/hooks"
import { Col, Row} from 'antd';
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
            <span className="title-home">Hey {userName || 'User'}, Let's discover articles with IntelliMass</span>
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
            </Row>
        </div>
    );
};
