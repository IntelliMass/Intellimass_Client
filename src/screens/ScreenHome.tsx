import React from "react";
import {ArticleList} from "../modules/articles/articlesList/ArticleList";
import { useAppSelector, useAppDispatch } from "../hooks/hooks"
import {ArticleDetail, ArticleOfList} from "../actions/ArticleActions";

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    const theme = useAppSelector<string>(state => state.shared.theme);

    return (
        <div className={`screen home ${theme}`}>
            <ArticleList/>
        </div>
      );
};

export default HomeScreen;

HomeScreen.defaultProps = {};

