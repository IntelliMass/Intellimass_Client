import React, {useState, useEffect} from "react";
import {ArticleList} from "../../modules/articles/articlesList/ArticleList";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"
import "./ArticleContainer.scss"
import {Button, Form, InputNumber, Spin} from "antd";
import {SimpleNet} from "../network2/SimpleNet";
import {getTitlesFromMetadata, MetadataList} from "../metadata-list/MetadataList";
import {CategoriesList} from "../category-list/CategoryList";
import {INetwork} from "../../reducers/NetworkReducer";
import {getNetwork} from "../../actions/NetworkAction";
import {ArticleOfList, getArticleDetail, getArticles, getFilteredArticles, updateConnectionType, updateCount} from "../../actions/ArticleActions";
import {ExpandableTopBar} from "../expended-bar/ExpandedBar";
import {ServiceSummary} from "../expand-stattistic-panel/ExpandStatisticPanel";
import {IMetadata} from "../metadata/Metadata";
import {getMetadata} from "../../actions/MeatadataAction";
import { Select } from 'antd';
import {PlusOutlined, MinusOutlined} from "@ant-design/icons";
import {ArticleCard} from "../article-card/ArticleCard";
const { Option } = Select;

type ArticlesContainerProps = {};

type ArticlesPosition = {
    type: string;
}

export const ArticlesContainer: React.FC<ArticlesContainerProps> = (props) => {
    // @ts-ignore
    const network = useAppSelector<any>(state => state.network.network);
    const queryId = useAppSelector<string>(state => state.query.queryId);

    // @ts-ignore
    const articles = useAppSelector<Array<ArticleOfList>>(state => state.article.serverArticles);
    const query = useAppSelector<string>(state => state.query.query);
    // @ts-ignore
    const count = useAppSelector<number>(state => state.article.count);
    // @ts-ignore
    const connectionType = useAppSelector<string>(state => state.article.connectionType);


    // @ts-ignore
    const catalog = useAppSelector<Array<string>>(state => state.catalog.catalogs);
    const categories = useAppSelector<Array<string>>(state => state.catalog.selectedCategories);

    const metadataList = useAppSelector<Array<IMetadata>>(state => state.metadata.metadataList);
    const savedMetadataList = useAppSelector<Array<IMetadata>>(state => state.metadata.savedMetadataList);

    const screenPosition: Array<ArticlesPosition> = [
        // {type:"Categories"},
        {type:"List"},
        {type:"Network"}
    ]
    const [selectedPosition, setSelectedPosition] = useState<ArticlesPosition>({type:"List"});
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [isMetadataLoader, setIsMetadataLoader] = useState<boolean>(false);

    const [selectedNode, setSelectedNode] = useState<any>(null);
    const [localCount, setCount] = useState<number>(count);
    const [localConnectionType, setConnectionType] = useState<string>(connectionType);

    const dispatch = useAppDispatch()

    useEffect(()=>{
        setIsMetadataLoader(true);
        // @ts-ignore
        dispatch(getMetadata(queryId));
        // @ts-ignore
        dispatch(getFilteredArticles(queryId, getTitlesFromMetadata(savedMetadataList), 'frequentWords', localCount));
    },[queryId]);

    useEffect(()=>{
        console.log(network);
        setIsLoader(false);
    },[network])

    useEffect(()=>{
        console.log(articles);
        setIsLoader(false);
    },[articles])

    useEffect(() => {
        console.log(metadataList)
        setIsMetadataLoader(false);
    },[metadataList])

    useEffect(()=>{
        console.log(connectionType)
        setConnectionType(connectionType);
    },[connectionType])

    useEffect(()=>{
        console.log(savedMetadataList)
    },[savedMetadataList])

    useEffect(()=>{
        console.log(count)
        setCount(count);
    },[ count])

    useEffect(()=>{
        if (selectedNode){
            if (selectedNode.paperId){
                // @ts-ignore
                dispatch(getArticleDetail(selectedNode.paperId));
            }
        }
    },[selectedNode])


    const onPositionChange = (value: string) => {
        setSelectedPosition({type: value});
        setIsLoader(true);
        if (value === "Network"){
            // @ts-ignore
            dispatch(getNetwork(queryId, "frequentWords",getTitlesFromMetadata(savedMetadataList), connectionType, localCount));
        } else if (value === "List"){
            // @ts-ignore
            dispatch(getFilteredArticles(queryId, getTitlesFromMetadata(savedMetadataList), 'frequentWords', localCount));
            // dispatch(getArticles(queryId));
        }
    }

    const nodeHandler = (article:any) => {
        console.log(article);
        setSelectedNode({...article});
    }

    const ItemCurrentCount = () => {
        // if (selectedPosition.type === "Categories"){
        //     return(
        //         <span className="count-items"> Categories ( {catalog.length || '0'} ) </span>
        //     );
        // } else
        if (selectedPosition.type === "List"){
            return(
                <span className="count-items"> Articles ( {articles.length || '0'} ) </span>
            );
        }
        else {
            return(
                <span className="count-items"> Articles-nodes ( {network.nodes.length || '0'} ) | Nodes-connections ( {network.links.length || '0'} ) </span>
            );
        }
    }

    function handleChange(value:string) {
        // @ts-ignore
        dispatch(updateConnectionType(value));
    }

    function plus() {
        if(count === 1000){
            return;
        }
        // @ts-ignore
        dispatch(updateCount(count+100));
    }

    function minus() {
        if(count === 100){
            return;
        }
        // @ts-ignore
        dispatch(updateCount(count-100));
    }

    return (
        <div className="articles-screen-container">
            <div className="metadata-left-container">
                {isMetadataLoader ? <div className="loader-container">
                    <Spin size="large" />
                    <h4 className="loader-details">Searching for metadata</h4>
                </div> :   <MetadataList metadataList={metadataList} savedMetadataList={savedMetadataList} />}
            </div>
            <div className="metadata-right-container">
                <div className={"articles-container-actions"}>
                    <span className="action-title"> Connection type: </span>
                    <Select className="connection-type" onChange={handleChange} placeholder="Network connection type">
                        <Option value="authors">Authors</Option>
                        <Option value="frequentsWords">Frequents words</Option>
                        <Option value="topics">Topics</Option>
                    </Select>
                    <span className="action-title"> Articles number </span>
                    <Button
                        icon={<PlusOutlined />}
                        onClick={() => plus()}
                    />
                    <InputNumber min={10} max={1000} defaultValue={localCount}/>
                    <Button
                        icon={<MinusOutlined />}
                        onClick={() => minus()}
                    />
                    <div className="screen-options-buttons">
                        <span className="action-title"> Screen mode: </span>
                        {screenPosition.map((position)=>(
                            <Button key={position.type} onClick={()=>{onPositionChange(position.type)}}>{position.type}</Button>
                        ))}
                    </div>
                </div>
                <div className="expandable-topbar-container-div">
                    <ExpandableTopBar contractedHeight={72} expandedHeight={600} isPadded={true}>
                        <div>
                            <ServiceSummary article={selectedNode}/>
                        </div>
                        <div>
                            {selectedNode ? <ArticleCard article={selectedNode}/>:<span>No article selected.</span>}
                        </div>
                    </ExpandableTopBar>
                </div>
                {/*{selectedPosition.type === "Categories" && <div className="categories-right-container">*/}
                {/*    {isLoader ? <div className="loader-container">*/}
                {/*        <Spin size="large" />*/}
                {/*        <h4 className="loader-details">Searching for articles categories</h4>*/}
                {/*    </div> :  <CategoriesList/>}*/}
                {/*</div>}*/}
                <ItemCurrentCount/>
                {selectedPosition.type === "List" && <div className="articles-right-container">
                    {isLoader ? <div className="loader-container">
                        <Spin size="large" />
                        <h4 className="loader-articles-details">Searching for articles</h4>
                    </div> :
                        <div>
                            <ArticleList articles={articles} queryId={queryId} query={query}/>
                        </div>}
                </div>}

                {selectedPosition.type === "Network" && <div className="network-right-container">
                    {isLoader ? <div className="loader-container">
                        <Spin size="large" />
                        <h4 className="loader-details">Creating yours articles network</h4>
                    </div> : <SimpleNet network={network} selectedNode={selectedNode} setSelectedNode={nodeHandler}/>}
                </div>}
            </div>
        </div>
    );
};

