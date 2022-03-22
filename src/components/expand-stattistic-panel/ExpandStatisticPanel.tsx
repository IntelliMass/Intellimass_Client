import React from 'react';
import './ExpandedStatisticPanel.scss';
import { UiTitle } from '../ui-title/UiTitle';
import { Col, Row } from 'antd';
import {log} from "util";

interface IProps {
    article: any;
}

export interface IStatisticsColumnDefinition {
    displayName: string;
    order: number;
    formatter?: Function;
    getIcon?: Function;
}

export const colDefs: { [key: string]: IStatisticsColumnDefinition } = {
    year: {
        order: 1,
        displayName: 'Year',
    },
    authors: {
        order: 2,
        displayName: 'Authors',
    },
    fieldsOfStudy: {
        order: 3,
        displayName: 'Study field',
    },
    frequentWords: {
        order: 4,
        displayName: 'Frequent words',
    },
    isOpenAccess: {
        order: 5,
        displayName: 'Is open access',
    },
};

export const ServiceSummary = (props: IProps) => {
    const {article} = props;
    console.log(article)

    const ReturnedValue = (item:any) => {
        // TODO: GET ARTICLE DATA SOMEHOW
        console.log(item);
        return (
            <span></span>
        );
    }

    if (article) {
        return (
            <div className="service-summary-container">
                <Row className={'service-row'}>
                    {Object.entries(article).map(function ([key, value], index) {
                        return colDefs.hasOwnProperty(key) ? (
                            <Col key={index} order={colDefs[key].order}>
                                <UiTitle title={colDefs[key].displayName} type="medium" />
                                <div className="value alerts-value">
                                    <div className="text">
                                        <ReturnedValue item={colDefs[key]}/>
                                {/*            {(colDefs[key].formatter || dummyFunctions.formatter)(value)}*/}
                                {/*        </span>*/}
                                {/*        {colDefs[key].getIcon ? (*/}
                                {/*            <span className={'icon'}>*/}
                                {/*                {(colDefs[key].getIcon || dummyFunctions.getIcon)(value)}*/}
                                {/*        ) : null}*/}
                                    </div>
                                </div>
                            </Col>
                        ) : null;
                    })}
                </Row>
            </div>
        );
    } else return (
        <div>
            <h4 className="no-selected-article">No selected article</h4>
         </div>
    );
};
