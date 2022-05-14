import React, {useEffect} from "react";
import { Collapse } from 'antd';
import "./CollectionContainer.scss"
import {CollectionTable} from "../collection-table/CollectionTable";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {ICollection} from "../../reducers/CollectionResucer";
import {getCollections} from "../../actions/CollectionAction";

const { Panel } = Collapse;

type CollectionContainerProps = {};

export const CollectionContainer: React.FC<CollectionContainerProps> = (props) => {
    const collections = useAppSelector<Array<ICollection>>(state => state.collection.collections);
    const userid = useAppSelector<string>(state => state.user.userId) || 'userId';

    const dispatch = useAppDispatch()

    useEffect(()=>{
        // @ts-ignore
        dispatch(getCollections());
    },[userid]);

    useEffect(()=>{},[collections ])

    function callback(key:any) {
        console.log(key);
    }

    return (
        <div className="collection-container">
            <h2 style={{color:"white"}}>Private collection</h2>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                {collections.map((collection, index)=>(
                    <Panel header={collection.collectionName} key={collection.collectionName + index}>
                        <CollectionTable articles={collection.articles}/>
                    </Panel>
                ))}
            </Collapse>
        </div>
    );
};


