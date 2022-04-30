import React from "react";
import {Table, Tag, Space, Tooltip} from 'antd';
import "../collection-container/CollectionContainer.scss"
import {ArticleOfList, Author} from "../../actions/ArticleActions";
import {ArticleList} from "../../modules/articles/articlesList/ArticleList";
import {DeleteOutlined, MoreOutlined} from "@ant-design/icons";

type CollectionTableProps = {
    articles: Array<ArticleOfList>
};

// authors
// frequentWords

export interface VisualCollectionRow {
    title: string,
    year: number,
    authors: Array<Author>,
    frequentWords: Array<string>
}

export const CollectionTable: React.FC<CollectionTableProps> = (props) => {
   const {articles} = props;


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
            title: 'Frequent Words',
            key: 'frequentWords',
            dataIndex: 'frequentWords',
            render: (frequentWords: any[]) => (
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
            render: ( ) => (
                <Space size="middle">
                    <Tooltip placement="bottom" title={'More details'}>
                        <MoreOutlined className="collection-icon"/>
                    </Tooltip>
                    <Tooltip placement="bottom" title={'Remove article'}>
                        <DeleteOutlined className="collection-icon"/>
                    </Tooltip>
                </Space>
            ),
        },
    ];

    const visualArticles = (articles: Array<ArticleOfList>) : Array<VisualCollectionRow> => {
        let dataSet: Array<VisualCollectionRow> = [];
        articles.forEach(article => {
            dataSet.push({title: article.title, year: article.year, authors: article.authors, frequentWords: article.frequentWords || []})
        })
        return dataSet;
    }

    return (
        <Table columns={columns} dataSource={visualArticles(articles)} />
    );
};


