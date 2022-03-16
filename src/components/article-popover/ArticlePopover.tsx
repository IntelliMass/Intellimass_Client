import React from "react";
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

type ArticlePopoverProps = {};

export const ArticlePopover: React.FC<ArticlePopoverProps> = () => {

    return (
        <div className="article-popover">
            <div className="site-statistic-demo-card">
                <Row gutter={16}>
                    <Col span={16}>
                        <Card>
                            <Statistic
                                title="Active"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

