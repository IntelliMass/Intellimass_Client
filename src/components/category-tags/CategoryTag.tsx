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

export const colorGenerator = (index: number) => {
    const colors: string[] = ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263','#6AF9C4'];
    return colors[index];
}

export const CategoryTag: React.FC<ArticlePopoverProps> = (props) => {
    const {category, index} = props;
    return (
        <>
            <Alert style={{backgroundColor: colorGenerator(index)}} className={`category-tag`} message={category} type={typeGeneretor(index)} />
        </>
    );
};

