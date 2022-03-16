import React, {useEffect, useState} from "react";
import {ArticleDetail, Author} from "../../actions/ArticleActions";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"
import {Button, Card, Col, Divider, List, Row, Statistic, Tag} from "antd";
import {CheckOutlined} from "@material-ui/icons";
import {CloseOutlined, UserOutlined} from "@ant-design/icons";
import {useHistory} from "react-router-dom";
import "./ArticleDetail.scss";
import {CategoryTag} from "../category-tags/CategoryTag";

type ArticleDetailContainerProps = {};

export const ArticleDetailContainer: React.FC<ArticleDetailContainerProps> = () => {
    // @ts-ignore
    const articleDetail = useAppSelector<ArticleDetail>(state => state.article.articleDetail);
    const history = useHistory();

    const [localArticleDetail, setLocalArticleDetail] = useState<ArticleDetail>(articleDetail);

    useEffect(()=>{
        if( Object.keys(localArticleDetail).length === 0)  history.replace('/profile');
    },[])

    useEffect(()=>{
        const newArticle = {...articleDetail};
        setLocalArticleDetail(newArticle);
    },[articleDetail])


    return (
        <div>
            {Object.keys(localArticleDetail).length !==0?
                <div className="article-container">
                    <div className="left-details">
                        <div className="card-article-container">
                            <Card title={`${articleDetail.title}`}  style={{ width: 500 }}>
                                <p>
                                    <b>Authors: </b>
                                    {articleDetail.authors.map((author:Author)=>{
                                        return(
                                            <Tag icon={<UserOutlined />} color="default">
                                                {author.name}
                                            </Tag>
                                        );
                                    })}
                                </p>
                                <div>
                                    <Divider orientation="left">Categories</Divider>
                                    <CategoryTag article={articleDetail}/>
                                </div>
                                <Divider orientation="left">Abstract</Divider>
                                <div className="abstract-container">
                                    {articleDetail.abstract}
                                </div>
                                <Divider/>
                            </Card>
                        </div>
                    </div>
                    <div className="right-details">
                        <div className="statistical-parameters">
                            <div className="site-statistic-demo-card">
                                <Row gutter={20}>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Authors"
                                                value={localArticleDetail.authors.length}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Fluential Citation"
                                                value={localArticleDetail.influentialCitationCount}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Citation Velocity"
                                                value={localArticleDetail.citationVelocity}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Number Cited By"
                                                value={localArticleDetail.numCitedBy}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Number Citing"
                                                value={localArticleDetail.numCiting}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                </Row>

                                <Row gutter={20}>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Topics"
                                                value={localArticleDetail.topics.length}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="References"
                                                value={localArticleDetail.references.length}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Citations"
                                                value={localArticleDetail.citations.length}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            {
                                                localArticleDetail.isOpenAccess?
                                                    <Statistic
                                                        title="Open Access"
                                                        prefix={<CheckOutlined />}
                                                        valueStyle={{ color: "green" }}
                                                    /> :
                                                    <Statistic
                                                        title="Open Access"
                                                        prefix={<CloseOutlined />}
                                                        valueStyle={{ color: "red" }}
                                                    />
                                            }
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            {
                                                !localArticleDetail.isPublisherLicensed?

                                                    <Statistic
                                                        title="Publish License"
                                                        prefix={<CheckOutlined />}
                                                        valueStyle={{ color: "green" }}
                                                    /> :
                                                    <Statistic
                                                        title="Publish License"
                                                        prefix={<CloseOutlined />}
                                                        valueStyle={{ color: "red" }}
                                                    />}
                                        </Card>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                        <div className="topics-list">
                            <div className="metadata-list">
                                {articleDetail.topics.map((topic, index) => {
                                    return <Tag >
                                        {topic.topic}
                                    </Tag>
                                })}
                            </div>
                        </div>
                        <div className="citations-list">
                            <List
                                style={{}}
                                itemLayout="horizontal"
                                dataSource={localArticleDetail.citations}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta style={{width: 600}}
                                            title={<span>{item.year} | {item.title}</span>}
                                            description={`Venue: ${item.venue} | Authors: ${item.authors.length} | Intent: ${item.intent.length}`}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                    </div>
                    <div className="footer-details">
                        <div className="reference-container">
                            {articleDetail.references.map((reference, index) => {
                                return (
                                    <Card className="reference-card" title={`${reference.year} | ${reference.title}`} bordered={false}>
                                        Venue: {reference.venue} | Authors: {reference.authors.length} | Intent: {reference.intent.length}
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
                : null}
        </div>
    );
};
