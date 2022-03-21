import React, {useState, useEffect} from "react";
import {ArticleList} from "../../modules/articles/articlesList/ArticleList";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"
import "./ArticleContainer.scss"
import {Button, Spin} from "antd";
import {SimpleNet} from "../network2/SimpleNet";
import {MetadataList} from "../metadata-list/MetadataList";
import {CategoriesList} from "../category-list/CategoryList";
import {INetwork} from "../../reducers/NetworkReducer";
import {getNetwork} from "../../actions/NetworkAction";
import {ArticleOfList} from "../../actions/ArticleActions";

type ArticlesContainerProps = {};

type ArticlesPosition = {
    type: string;
}

export const ArticlesContainer: React.FC<ArticlesContainerProps> = (props) => {
    const theme = useAppSelector<string>(state => state.shared.theme);
    // @ts-ignore
    const network = useAppSelector<any>(state => state.network.network);
    const queryId = useAppSelector<string>(state => state.query.queryId);

    // @ts-ignore
    const articles = useAppSelector<Array<ArticleOfList>>(state => state.article.serverArticles);
    const query = useAppSelector<string>(state => state.query.query);

    const screenPosition: Array<ArticlesPosition> = [{type:"Categories"}, {type:"List"}, {type:"Network"} ]
    const [selectedPosition, setSelectedPosition] = useState<ArticlesPosition>({type:"Categories"});
    const [isLoader, setIsLoader] = useState<boolean>(false);

    const [categoriesCount, setCategoriesCount] = useState<number>(0);


    const dispatch = useAppDispatch()

    useEffect(()=>{
        console.log(network);
        setIsLoader(false);
    },[network])

    const onPositionChange = (value: string) => {
        setSelectedPosition({type: value});
        setIsLoader(true);
        if (value === "Network"){
            // @ts-ignore
            dispatch(getNetwork(queryId));
        }
    }

    const ItemCurrentCount = () => {
        if (selectedPosition.type === "Categories"){
            return(
                <span className="count-items"> Categories ( {} ) </span>
            );
        } else if (selectedPosition.type === "Categories"){

        }
        else {

        }
    }

    return (
        <div className="articles-screen-container">
            <div className="metadata-left-container">
                <MetadataList items={[1, 2, 3, 4]} />
            </div>
            <div className="metadata-right-container">
                <div className="screen-options-buttons">
                    {screenPosition.map((position)=>(
                        <Button key={position.type} onClick={()=>{onPositionChange(position.type)}}>{position.type}</Button>
                    ))}
                    {/*<span className="count-items">{selectedPosition.type} {} items </span>*/}
                </div>
                {selectedPosition.type === "Categories" && <div className="categories-right-container">
                    {isLoader ? <div className="loader-container">
                        <Spin size="large" />
                        <h4 className="loader-details">Searching for articles categories</h4>
                    </div> :  <CategoriesList/>}
                </div>}
                {selectedPosition.type === "List" && <div className="articles-right-container">
                    {isLoader ? <div className="loader-container">
                        <Spin size="large" />
                        <h4 className="loader-articles-details">Searching for articles</h4>
                    </div> :  <ArticleList/>}
                </div>}

                {selectedPosition.type === "Network" && <div className="network-right-container">
                    {isLoader ? <div className="loader-container">
                        <Spin size="large" />
                        <h4 className="loader-details">Creating yours articles network</h4>
                    </div> : <SimpleNet network={network}/>}
                </div>}
            </div>
        </div>
    );
};

