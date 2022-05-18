import React, {useEffect} from "react";
import {ArticleDetailContainer} from "../components/article-detail/ArticleDetail";
import {useAppSelector} from "../hooks/hooks";
import {useHistory} from "react-router-dom";

type ScreenArticleDetailProps = {};

export const ScreenArticleDetail: React.FC<ScreenArticleDetailProps> = () => {
    const userId = useAppSelector<string>(state => state.user.userId)
    const history = useHistory();

    useEffect(()=>{
        if (userId === ''){
            history.replace('/');
        }
    },[userId]);

    return (
        <div className={`screen`}>
            <ArticleDetailContainer/>
        </div>
    );
};
