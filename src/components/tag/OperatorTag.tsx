import React from "react";
import { Tag } from "antd";
import 'antd/dist/antd.css';

type RequestTagProps = {
    operator: string;
};

export const OperatorTag: React.FC<RequestTagProps> = (props) => {
    const { operator } = props;

    const UniqeTag = () => {
        if(operator === "NOT"){
            return <Tag style={{borderRadius:20}} color="red">NOT</Tag>
        }
        else if(operator === "AND"){
            return <Tag style={{borderRadius:20}} color="green">AND</Tag>
        }
        else{
            return <Tag style={{borderRadius:20}} color="blue">OR</Tag>
        }
    };
    return (
        <>
            {UniqeTag()}
        </>
    );
};

OperatorTag.defaultProps = {};