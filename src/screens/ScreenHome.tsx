import React, {useEffect} from "react";
import {ArticleList} from "../modules/articles/articlesList/ArticleList";
import { useAppSelector, useAppDispatch } from "../hooks/hooks"
import {ArticleDetail, ArticleOfList} from "../actions/ArticleActions";
import {ArticlesContainer} from "../components/articles-container/ArticleContainer";
import {log} from "util";
import {useHistory} from "react-router-dom";

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    const theme = useAppSelector<string>(state => state.shared.theme);
    const queryId = useAppSelector<string>(state => state.query.queryId);
    const history = useHistory();

    useEffect(()=>{
        if (queryId === ''){
            history.replace('/');
        }
    },[queryId])


    return (
        <div className={`screen home ${theme}`}>
            {queryId !== '' && <ArticlesContainer/>}
        </div>
      );
};

export default HomeScreen;

HomeScreen.defaultProps = {};

