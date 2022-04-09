import React from 'react';
import './ExpandedStatisticPanel.scss';
import { UiTitle } from '../ui-title/UiTitle';
import { Col, Row } from 'antd';

interface IProps {
    article: any;
}

export interface IStatisticsColumnDefinition {
    displayName: string;
    order: number;
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
    connections: {
        order: 6,
        displayName: 'Connections',
    },
};

export const ServiceSummary = (props: IProps) => {
    const {article} = props;
    console.log(article)

    if (article) {
        return (
            <div className="service-summary-container">
                <Row className={'service-row'}>
                    <Col key={article.year} order={0}>
                        <UiTitle title="Year" type="medium" />
                        <div className="value alerts-value">
                            {article.year}
                        </div>
                    </Col>
                    <Col key={'authors'} order={1}>
                        <UiTitle title="Authors" type="medium" />
                        <div className="value alerts-value">
                            {article.authors.length}
                        </div>
                    </Col>
                    <Col key={'studyFields'} order={2}>
                        <UiTitle title='Study field' type="medium" />
                        <div className="value alerts-value">
                            {article.fieldsOfStudy.length}
                        </div>
                    </Col>
                    <Col key={'frequentWords'} order={3}>
                        <UiTitle title="Frequent words" type="medium" />
                        <div className="value alerts-value">
                            {article.frequentWords.length}
                        </div>
                    </Col>
                    <Col key={'isOpenAccess'} order={4}>
                        <UiTitle title="Is open access" type="medium" />
                        <div className="value alerts-value">
                            {article.isOpenAccess ? 'Open' : 'Close'}
                        </div>
                    </Col>
                    <Col key={'connections'} order={4}>
                        <UiTitle title="Connections" type="medium" />
                        <div className="value alerts-value">
                            {article.nodeRelSize}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    } else return (
        <div>
            <h4 className="no-selected-article">No selected article</h4>
         </div>
    );
};
