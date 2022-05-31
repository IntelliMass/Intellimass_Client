import React, {useEffect, useState} from "react";
import "./ArticleList.scss";
import {Avatar, List, Space, Spin} from "antd";
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks"
import {ArticleOfList, Author, getArticles} from "../../../actions/ArticleActions";
import {GetMoreButton} from "../../../components/get-more/GetMore";
import {IMetadataWithCategory} from "../../../components/new-metadata-list/NewMetadataList";
import {CategoryTag} from "../../../components/category-tags/CategoryTag";
import {INewSingleCatalog} from "../../../reducers/CatalogReducer";
import {fromListToString, QueryListHeader} from "../../../components/query-list-header/QueryListHeader";


export const fromCategoryToIndex = (category: string, categories: Array<INewSingleCatalog>): number => {
    return categories.findIndex(item => category === item.title);
}

export const listAuthorsToString = (authors: Array<Author>):string=>{
    let stringAuthores = "";
    authors.forEach(author => {
        stringAuthores += author.name + ", "
    });
    return stringAuthores.slice(0, -2);
}

type ArticleListProps = {
    articles: Array<ArticleOfList>,
    queryId: string,
    savedMetadataList?: Array<IMetadataWithCategory>
};

export const ArticleList: React.FC<ArticleListProps> = (props) => {
    const {articles, queryId, savedMetadataList} = props;
    const catalog = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.catalogs);

    const searching_words = useAppSelector<string[]>(state => state.query.searching_words);
    const operator = useAppSelector<string>(state => state.query.searching_operator);
    const [queryString, setQueryString] = useState<string>('');


    const dispatch = useAppDispatch();

    useEffect(()=>{
        setQueryString(fromListToString(searching_words));
    },[searching_words])

    useEffect(()=>{
    },[ articles, catalog])

    return (
        <div className={`Article-list`}>
            <QueryListHeader/>
            <h3 style={{marginLeft: 15, color: "#E7E9A3"}}>{articles.length} results for '{queryString}' with operator '{operator}'</h3>
            <List
                itemLayout="vertical"
                size="small"
                pagination={{
                    onChange: page => {
                    },
                    pageSize: 10,
                }}
                dataSource={articles}
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        actions={[<GetMoreButton paperId={item.paperId}/>]}
                        className="article-list-item"
                    >
                        <List.Item.Meta
                            title={item.year + ' | ' + item.title}
                            description={ listAuthorsToString(item.authors)}
                        />
                        <div className="category-tag">
                            {catalog.length > 0 &&
                                <CategoryTag category={item.cluster || 'none'} index={fromCategoryToIndex(item.cluster || 'none', catalog )}/>
                            }
                        </div>
                        {item.abstract}
                    </List.Item>
                )}
            />
        </div>
    );
};
