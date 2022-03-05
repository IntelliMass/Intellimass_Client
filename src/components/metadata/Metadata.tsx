import React from "react";
import './Metadata.scss';
import {Badge, Tag} from "antd";
import {CloseOutlined} from "@ant-design/icons";

export type IMetadata = {
    title: string;
    rank: number;
    isSelected: boolean;
    id: string;
}

type MetadataProps = {
    metadata: IMetadata;
    index: number;
    listName: string;
    onMetadataChange: Function;
};

export const Metadata: React.FC<MetadataProps> = (props) => {
    const { metadata, index, listName, onMetadataChange  } = props;

    const removeTag = () => {
        onMetadataChange(listName, "REMOVE_SAVED_METADATA", metadata.id);
    }

    const selectTag = () => {
        onMetadataChange(listName, "SELECT_UNSAVED_METADATA", metadata.id);
    }

    const MetadataTag = (title:string) => {
        if(listName === "SAVED"){
            return <Tag onClose={removeTag} color="pink" >
                {title} <CloseOutlined onClick={removeTag}/>
            </Tag>
        }
        else if(metadata.isSelected){
            return <Tag color="blue"  >
                {title}
            </Tag>
        } else {
            return <Tag >
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
        <div onClick={selectTag} className="metadata">
            {UniqeBadge()}
        </div>
    );
};

Metadata.defaultProps = {};