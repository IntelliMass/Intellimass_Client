import React from "react";
import './Metadata.scss';
import {Badge, Tag} from "antd";
import {getArticleDetail} from "../../actions/ArticleActions";

export type IMetadata = {
    title: string;
    rank: number;
    isSelected: boolean;
}

type MetadataProps = {
    metadata: IMetadata;
    onClose: Function;
    index: number;
};

export const Metadata: React.FC<MetadataProps> = (props) => {
    const { metadata, index, onClose  } = props;

    const removeTag = () => {
        onClose(index);
    }
    fetch("https://api.semanticscholar.org/v1/paper/0796f6cd7f0403a854d67d525e9b32af3b277331")
        .then(function (response) {
            return response.json();
        })
        .then(function (recivedArticles:any) {
            console.log(recivedArticles)
        })
        .catch(function (error) {
            console.log(
                "There has been a problem with your fetch operation: " + error.message
            );
            throw error;
        });
    getArticleDetail();

    const MetadataTag = (title:string) => {
        if(metadata.isSelected){
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
        if(metadata.rank < 10){
            return (
                <Badge style={{ backgroundColor: "firebrick" }} count={99}>
                    {MetadataTag(metadata.title)}
                </Badge>
            );
        }
        else if(metadata.rank > 10 && metadata.rank < 50){
            return <Badge style={{ backgroundColor: "orange" }} count={50}>
                {MetadataTag(metadata.title)}
            </Badge>
        }
        else if(metadata.rank > 50 && metadata.rank < 100){
            return <Badge style={{ backgroundColor: "cadetblue" }} count={100}>
                {MetadataTag(metadata.title)}
            </Badge>
        }
        else{
            return <Badge style={{ backgroundColor: "forestgreen" }} count={1000} overflowCount={100}>
                {MetadataTag(metadata.title)}
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