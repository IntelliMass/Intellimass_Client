import React, {useState, useEffect} from "react";
import { Card, Divider, Tag, Button} from 'antd';
import { getArticleDetail, ArticleDetail, ArticleOfList} from "../../actions/ArticleActions";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"

import "./ArticleCard.scss"
import { Author } from "../../actions/ArticleActions";
import {UserOutlined} from "@ant-design/icons";
import {CategoryTag} from "../category-tags/CategoryTag";
import {useHistory} from "react-router-dom";
import {GetMoreButton} from "../get-more/GetMore";

type ArticleCardProps = {
    article: any;
};

export const ArticleCard: React.FC<ArticleCardProps> = (props) => {
    const { article } = props;
    // @ts-ignore
    const articleDetail = useAppSelector<ArticleDetail>(state => state.article.articleDetail);
    const dispatch = useAppDispatch();
    const history = useHistory();

    const [isGetDetail, setIsGetDetail] = useState<boolean>(false);
    const [localArticleDetail, setLocalArticleDetail] = useState<any>(articleDetail);

    useEffect(()=>{
        // @ts-ignore
        dispatch(getArticleDetail(article.paperId));
    },[])

    useEffect(()=>{
       const newArticle = {...articleDetail};
       setLocalArticleDetail(newArticle);
    },[articleDetail])

    const showDetail = () => {
        setIsGetDetail(!isGetDetail);
        history.replace('/article');
    };

    return (
        <div className="card-article-container">
            <Card title={`${article.title}`} extra={
                // <Button type="text" danger onClick={showDetail}>
                //     More
                // </Button>
                <GetMoreButton paperId={article.paperId}/>
                } style={{ width: 500 }}
            >
                <p>
                    <b>Authors: </b>
                    {article.authors.map((author:Author)=>{
                        return(
                            <Tag icon={<UserOutlined />} color="default">
                                {author.name}
                            </Tag>
                        );
                    })}
                </p>
                <div>
                    <Divider orientation="left">Categories</Divider>
                    <CategoryTag article={article}/>

                </div>
                <Divider orientation="left">Abstract</Divider>
                <div className="abstract-container">
                    {article.abstract}
                </div>
                <Divider/>
            </Card>
        </div>
    );
};
