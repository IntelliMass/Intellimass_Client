import React from "react";
import './Metadata.scss';
import {Badge, Tag} from "antd";

type MetadataProps = {
    index: number;
    title: string;
    rank: number;
    isSelected: boolean;
    onClose: Function;
};

export const Metadata: React.FC<MetadataProps> = (props) => {
    const { index, title, rank, isSelected, onClose  } = props;

    const removeTag = () => {
        onClose(index);
    }


    const MetadataTag = (title:string) => {
        if(isSelected){
            return <Tag closable color="blue" onClose={removeTag} >
                {title}
            </Tag>
        } else {
            return <Tag closable onClose={removeTag}  >
                {title}
            </Tag>
        }
    };



    const UniqeBadge = () => {
        if(rank < 10){
            return (
                <Badge style={{ backgroundColor: "firebrick" }} count={99}>
                    {MetadataTag(title)}
                </Badge>
            );
        }
        else if(rank > 10 && rank < 50){
            return <Badge style={{ backgroundColor: "orange" }} count={50}>
                {MetadataTag(title)}
            </Badge>
        }
        else if(rank > 50 && rank < 100){
            return <Badge style={{ backgroundColor: "cadetblue" }} count={100}>
                {MetadataTag(title)}
            </Badge>
        }
        else{
            return <Badge style={{ backgroundColor: "forestgreen" }} count={1000} overflowCount={100}>
                {MetadataTag(title)}
            </Badge>
        }
    };
    return (
        <div className="metadata">
            {UniqeBadge()}
        </div>
    );
};

Metadata.defaultProps = {};