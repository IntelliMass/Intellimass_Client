import React from "react";
import {Statistic, Card, Row, Col, Alert} from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

type ArticlePopoverProps = {
    article: any;
};

export const typeGeneretor = (index:number)=>{
    if (index % 4 === 0){
        return "warning";
    }
    else if (index % 4 === 1){
        return "info";
    }
    else if (index % 4 === 1){
        return "success";
    }
    return "error";
};

export const CategoryTag: React.FC<ArticlePopoverProps> = (props) => {
    const {article} = props;

    return (
        <Row gutter={20}>
            {article.fieldsOfStudy.map((field:string, index:number)=>{
                return(
                    <Col span={10} >
                        <Alert message={field} type={typeGeneretor(index)} />
                    </Col>
                );
            })}
        </Row>
    );
};

