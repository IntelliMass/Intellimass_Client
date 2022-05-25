import React, {useState} from "react";
import {Table, Tag, Space, Tooltip} from 'antd';
import "../collection-container/CollectionContainer.scss"
import {ArticleOfList, Author, updatePaperID} from "../../actions/ArticleActions";
import {DeleteOutlined, MoreOutlined} from "@ant-design/icons";
import {useAppDispatch} from "../../hooks/hooks";
import {useHistory} from "react-router-dom";
import Swal from "sweetalert2";
import {removeFromCollection} from "../../actions/CollectionAction";

type CollectionTableProps = {
    articles: Array<ArticleOfList>
};


export interface VisualCollectionRow {
    title: string,
    year: number,
    authors: Array<Author>,
    frequentWords: Array<string>,
    paperId: string,
}

export interface VisualCollectionRowNew {
    title: string,
    year: number,
    authors: Array<Author>,
    frequentWords: Array<string>,
    paperId: string,
    // collectionName: string,
    topics: Array<string>,
    cluster: string,
    query_word: Array<string>,
    timestamp: string
}

export const CollectionTable: React.FC<CollectionTableProps> = (props) => {
   const {articles} = props;

    const [selectedCollectionName, setSelectedCollectionName] = useState<string>('none');

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
            text: `This will remove the article from ${selectedCollectionName} collection`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it'
        }).then((result) => {
            if (result.isConfirmed) {
                // @ts-ignore
                dispatch(removeFromCollection(queryId, userid, collections, selectedCollectionName, paperID))
                Swal.fire(
                    'Removed!',
                    'Your article has been removed.',
                    'success'
                )
                let selectedName = selectedCollectionName;
                setSelectedCollectionName('none');
                setSelectedCollectionName(selectedName);
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
            title: 'Category',
            dataIndex: 'cluster',
            key: 'cluster',
        },
        {
            title: 'Saved time',
            dataIndex: 'timestamp',
            key: 'timestamp',
        },
        {
            title: 'From search',
            dataIndex: 'query_word',
            key: 'query_word',
            render: (query_words: string[]) => (
                <>
                    {query_words.map(query_word => {
                        // @ts-ignore
                        let color = query_word.length > 5 ? 'geekblue' : 'green';
                        return (
                            <Tag color={color} key={query_word}>
                                {query_word}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Authors',
            key: 'authors',
            dataIndex: 'authors',
            render: (authors: Author[]) => (
                <>
                    {authors.map(author => {
                        // @ts-ignore
                        let color = author.name.length > 5 ? 'geekblue' : 'green';
                        return (
                            <Tag color={color} key={author.name}>
                                {author.name}
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
            render: (topics: any[]) => (
                <>
                    {topics.map(topic => {
                        let color = topic.length > 5 ? 'geekblue' : 'green';
                        return (
                            <Tag color={color} key={topic}>
                                {topic}
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
                        let color = frequentWord.length > 5 ? 'geekblue' : 'green';
                        return (
                            <Tag color={color} key={frequentWord}>
                                {frequentWord}
                            </Tag>
                        );
                    })}
                </>
            ),
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


