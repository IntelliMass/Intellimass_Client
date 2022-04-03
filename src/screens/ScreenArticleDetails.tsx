import React, {useEffect} from "react";
import {ArticleDetailContainer} from "../components/article-detail/ArticleDetail";
import {useAppSelector} from "../hooks/hooks";
import {useHistory} from "react-router-dom";

type ScreenArticleDetailProps = {};

export const ScreenArticleDetail: React.FC<ScreenArticleDetailProps> = () => {
    const theme = useAppSelector<string>(state => state.shared.theme);
    const queryId = useAppSelector<string>(state => state.query.queryId)
    const history = useHistory();

    useEffect(()=>{
        if (queryId === ''){
            history.replace('/');
        }
    },[queryId]);

    return (
        <div className={`screen home ${theme}`}>
            <ArticleDetailContainer/>
        </div>
    );
};
