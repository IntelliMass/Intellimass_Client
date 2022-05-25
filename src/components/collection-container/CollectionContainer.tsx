import React, {useEffect} from "react";
import { Collapse } from 'antd';
import "./CollectionContainer.scss"
import {CollectionTable} from "../collection-table/CollectionTable";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {CollectionState, ICollection} from "../../reducers/CollectionResucer";
import {getCollections} from "../../actions/CollectionAction";

const { Panel } = Collapse;

type CollectionContainerProps = {};

export const CollectionContainer: React.FC<CollectionContainerProps> = (props) => {
    const collection = useAppSelector<CollectionState>(state => state.collection.collection);
    const userid = useAppSelector<string>(state => state.user.userId) || 'userId';

    const dispatch = useAppDispatch()

    useEffect(()=>{
        if(userid !== '')
            // @ts-ignore
            dispatch(getCollections());
    },[userid]);


    useEffect(()=>{
        console.log(collection)
    },[collection ])

    function callback(key:any) {
        console.log(key);
    }

    return (
        <div className="collection-container">
            <h2 style={{color:"white"}}>Your private collections</h2>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                {collection.collection && collection.collection.map((collection: ICollection, index: number)=>(
                    <Panel header={collection.collection_name} key={collection.collection_name + index}>
                        <CollectionTable articles={collection.articles_list}/>
                    </Panel>
                ))}
            </Collapse>
        </div>
    );
};


