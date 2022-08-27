import React, {useEffect, useState} from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hooks"
import {INetwork} from "../reducers/NetworkReducer";
import {IMetadataWithCategory} from "../components/new-metadata-list/NewMetadataList";
import {INewSingleCatalog} from "../reducers/CatalogReducer";
import { Spin} from "antd";
import aos from "aos";
import {useHistory} from "react-router-dom";
import "../index.scss"
import {metadataListToSerialize} from "./ScreenArticles";
import {stringCategoriesFromArray} from "../actions/CatalogAction";
import {SemanticNetworkComp} from "../components/semantic-network/SemanticNetwork";
import {ISemanticNetwork} from "../reducers/SemanticNetworkReducer";
import {getSemanticNetwork} from "../actions/SemanticNetworkAction";

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

    return (
        queryId !== '' || network.nodes.length !== 0 ?
            <div className="screen screen-network">
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
            </div> : <div className="screen screen-articles"> </div>
  );
};

export default ScreenNetwork;

ScreenNetwork.defaultProps = {};
