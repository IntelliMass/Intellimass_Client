import React, {useEffect} from "react";
import "./ArticleList.scss";
import {Avatar, List, Space} from "antd";
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks"
import {ArticleOfList, Author, getArticles} from "../../../actions/ArticleActions";
import {GetMoreButton} from "../../../components/get-more/GetMore";

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
    const articles = useAppSelector<Array<ArticleOfList>>(state => state.article.serverArticles);
    const query = useAppSelector<string>(state => state.query.query);
    const queryId = useAppSelector<string>(state => state.query.queryId);
    const theme = useAppSelector<string>(state => state.shared.theme);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        // @ts-ignore
        dispatch(getArticles(queryId));
    },[])

    useEffect(()=>{
        console.log(articles)
    },[ articles])

    return (
        <div className={`Article-list ${theme}`}>
            <List
                itemLayout="vertical"
                size="small"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={articles}
                className={`${theme}`}
                renderItem={item => (
                    <List.Item
                        className={`${theme}`}
                        key={item.title + item.abstract}
                        actions={[<GetMoreButton paperId={item.paperId}/>]}
                    >
                        <List.Item.Meta
                            title={item.title}
                            description={ listAuthorsToString(item.authors)}
                            className={`${theme}`}
                        />
                        {item.abstract}
                    </List.Item>
                )}
            />
        </div>
    );
};
