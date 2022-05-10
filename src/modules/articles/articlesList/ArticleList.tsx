import React, {useEffect, useState} from "react";
import "./ArticleList.scss";
import {Avatar, List, Space, Spin} from "antd";
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks"
import {ArticleOfList, Author, getArticles} from "../../../actions/ArticleActions";
import {GetMoreButton} from "../../../components/get-more/GetMore";
import {IMetadataWithCategory} from "../../../components/new-metadata-list/NewMetadataList";


const listAuthorsToString = (authors: Array<Author>):string=>{
    let stringAuthores = "";
    authors.forEach(author => {
        stringAuthores += author.name + " , "
    });
    return stringAuthores;
}

type ArticleListProps = {
    articles: Array<ArticleOfList>,
    query: string,
    queryId: string,
    savedMetadataList?: Array<IMetadataWithCategory>
};

export const ArticleList: React.FC<ArticleListProps> = (props) => {
    const {articles, query, queryId, savedMetadataList} = props;
    const dispatch = useAppDispatch();

    useEffect(()=>{
    },[ articles])

    return (
        <div className={`Article-list`}>
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
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<GetMoreButton paperId={item.paperId}/>]}
                    >
                        <List.Item.Meta
                            title={item.year + ' | ' + item.title}
                            description={ listAuthorsToString(item.authors)}
                        />
                        {item.abstract}
                    </List.Item>
                )}
            />
        </div>
    );
};
