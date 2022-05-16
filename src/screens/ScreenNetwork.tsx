import React, {useEffect, useState} from "react";
import {SimpleNet} from "../components/network2/SimpleNet";
import { useAppSelector, useAppDispatch } from "../hooks/hooks"
import {INetwork} from "../reducers/NetworkReducer";
import {getNetwork} from "../actions/NetworkAction";
import {IMetadataWithCategory} from "../components/new-metadata-list/NewMetadataList";
import {INewSingleCatalog} from "../reducers/CatalogReducer";

type ScreenSearchProps = {};

const ScreenNetwork: React.FC<ScreenSearchProps> = () => {
    // @ts-ignore
    const network = useAppSelector<INetwork>(state => state.network.network);
    const queryId = useAppSelector<string>(state => state.query.queryId);

    const savedMetadataList = useAppSelector<Array<IMetadataWithCategory>>(state => state.metadata.savedMetadataList);
    const categories = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.selectedCategories);
    const numberOfClusters = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.numOfClusters);

    const dispatch = useAppDispatch()

    useEffect(()=>{
        // @ts-ignore
        dispatch(getNetwork(queryId, savedMetadataList, "frequentWords", 100, categories, numberOfClusters));
    },[queryId])


    useEffect(()=>{
        console.log(network);
    },[network, savedMetadataList, categories, numberOfClusters ])

    return (
      <div className={`screen`}>
        {/*<Network/>*/}
          {/*<MetadataList items={[1, 2, 3, 4]} />*/}
          {/*  <Network2/>*/}
          <SimpleNet network={network}/>
      </div>
  );
};

export default ScreenNetwork;

ScreenNetwork.defaultProps = {};
