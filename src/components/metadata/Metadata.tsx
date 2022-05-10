import React from "react";
import './Metadata.scss';
import {Badge, Tag} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import {IMetadata} from "../../reducers/MetadataReducer";


type MetadataProps = {
    metadata: IMetadata;
    index: number;
    listName: string;
    onMetadataChange: Function;
};

export const Metadata: React.FC<MetadataProps> = (props) => {
    const { metadata, index, listName, onMetadataChange  } = props;

    const removeTag = () => {
        onMetadataChange("SAVED", "NONE", metadata.id);
    }

    const selectTag = () => {
        onMetadataChange("UNSAVED", listName, metadata.id);
    }

    const MetadataTag = (title:string) => {
        if(listName === "NONE"){
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
        if(metadata.rank <= 10){
            return (
                <Badge style={{ backgroundColor: "firebrick" }} count={metadata.rank}>
                    {MetadataTag(metadata.title.toString())}
                </Badge>
            );
        }
        else if(metadata.rank > 10 && metadata.rank <= 50){
            return <Badge style={{ backgroundColor: "orange" }} count={metadata.rank}>
                {MetadataTag(metadata.title.toString())}
            </Badge>
        }
        else if(metadata.rank > 50 && metadata.rank < 100){
            return <Badge style={{ backgroundColor: "cadetblue" }} count={metadata.rank}>
                {MetadataTag(metadata.title.toString())}
            </Badge>
        }
        else{
            return <Badge style={{ backgroundColor: "forestgreen" }} count={metadata.rank}>
                {MetadataTag(metadata.title.toString())}
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
