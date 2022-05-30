import React, {useEffect, useState} from "react";
import "./ExportAction.scss"
import {Button, Divider, Input, List, Tooltip} from "antd";
import {DeleteOutlined, EditOutlined, MoreOutlined} from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"
import {CollectionState, ICollection} from "../../reducers/CollectionResucer";
import Swal from 'sweetalert2'
import {
    changeCollectionName,
    createCollection,
    deleteCollection,
    removeFromCollection
} from "../../actions/CollectionAction";
import {useHistory} from "react-router-dom";
import {updatePaperID} from "../../actions/ArticleActions";


type ExportActionProps = {};

export const ExportAction: React.FC<ExportActionProps> = (props) => {
    const collections = useAppSelector<CollectionState>(state => state.collection.collection);
    const userid = useAppSelector<string>(state => state.user.userId) || 'userId';
    const queryId = useAppSelector<string>(state => state.query.queryId) || 'queryId';

    const dispatch = useAppDispatch();

    const [selectedCollectionName, setSelectedCollectionName] = useState<string>('none');
    const [selectedCollection, setSelectedCollection] = useState<ICollection>();

    const history = useHistory();

    useEffect(()=>{
    },[userid, collections])


    useEffect(()=>{
        const selected = collections.collection.find(found => found.collection_name === selectedCollectionName);
        if (selected)
            setSelectedCollection({...selected});
    },[selectedCollectionName])

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

    const changeCollection = (newName: string) => {
        setSelectedCollectionName(newName);
    }

    const updateCollectionName = (collectionOldName:string) => {
        Swal.fire({
            title: 'Update collection name',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Update',
            showLoaderOnConfirm: true,
            preConfirm: (newCollectionName:string) => {
                // @ts-ignore
                dispatch(changeCollectionName(queryId, userid, collections, collectionOldName, newCollectionName))
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Your collection name is updated',
                    `Updated from ${collectionOldName}`,
                    'success'
                )
            }
        })
    }

    const deleteCollectionHandler = (deletedCollectionName:string) => {
        Swal.fire({
            title: 'Are you sure you want to delete this collection?',
            text: `You won't be able to revert ${deletedCollectionName}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it'
        }).then((result) => {
            if (result.isConfirmed) {
                // @ts-ignore
                dispatch(deleteCollection(queryId, userid, collections, deletedCollectionName))
                Swal.fire(
                    'Deleted!',
                    'Your collection has been deleted.',
                    'success'
                )
            }
        })
    }

    const removeArticle = ( paperID: string) => {
        Swal.fire({
            title: 'Are you sure you want to remove this article?',
            text: `This will remove the article from ${selectedCollectionName} collection`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it'
        }).then((result) => {
            if (result.isConfirmed) {
                // @ts-ignore
                dispatch(removeFromCollection(queryId, userid, collections, selectedCollectionName, paperID))
                Swal.fire(
                    'Removed!',
                    'Your article has been removed.',
                    'success'
                )
                let selectedName = selectedCollectionName;
                setSelectedCollectionName('none');
                setSelectedCollectionName(selectedName);
            }
        })
    }

    function handleMenuClick(e:any) {
        console.log(e.item);

        // @ts-ignore
        dispatch(updatePaperID(e.item.toString()));
        history.replace('/article');
    }

    return (
        <div className={`export-action-container`}>
            <Divider orientation="left">Collections list ({collections.collection.length})</Divider>
            <div>
                <Button onClick={onSave} type="primary" className="save-collection" shape="round" block>Create Collection</Button>
                <List
                    className="collections-list"
                    itemLayout="horizontal"
                    dataSource={collections.collection}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <Tooltip placement="bottom" title={'Rename collection'}>
                                    <EditOutlined className="collection-icon" onClick={()=>updateCollectionName(item.collection_name)}/>
                                </Tooltip>,
                                <Tooltip placement="bottom" title={'Delete collection'}>
                                    <DeleteOutlined className="collection-icon" onClick={()=>deleteCollectionHandler(item.collection_name)} />
                                </Tooltip>]}
                        >
                            <List.Item.Meta
                                title={<span className="collection-title" onClick={()=>changeCollection(item.collection_name)}>{item.collection_name}</span>}
                            />
                        </List.Item>
                    )}
                />
            </div>
            {
                selectedCollectionName !== 'none' &&
                    <>
                        <Divider orientation="left">Collection's articles list</Divider>
                        <div>
                            <List
                                className="collections-list"
                                itemLayout="horizontal"
                                dataSource={selectedCollection?.articles_list}
                                renderItem={item => (
                                    <List.Item
                                        actions={[
                                            <Tooltip placement="bottom" title={'More details'}>
                                                <MoreOutlined className="collection-icon" onClick={handleMenuClick}/>
                                            </Tooltip>,
                                            <Tooltip placement="bottom" title={'Remove article'}>
                                                <DeleteOutlined className="collection-icon" onClick={()=>removeArticle(item.paperId)}/>
                                            </Tooltip>
                                          ]}
                                    >
                                        <List.Item.Meta
                                            title={<span>{item.title}</span>}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                    </>
            }

        </div>
    );
};

