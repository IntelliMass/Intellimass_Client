import React, {useEffect} from "react";
import "./ArticleList.scss";
import {Avatar, List, Space} from "antd";
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks"
import {ArticleOfList, Author, getArticles} from "../../../actions/ArticleActions";


// @ts-ignore
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const listAuthorsToString = (authors: Array<Author>):string=>{
    let stringAuthores = "";
    authors.forEach(author => {
        stringAuthores += author.name + " , "
    });
    return stringAuthores;
}

type ArticleListProps = {};

export const ArticleList: React.FC<ArticleListProps> = () => {
// @ts-ignore
    const articles = useAppSelector<Array<ArticleOfList>>(state => state.article.articles);
    const query = useAppSelector<string>(state => state.query.query);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        // @ts-ignore
        dispatch(getArticles(query));
    },[])

    useEffect(()=>{
        console.log(articles)
    },[ articles])

    return (
        <div className="Article-list">
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={articles}
                footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                }
                renderItem={item => (
                    <List.Item
                        key={item.title + item.abstract}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                    >
                        <List.Item.Meta
                            title={item.title}
                            description={ listAuthorsToString(item.authors)}
                        />
                        {item.abstract}
                    </List.Item>
                )}
            />
        </div>
    );
};

ArticleList.defaultProps = {};
