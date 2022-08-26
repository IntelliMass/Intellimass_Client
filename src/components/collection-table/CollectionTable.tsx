import React, {useState} from "react";
import {Table, Tag, Space, Tooltip} from 'antd';
import "../collection-container/CollectionContainer.scss"
import {ArticleOfList, Author, Topic, updatePaperID} from "../../actions/ArticleActions";
import {DeleteOutlined, MoreOutlined} from "@ant-design/icons";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useHistory} from "react-router-dom";
import Swal from "sweetalert2";
import {removeFromCollection} from "../../actions/CollectionAction";
import {CollectionState, ICollection} from "../../reducers/CollectionResucer";

type CollectionTableProps = {
    articles: Array<ArticleOfList>,
    collection: CollectionState
};

export interface VisualCollectionRowNew {
    title: string,
    year: number,
    authors: Array<Author>,
    frequentWords: Array<string>,
    paperId: string,
    topics: Array<Topic>,
    cluster: string,
    query_word: Array<string>,
    timestamp: string
}

export const getCollectionName = (collections : ICollection[], paperId: string ): string => {
    let collectionName: string = '';
    collections.forEach((collection: ICollection)=>{
        collection.articles_list.forEach((article: ArticleOfList)=>{
            if (article.paperId === paperId)
                collectionName = collection.collection_name;
        })
    })
    return collectionName;
}

export const CollectionTable: React.FC<CollectionTableProps> = (props) => {
   const {articles, collection} = props;
    const userid = useAppSelector<string>(state => state.user.userName) || 'userId';

    const dispatch = useAppDispatch();
    const history = useHistory();

    const onClickMoreDetail = (paperID: string) => {
        // @ts-ignore
        dispatch(updatePaperID(paperID));
        history.replace('/article');
    }

    const removeArticle = ( paperID: string) => {
        Swal.fire({
            title: 'Are you sure you want to remove this article?',
            text: `This will remove the article from collection`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it'
        }).then((result) => {
            if (result.isConfirmed) {
                // @ts-ignore
                dispatch(removeFromCollection("test", userid, collection.collection, getCollectionName(collection.collection, paperID), paperID))
                Swal.fire(
                    'Removed!',
                    'Your article has been removed.',
                    'success'
                )
            }
        })
    }



    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Authors',
            key: 'authors',
            dataIndex: 'authors',
            render: (authors: Author[]) => (
                <>
                    {authors.map(author => {
                        return (
                            <Tag color="purple" key={author.name}>
                                {author.name}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Category',
            dataIndex: 'cluster',
            key: 'cluster',
        },
        {
            title: 'From search',
            dataIndex: 'query_word',
            key: 'query_word',
            render: (query_words: string[]) => (
                <>
                    {query_words.map(query_word => {
                        return (
                            <Tag color="blue" key={query_word}>
                                {query_word}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Topics',
            key: 'topics',
            dataIndex: 'topics',
            render: (topics: Topic[]) => (
                <>
                    {topics.map(topic => {
                        return (
                            <Tag color="blue" key={topic.topic}>
                                {topic.topic}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Frequent Words',
            key: 'frequentWords',
            dataIndex: 'frequentWords',
            render: (frequentWords: string[]) => (
                <>
                    {frequentWords.map(frequentWord => {
                        return (
                            <Tag color="blue" key={frequentWord}>
                                {frequentWord}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Saved time',
            dataIndex: 'timestamp',
            key: 'timestamp',
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'paperId',
            render: ( paperId:string ) => (
                <Space size="middle">
                    <Tooltip placement="bottom" title={'More details'}>
                        <MoreOutlined onClick={()=>{onClickMoreDetail(paperId)}} className="collection-icon"/>
                    </Tooltip>
                    <Tooltip placement="bottom" title={'Remove article'}>
                        <DeleteOutlined onClick={()=>removeArticle(paperId)} className="collection-icon"/>
                    </Tooltip>
                </Space>
            ),
        },
    ];
    const visualArticles = (articles: Array<ArticleOfList>) : Array<VisualCollectionRowNew> => {
        let dataSet: Array<VisualCollectionRowNew> = [];
        articles.forEach(article => {
            dataSet.push({
                title: article.title,
                year: article.year,
                topics: article.topics || [],
                cluster: article.cluster || '',
                query_word: article.query_word || [],
                timestamp: article.timestamp || '',
                authors: article.authors,
                frequentWords: article.frequentWords || [],
                paperId: article.paperId})
        })
        return dataSet;
    }

    return (
        <Table columns={columns} dataSource={visualArticles(articles)} />
    );
};


