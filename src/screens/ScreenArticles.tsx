import React, {useEffect} from "react";
import {useAppSelector} from "../hooks/hooks";
import "../index.scss"
import {ArticlesContainer} from "../components/articles-container/ArticleContainer";
import {useHistory} from "react-router-dom";
import {HomePageHeader} from "../components/home-page-header/HomePageHeader";
import {CollectionContainer} from "../components/collection-container/CollectionContainer";
import {NewMetadataList} from "../components/new-metadata-list/NewMetadataList";



type ScreenProfileProps = {};

const ScreenArticles: React.FC<ScreenProfileProps> = () => {
    const queryId = useAppSelector<string>(state => state.query.queryId);
    const history = useHistory();

    useEffect(()=>{
        if (queryId === ''){
            history.replace('/');
        }
    },[queryId])

  return (
    queryId !== '' ?
    <div className="screen">
        {/*<ArticlesContainer/>*/}
        <NewMetadataList metadataList={[]} savedMetadataList={[]}/>
    </div> : <div className="home-page-container"> </div>

  );
};

export default ScreenArticles;

ScreenArticles.defaultProps = {};
