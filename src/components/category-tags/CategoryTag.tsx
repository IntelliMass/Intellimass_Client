import React from "react";
import { Col, Alert} from 'antd';
import "./CategoryTag.scss";

type ArticlePopoverProps = {
    category: string;
    index: number;
};

export const typeGeneretor = (index:number)=>{
    if (index % 4 === 0){
        return "warning";
    }
    else if (index % 4 === 1){
        return "info";
    }
    else if (index % 4 === 2){
        return "success";
    }
    else if (index % 4 === 3){
        return "error";
    }
    else {
        return ;
    }
};

export const CategoryTag: React.FC<ArticlePopoverProps> = (props) => {
    const {category, index} = props;
    return (
        <>
            <Alert className={`category-tag`} message={category} type={typeGeneretor(index)} />
        </>
    );
};

