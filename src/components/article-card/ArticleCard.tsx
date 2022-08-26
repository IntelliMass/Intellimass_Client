import React, {useState, useEffect} from "react";
import {  Divider, Tag } from 'antd';
import { ArticleDetail } from "../../actions/ArticleActions";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"

import "./ArticleCard.scss"
import { Author } from "../../actions/ArticleActions";
import {UserOutlined} from "@ant-design/icons";
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
       const newArticle = {...articleDetail};
       setLocalArticleDetail(newArticle);
    },[articleDetail])

    return (
        <div className="card-article-container">
            <div className="article-card">
                <div className="article-title">
                    <span>{article.title}</span>
                    <div className="more-data">
                        <GetMoreButton paperId={article.paperId}/>
                    </div>
                </div>
                <Divider orientation="left">Authors</Divider>
                <p>
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
                    {/*<CategoryTag article={article}/>*/}
                </div>
                <Divider orientation="left">Abstract</Divider>
                <div className="abstract-container">
                    {article.abstract}
                </div>
            </div>
        </div>
    );
};
