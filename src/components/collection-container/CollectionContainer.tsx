import React, {useEffect} from "react";
import {Button, Collapse} from 'antd';
import "./CollectionContainer.scss"
import {CollectionTable} from "../collection-table/CollectionTable";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {CollectionState, ICollection} from "../../reducers/CollectionResucer";
import {createCollection, getCollections} from "../../actions/CollectionAction";
import Swal from "sweetalert2";

const { Panel } = Collapse;

type CollectionContainerProps = {};

export const CollectionContainer: React.FC<CollectionContainerProps> = (props) => {
    const collection = useAppSelector<CollectionState>(state => state.collection.collection);
    const userid = useAppSelector<string>(state => state.user.userId) || 'userId';
    const queryId = useAppSelector<string>(state => state.query.queryId);
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

    const onSave = () => {
        Swal.fire({
            title: 'Type new collection name',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Create',
            showLoaderOnConfirm: true,
            preConfirm: (newCollectionName:string) => {
                console.log(newCollectionName);
                // @ts-ignore
                dispatch(createCollection(queryId, userid, collections, newCollectionName))
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Your new collection is created',
                    `You can add there articles`,
                    'success'
                )
            }
        })
    }

    return (
        <div className="collection-container">
            <h2 style={{color:"white"}}>Your private collections</h2>
            <Button className="button-create-collection" type="primary" onClick={onSave} shape="round">Create new collection</Button>

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


