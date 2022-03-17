import React from "react";
import {ArticleDetailContainer} from "../components/article-detail/ArticleDetail";
import {useAppSelector} from "../hooks/hooks";

type ScreenArticleDetailProps = {};

export const ScreenArticleDetail: React.FC<ScreenArticleDetailProps> = () => {
    const theme = useAppSelector<string>(state => state.shared.theme);

    return (
        <div className={`screen home ${theme}`}>
            <ArticleDetailContainer/>
        </div>
    );
};
