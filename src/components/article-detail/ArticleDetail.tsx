import React, {useEffect, useState} from "react";
import {ArticleDetail, Author, getArticleDetail} from "../../actions/ArticleActions";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"
import {Card, Col, Divider, List, Row, Spin, Statistic, Tag} from "antd";
import {CheckOutlined} from "@material-ui/icons";
import {CloseOutlined, UserOutlined} from "@ant-design/icons";
import "./ArticleDetail.scss";
import "../../index.scss";

type ArticleDetailContainerProps = {};

export const ArticleDetailContainer: React.FC<ArticleDetailContainerProps> = () => {
    // @ts-ignore
    const articleDetail = useAppSelector<ArticleDetail>(state => state.article.articleDetail);
    // @ts-ignore
    const paperId = useAppSelector<string>(state => state.article.selectedPaperID);

    const [isLoader, setIsLoader] = useState<boolean>(false);
    const dispatch = useAppDispatch();


    useEffect(()=>{
       setIsLoader(true);
        if (paperId !== ''){
            // @ts-ignore
            dispatch(getArticleDetail(paperId));
        }
    },[paperId])


    useEffect(()=>{
        console.log(articleDetail)
        setTimeout(() => {
            setIsLoader(false);
        }, 1500);
    },[articleDetail])

    return (
        <div>
            {
                isLoader ?
                    <div className="screen-articles">
                        <div className="loader-container">
                            <Spin size="large" />
                            <h4 style={{marginLeft: -65}} className="loader-articles-details">Uploading article data</h4>
                        </div>
                    </div> :
                    Object.keys(articleDetail).length !==0?
                        <div className="article-container">
                            <Card className={"main-article-detail"} title={`${articleDetail.title}`}>
                                <p>
                                    <Divider style={{fontSize: 20, marginTop: 30}} orientation="left">Authors</Divider>
                                    {articleDetail.authors.map((author:Author)=>{
                                        return(
                                            <Tag icon={<UserOutlined />} color="default" style={{fontSize: 16, padding: 3}}>
                                                {author.name}
                                            </Tag>
                                        );
                                    })}
                                </p>
                                <Divider style={{fontSize: 20, marginTop: 30}} orientation="left">Abstract</Divider>
                                <div className="abstract-container">
                                    {articleDetail.abstract}
                                </div>
                                <Divider/>
                                <Row gutter={20}>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Authors"
                                                value={articleDetail.authors.length}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Fluential Citation"
                                                value={articleDetail.influentialCitationCount}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Citation Velocity"
                                                value={articleDetail.citationVelocity}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Number Cited By"
                                                value={articleDetail.numCitedBy}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Number Citing"
                                                value={articleDetail.numCiting}
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
                                                value={articleDetail.topics.length}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="References"
                                                value={articleDetail.references.length}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            <Statistic
                                                title="Citations"
                                                value={articleDetail.citations.length}
                                                valueStyle={{ color: "dodgerblue" }}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={4}>
                                        <Card>
                                            {
                                                articleDetail.isOpenAccess?
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
                                                !articleDetail.isPublisherLicensed?

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

                                <Divider style={{fontSize: 20, marginTop: 30}} orientation="left">Topics</Divider>
                                <div className="metadata-list">
                                    {articleDetail.topics.map((topic, index) => {
                                        return <Tag >
                                            {topic.topic}
                                        </Tag>
                                    })}
                                </div>

                                <Divider style={{fontSize: 20, marginTop: 30}} orientation="left">Citation articles to this article</Divider>
                                <div className="citations-list">
                                    <List
                                        style={{}}
                                        itemLayout="horizontal"
                                        dataSource={articleDetail.citations}
                                        renderItem={item => (
                                            <List.Item>
                                                <List.Item.Meta style={{width: 600}}
                                                                title={<span style={{fontSize: 17}}>{item.year} | {item.title}</span>}
                                                                description={`Venue: ${item.venue} | Authors: ${item.authors.length} | Intent: ${item.intent.length}`}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </div>

                                <Divider style={{fontSize: 20, marginTop: 30}} orientation="left">Referenced articles to this article</Divider>
                                <div className="empty-div"></div>
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
                            </Card>
                        </div>
                        : null
                }
        </div>
    );
};
