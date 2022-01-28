import React, {useEffect} from "react";
import MenuComponent from "../layout/menu";
import {ArticleList} from "../modules/articles/articlesList/ArticleList";
import { getArticleDetail} from "../actions/ArticleActions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks"
import {ArticleDetail, ArticleOfList} from "../actions/ArticleActions";

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    // @ts-ignore
    const articles = useAppSelector<ArticleOfList>(state => state.article.articles)
    // @ts-ignore
    const articleDetail = useAppSelector<ArticleDetail>(state => state.article.articleDetail)
    const dispatch = useAppDispatch()

    // useEffect(()=>{
    //     // @ts-ignore
    //     dispatch(getArticleDetail());
    // },[])
    //
    // useEffect(()=>{
    //     console.log(articleDetail)
    // },[articleDetail])

  return (
    <>
        <MenuComponent/>
        <ArticleList/>
    </>
  );
};

export default HomeScreen;

HomeScreen.defaultProps = {};

