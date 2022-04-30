import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import "../index.scss"
import {ArticlesContainer} from "../components/articles-container/ArticleContainer";
import {useHistory} from "react-router-dom";
import {HomePageHeader} from "../components/home-page-header/HomePageHeader";
import {CollectionContainer} from "../components/collection-container/CollectionContainer";
import {NewMetadataList} from "../components/new-metadata-list/NewMetadataList";
import {ArticleOfList, getFilteredArticles} from "../actions/ArticleActions";
import {ArticleList} from "../modules/articles/articlesList/ArticleList";
import {Spin} from "antd";
import {getTitlesFromMetadata} from "../components/metadata-list/MetadataList";



type ScreenProfileProps = {};

const ScreenArticles: React.FC<ScreenProfileProps> = () => {
    const queryId = useAppSelector<string>(state => state.query.queryId);
    // @ts-ignore
    const articles = useAppSelector<Array<ArticleOfList>>(state => state.article.serverArticles);
    const query = useAppSelector<string>(state => state.query.query);
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [localCount, setCount] = useState<number>(100);

    const history = useHistory();
    const dispatch = useAppDispatch();

    useEffect(()=>{

    },[queryId]);


    useEffect(()=>{
        if (queryId === ''){
            history.replace('/');
        }
        setIsLoader(true);
        // @ts-ignore
        dispatch(getFilteredArticles(queryId, [], 'frequentWords', localCount));
    },[queryId, query])


    useEffect(()=>{
        console.log(articles);
        setIsLoader(false);
    },[articles])


  return (
    queryId !== '' || articles.length !== 0 ?
    <div className="screen">
        {/*<ArticlesContainer/>*/}
        {/*<NewMetadataList metadataList={[]} savedMetadataList={[]}/>*/}
        {
            isLoader ? <div className="loader-container">
                <Spin size="large" />
                <h4 className="loader-articles-details">Searching for articles</h4>
            </div> :
            <div>
                <ArticleList articles={articles} queryId={queryId} query={query}/>
            </div>
        }
    </div> : <div className="screen"> </div>

  );
};

export default ScreenArticles;

ScreenArticles.defaultProps = {};
