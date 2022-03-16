import React, {useEffect} from "react";
import {ArticleList} from "../modules/articles/articlesList/ArticleList";
import { useAppSelector, useAppDispatch } from "../hooks/hooks"
import {ArticleDetail, ArticleOfList} from "../actions/ArticleActions";
import {ArticlesContainer} from "../components/articles-container/ArticleContainer";
import {log} from "util";

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    const theme = useAppSelector<string>(state => state.shared.theme);
    // @ts-ignore
    const articles = useAppSelector<string>(state => state.article.articles);
    const queryId = useAppSelector<string>(state => state.query.queryId);

    useEffect(()=>{
        console.log(articles)
        console.log(queryId)

    },[articles, queryId])

    return (
        <div className={`screen home ${theme}`}>
           <ArticlesContainer/>
        </div>
      );
};

export default HomeScreen;

HomeScreen.defaultProps = {};

