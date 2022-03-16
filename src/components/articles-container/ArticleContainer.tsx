import React, {useState, useEffect} from "react";
import {ArticleList} from "../../modules/articles/articlesList/ArticleList";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"
import "./ArticleContainer.scss"
import {Button} from "antd";
import {SimpleNet} from "../network2/SimpleNet";
import {MetadataList} from "../metadata-list/MetadataList";

type ArticlesContainerProps = {};

type ArticlesPosition = {
    type: string;
}

export const ArticlesContainer: React.FC<ArticlesContainerProps> = (props) => {
    const theme = useAppSelector<string>(state => state.shared.theme);
    const screenPosition: Array<ArticlesPosition> = [{type:"Categories"}, {type:"List"}, {type:"Network"} ]
    const [selectedPosition, setSelectedPosition] = useState<ArticlesPosition>({type:"Categories"});

    const onPositionChange = (value: string) => {
        setSelectedPosition({type: value});
    }

    return (
        <div className="articles-screen-container">
            <div className="metadata-left-container">
                <div className="screen-options-buttons">
                    {screenPosition.map((position)=>(
                        <Button key={position.type} onClick={()=>{onPositionChange(position.type)}}>{position.type}</Button>
                    ))}
                </div>
                <MetadataList items={[1, 2, 3, 4]} />
            </div>

            {selectedPosition.type === "Categories" && <div className="categories-right-container">
                Categories
            </div>}
            {selectedPosition.type === "List" && <div className="articles-right-container">
                <ArticleList/>
            </div>}
            {selectedPosition.type === "Network" && <div className="network-right-container">
                <SimpleNet/>
            </div>}
        </div>
    );
};

