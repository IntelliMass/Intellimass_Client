import React, {useEffect, useState} from "react";
import {SimpleNet} from "../components/network2/SimpleNet";
import { useAppSelector, useAppDispatch } from "../hooks/hooks"
import {INetwork} from "../reducers/NetworkReducer";
import {getNetwork, updateConnectionType} from "../actions/NetworkAction";
import {IMetadataWithCategory, NewMetadataList} from "../components/new-metadata-list/NewMetadataList";
import {INewSingleCatalog} from "../reducers/CatalogReducer";
import {MenuButton2} from "../components/menu-button/MenuButton2";
import {ClusterContainer} from "../components/cluster-container/ClusterContainer";
import {ExportAction} from "../components/exort-action/ExportAction";
import {BreadCrumbList} from "../components/bread-crumb-list/BreadCrumbList";
import {Button, Radio, Select, Spin, Tooltip} from "antd";
import aos from "aos";
import {useHistory} from "react-router-dom";
import "../index.scss"
import {ExpandableTopBar} from "../components/expended-bar/ExpandedBar";
import {ServiceSummary} from "../components/expand-stattistic-panel/ExpandStatisticPanel";
import {ArticleCard} from "../components/article-card/ArticleCard";
import {MinusOutlined, MoreOutlined, PlusOutlined} from "@ant-design/icons";
import {updateCount} from "../actions/ArticleActions";
import {metadataListToSerialize} from "./ScreenArticles";
import {stringCategoriesFromArray} from "../actions/CatalogAction";
import {RadioChangeEvent} from "antd/es/radio";
import {SemanticNetworkComp} from "../components/semantic-network/SemanticNetwork";
import {ISemanticNetwork} from "../reducers/SemanticNetworkReducer";
import {getSemanticNetwork} from "../actions/SemanticNetworkAction";
const { Option } = Select;

type ScreenSearchProps = {};

const ScreenNetwork: React.FC<ScreenSearchProps> = () => {
    // @ts-ignore
    const network = useAppSelector<INetwork>(state => state.network.network);
    const queryId = useAppSelector<string>(state => state.query.queryId);
    // @ts-ignore
    const count = useAppSelector<number>(state => state.article.count);

    const savedMetadataList = useAppSelector<Array<IMetadataWithCategory>>(state => state.metadata.savedMetadataList);
    const categories = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.selectedCategories);
    const numberOfClusters = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.numOfClusters);
    // @ts-ignore
    const numberOfArticles = useAppSelector<number>(state => state.article.count);

    const semanticNetwork =  useAppSelector<ISemanticNetwork>(state => state.semantic.network);


    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [actionOption, setActionOption] = useState<string>('none');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [selectedNode, setSelectedNode] = useState<any>(null);
    const [screenType, setScreenType] = useState<string>('semantic');

    const history = useHistory();
    const dispatch = useAppDispatch();


    useEffect(()=>{
        if (queryId === ''){
            history.replace('/');
        }
        setIsLoader(true);
        // @ts-ignore
      // dispatch(getNetwork(queryId, metadataListToSerialize(savedMetadataList), "frequentWords", numberOfArticles, stringCategoriesFromArray(categories), numberOfClusters));
        // @ts-ignore
        dispatch(getSemanticNetwork(queryId, metadataListToSerialize(savedMetadataList), "frequentWords", numberOfArticles, stringCategoriesFromArray(categories), numberOfClusters));


    },[queryId, savedMetadataList, numberOfClusters])

    useEffect(()=>{
    },[ categories ])

    useEffect(()=>{
        // @ts-ignore
        //dispatch(getNetwork(queryId, metadataListToSerialize(savedMetadataList), "frequentWords", numberOfArticles, stringCategoriesFromArray(categories), numberOfClusters));
    },[numberOfArticles])

    useEffect(()=>{
        if(network.nodes.length === 0)  setIsLoader(true);
        else setIsLoader(false);
    },[network])

    useEffect(()=>{
        console.log(semanticNetwork)
       setIsLoader(false);
    },[semanticNetwork])

    useEffect(()=>{
        aos.init({duration: 1000})
    },[])

    const nodeHandler = (article:any) => {
        setSelectedNode({...article});
    }

    const actionHandler = (newAction: string) => {
        setActionOption('none');
        setTimeout(() => {
            if(newAction === 'Filter'){
                setActionOption('Filter');
            }
            if(newAction === 'Cluster'){
                setActionOption('Cluster');
            }
            if(newAction === 'Export'){
                setActionOption('Export');
            }
            if(newAction === 'Breadcrumb'){
                setActionOption('Breadcrumb');
            }
            if(newAction === 'none'){
                return
            }
        }, 200);
    }

    const onScreenTypeChange = (e: RadioChangeEvent) => {
        if ( e.target.value === 'semantic') setActionOption( 'none');
        setScreenType(e.target.value)
    };

    return (
        queryId !== '' || network.nodes.length !== 0 ?
            <div className="screen screen-network">
                {/*<div className="radio-group-network-choice">*/}
                {/*    <h3 className="radio-group-header">Which Network would you like to see? </h3>*/}
                {/*    <Radio.Group className="radio-options" defaultValue={screenType} buttonStyle="solid" onChange={onScreenTypeChange}>*/}
                {/*        <Radio.Button value="articles">Articles network</Radio.Button>*/}
                {/*        <Radio.Button value="semantic">Metadata semantic network</Radio.Button>*/}
                {/*    </Radio.Group>*/}
                {/*</div>*/}
                {/*{screenType === 'articles' &&*/}
                {/*<MenuButton2 actionOption={actionOption} setActionOption={actionHandler} isOpen={isMenuOpen}*/}
                {/*             setIsOpen={setIsMenuOpen}/>*/}
                {/*}*/}
                {/*{ actionOption !== 'none' &&*/}
                {/*<div className={`actions-containers-network ${isMenuOpen && 'isMenuOpen'}`} data-aos='fade-right' data-aos-duration='1500'>*/}
                {/*    { actionOption === 'Filter' &&*/}
                {/*    <>*/}
                {/*        <h3 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Filter</h3>*/}
                {/*        <NewMetadataList metadataList={[]} savedMetadataList={[]}/>*/}
                {/*    </>*/}
                {/*    }*/}
                {/*    {actionOption === 'Cluster' &&*/}
                {/*    <>*/}
                {/*        <h2 style={{textAlign: 'center', lineHeight: 2, fontSize: 18}}>Cluster</h2>*/}
                {/*        <ClusterContainer/>*/}
                {/*    </>*/}
                {/*    }*/}
                {/*    {actionOption === 'Export' &&*/}
                {/*    <>*/}
                {/*        <h2 style={{textAlign: 'center', lineHeight: 2, fontSize: 18}}>Export</h2>*/}
                {/*        <ExportAction/>*/}
                {/*    </>*/}
                {/*    }*/}
                {/*    { actionOption === 'Breadcrumb' &&*/}
                {/*    <>*/}
                {/*        <h2 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Breadcrumb</h2>*/}
                {/*        <BreadCrumbList/>*/}
                {/*    </>*/}
                {/*    }*/}
                {/*</div>*/}
                {/*}*/}
                {/*{screenType === 'articles' &&*/}
                {/*    <div className="network-new-container">*/}
                {/*        {isLoader ? <div className="loader-container">*/}
                {/*                        <Spin size="large" />*/}
                {/*                        <h4 style={{marginLeft: -100}} className="loader-articles-details">Uploading the articles network</h4>*/}
                {/*                    </div> : ''*/}
                {/*            // <SimpleNet network={network} selectedNode={selectedNode} setSelectedNode={nodeHandler} actionOption={actionOption}/>*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*}*/}
                {screenType === 'semantic' &&
                <div className="network-new-container">
                    {isLoader ? <div className="loader-container">
                            <Spin size="large" />
                            <h4 style={{marginLeft: -100}} className="loader-articles-details">Uploading the articles network</h4>
                        </div> :
                        <SemanticNetworkComp network={semanticNetwork}/>
                    }
                </div>
                }

                {/*{*/}
                {/*    isLoader ? <div className="loader-container">*/}
                {/*            <Spin size="large" />*/}
                {/*            <h4 style={{marginLeft: -100}} className="loader-articles-details">Uploading the articles network</h4>*/}
                {/*        </div> :*/}
                {/*        <div>*/}
                {/*            <div className="expandable-topbar-container-div">*/}
                {/*                <ExpandableTopBar contractedHeight={72} expandedHeight={600} isPadded={true}>*/}
                {/*                    <div>*/}
                {/*                        <ServiceSummary article={selectedNode}/>*/}
                {/*                    </div>*/}
                {/*                    <div>*/}
                {/*                        {selectedNode ? <ArticleCard article={selectedNode}/>:<span>No article selected.</span>}*/}
                {/*                    </div>*/}
                {/*                </ExpandableTopBar>*/}
                {/*            </div>*/}
                {/*            <div style={{color: "white", fontSize: 18, marginLeft: "5%", marginBottom: "1%"}}>*/}
                {/*                <span style={{marginLeft: "5%"}}> Original Articles number ( {numberOfArticles} )</span>*/}
                {/*                <Tooltip placement="bottom" title={'Insert more 100 articles'}>*/}
                {/*                    <Button style={{marginLeft: "1%", marginRight: "1%"}}*/}
                {/*                            icon={<PlusOutlined />}*/}
                {/*                            onClick={() => plus()}*/}
                {/*                    />*/}
                {/*                </Tooltip>*/}
                {/*                <Tooltip placement="bottom" title={'Reduce by 100 articles'}>*/}
                {/*                    <Button*/}
                {/*                        icon={<MinusOutlined />}*/}
                {/*                        onClick={() => minus()}*/}
                {/*                    />*/}
                {/*                </Tooltip>*/}
                {/*            </div>*/}

                {/*            <span style={{color: "yellow", fontSize: 18, marginLeft: "5%"}}> Articles-nodes number ( {network.nodes.length || '0'} ) | Nodes-connections ( {network.links.length || '0'} ) </span>*/}
                {/*            <SimpleNet network={network} selectedNode={selectedNode} setSelectedNode={nodeHandler} actionOption={actionOption}/>*/}
                {/*        </div>*/}
                {/*}*/}
            </div> : <div className="screen screen-articles"> </div>
  );
};

export default ScreenNetwork;

ScreenNetwork.defaultProps = {};
