import React, {useEffect, useState} from "react";
import {SimpleNet} from "../components/network2/SimpleNet";
import { useAppSelector, useAppDispatch } from "../hooks/hooks"
import {INetwork} from "../reducers/NetworkReducer";
import {getNetwork} from "../actions/NetworkAction";

type ScreenSearchProps = {};

const ScreenNetwork: React.FC<ScreenSearchProps> = () => {
    const theme = useAppSelector<string>(state => state.shared.theme);
    // @ts-ignore
    const network = useAppSelector<INetwork>(state => state.network.network);
    const queryId = useAppSelector<string>(state => state.query.queryId);

    const dispatch = useAppDispatch()

    useEffect(()=>{
        // @ts-ignore
        dispatch(getNetwork(queryId));
    },[queryId])


    useEffect(()=>{
        console.log(network);
    },[network])

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
