import React, {useEffect, useState} from "react";
import {SimpleNet} from "../components/network2/SimpleNet";
import { useAppSelector, useAppDispatch } from "../hooks/hooks"
import {INetwork} from "../reducers/NetworkReducer";
import {getNetwork} from "../actions/NetworkAction";
import {IMetadataWithCategory, NewMetadataList} from "../components/new-metadata-list/NewMetadataList";
import {INewSingleCatalog} from "../reducers/CatalogReducer";
import {MenuButton2} from "../components/menu-button/MenuButton2";
import {ClusterContainer} from "../components/cluster-container/ClusterContainer";
import {ExportAction} from "../components/exort-action/ExportAction";
import {BreadCrumbList} from "../components/bread-crumb-list/BreadCrumbList";
import {Spin} from "antd";
import aos from "aos";
import {useHistory} from "react-router-dom";
import "../index.scss"

type ScreenSearchProps = {};

const ScreenNetwork: React.FC<ScreenSearchProps> = () => {
    // @ts-ignore
    const network = useAppSelector<INetwork>(state => state.network.network);
    const queryId = useAppSelector<string>(state => state.query.queryId);

    const savedMetadataList = useAppSelector<Array<IMetadataWithCategory>>(state => state.metadata.savedMetadataList);
    const categories = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.selectedCategories);
    const numberOfClusters = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.numOfClusters);
    const query = useAppSelector<string>(state => state.query.query);
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [localCount, setCount] = useState<number>(100);
    const [actionOption, setActionOption] = useState<string>('none');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [selectedNode, setSelectedNode] = useState<any>(null);

    const history = useHistory();
    const dispatch = useAppDispatch();


    useEffect(()=>{
        if (queryId === ''){
            history.replace('/');
        }
        setIsLoader(true);
        // @ts-ignore
        dispatch(getNetwork(queryId, savedMetadataList, "frequentWords", 100, categories, numberOfClusters));
    },[queryId, savedMetadataList, numberOfClusters])

    useEffect(()=>{
    },[ categories ])

    useEffect(()=>{
        console.log(network);
        if(network.nodes.length === 0)  setIsLoader(true);
        else setIsLoader(false);
    },[network])


    useEffect(()=>{
        aos.init({duration: 1000})
    },[])


    const nodeHandler = (article:any) => {
        console.log(article);
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

    return (
        queryId !== '' || network.nodes.length !== 0 ?
            <div className="screen screen-articles">
                <MenuButton2 actionOption={actionOption} setActionOption={actionHandler} isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
                {actionOption !== 'none' &&
                <div className={`actions-containers ${isMenuOpen && 'isMenuOpen'}`} data-aos='fade-right' data-aos-duration='1500'>
                    { actionOption === 'Filter' &&
                    <>
                        <h3 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Filter</h3>
                        <NewMetadataList metadataList={[]} savedMetadataList={[]}/>
                    </>
                    }
                    {actionOption === 'Cluster' &&
                    <>
                        <h2 style={{textAlign: 'center', lineHeight: 2, fontSize: 18}}>Cluster</h2>
                        <ClusterContainer/>
                    </>
                    }
                    { actionOption === 'Export' &&
                    <>
                        <h2 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Export</h2>
                        <ExportAction/>
                    </> }
                    { actionOption === 'Breadcrumb' &&
                    <>
                        <h2 style={{textAlign: 'center',lineHeight: 2, fontSize: 18}}>Breadcrumb</h2>
                        <BreadCrumbList/>
                    </>
                    }
                </div>
                }
                {
                    isLoader ? <div className="loader-container">
                            <Spin size="large" />
                            <h4 className="loader-articles-details">Searching for articles</h4>
                        </div> :
                        <div>
                            <SimpleNet network={network} selectedNode={selectedNode} setSelectedNode={nodeHandler} actionOption={actionOption}/>
                        </div>
                }
            </div> : <div className="screen screen-articles"> </div>
  );
};

export default ScreenNetwork;

ScreenNetwork.defaultProps = {};
