import React, {useState, useEffect} from "react";
import {ArticleList} from "../../modules/articles/articlesList/ArticleList";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"
import "./ArticleContainer.scss"
import {Alert, Button, Col, Form, InputNumber, Row, Spin} from "antd";
import {SimpleNet} from "../network2/SimpleNet";
import {getTitlesFromMetadata, MetadataList} from "../metadata-list/MetadataList";
import {customNodesSize, getNetwork, updateConnectionType} from "../../actions/NetworkAction";
import {ArticleOfList, getArticleDetail, getFilteredArticles, updateCount} from "../../actions/ArticleActions";
import {ExpandableTopBar} from "../expended-bar/ExpandedBar";
import {ServiceSummary} from "../expand-stattistic-panel/ExpandStatisticPanel";
import { Select } from 'antd';
import {PlusOutlined, MinusOutlined} from "@ant-design/icons";
import {ArticleCard} from "../article-card/ArticleCard";
import {typeGeneretor} from "../category-tags/CategoryTag";
import {IMetadata} from "../../reducers/MetadataReducer";
import {INewSingleCatalog} from "../../reducers/CatalogReducer";
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
    // @ts-ignore
    const count = useAppSelector<number>(state => state.article.count);
    // @ts-ignore
    const connectionType = useAppSelector<string>(state => state.network.connectionType);

    // @ts-ignore
    const catalog = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.catalogs);

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
       // dispatch(getMetadata(queryId));
        // @ts-ignore
        dispatch(getFilteredArticles(queryId,  "", localCount));
    },[queryId]);

    useEffect(()=>{
        setIsLoader(false);
        customNodesSize(network);
    },[network])

    useEffect(()=>{
        setIsLoader(false);
    },[articles])

    useEffect(() => {
        setIsMetadataLoader(false);
    },[metadataList])

    useEffect(()=>{
        setConnectionType(connectionType);
    },[connectionType])

    useEffect(()=>{
    },[savedMetadataList])

    useEffect(()=>{
        setCount(count);
        // @ts-ignore
        dispatch(getFilteredArticles(queryId, '', count));

        // @ts-ignore
        dispatch(getNetwork(queryId, "frequentWords",getTitlesFromMetadata(savedMetadataList), connectionType, count));

        // @ts-ignore
        //dispatch(getMetadata(queryId));
    },[ count])

    useEffect(()=>{
        setConnectionType(connectionType);

        // @ts-ignore
        dispatch(getNetwork(queryId, "frequentWords",getTitlesFromMetadata(savedMetadataList), connectionType, count));

    },[ connectionType])

    useEffect(()=>{
    },[localCount])

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
            dispatch(queryId, '', localCount);
        }
    }

    const nodeHandler = (article:any) => {
        setSelectedNode({...article});
    }

    const ItemCurrentCount = () => {
        if (selectedPosition.type === "List"){
            return(
                <span className="count-items"> Filtered articles number ( {articles.length || '0'} ) </span>
            );
        }
        else {
            return(
                <span className="count-items"> Articles-nodes number ( {network.nodes.length || '0'} ) | Nodes-connections ( {network.links.length || '0'} ) </span>
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
                        <Option value="frequentWords">Frequent words</Option>
                        <Option value="topics">Topics</Option>
                    </Select>
                    <span className="action-title"> Original Articles number ( {localCount} )</span>
                    <Button
                        icon={<PlusOutlined />}
                        onClick={() => plus()}
                    />
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
                <ItemCurrentCount/>
                {selectedPosition.type === "List" && <div className="articles-right-container">
                    {isLoader ? <div className="loader-container">
                        <Spin size="large" />
                        <h4 className="loader-articles-details">Searching for articles</h4>
                    </div> :
                        <div>
                            <ArticleList articles={articles} queryId={queryId}/>
                        </div>}
                </div>}

                {selectedPosition.type === "Network" &&
                <div className="network-right-container">
                    <div className="categories-selection-container">
                        <Row gutter={20}>
                            {catalog.map((field: INewSingleCatalog, index:number)=>{
                                return(
                                    <Col span={4} >
                                        <Alert message={field.title} type={typeGeneretor(index)} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                    {isLoader ? <div className="loader-container">
                        <Spin size="large" />
                        <h4 className="loader-details">Creating yours articles network</h4>
                    </div> : <SimpleNet network={network} selectedNode={selectedNode} setSelectedNode={nodeHandler}/>}
                </div>}
            </div>
        </div>
    );
};

