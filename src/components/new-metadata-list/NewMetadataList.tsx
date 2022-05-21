import React, {useEffect, useState} from "react";
import './NewMetadataList.scss';
import { Metadata} from "../metadata/Metadata";
import {Button, Collapse, Divider, Select, Spin} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getMetadata, patchMetadata, resetMetadata} from "../../actions/MeatadataAction";
import {IMetadata, NewMetadata} from "../../reducers/MetadataReducer";
import Swal from "sweetalert2";
import {INewSingleCatalog} from "../../reducers/CatalogReducer";

const { Panel } = Collapse;


type MetadataListProps = {
    metadataList: any[];
    savedMetadataList: any[];
};

export interface IMetadataWithCategory {
    metadata : IMetadata,
    category: string
}

export const FUNCTION_TYPE = "REMOVE_SAVED_METADATA" || "SELECT_UNSAVED_METADATA";
export const LIST_TYPE = "SAVED" || "UN_SAVED";

export const fromCatalogToArray = (metadata: NewMetadata, savedMetaata: Array<IMetadataWithCategory>) => {
    const newSavedMetadata: Array<IMetadataWithCategory> = [...savedMetaata];
    if(metadata.metadata){
        metadata.metadata.authors.forEach(item => {if (item.isSelected === true) newSavedMetadata.push({metadata : item, category : "AUTHORS"})});
        metadata.metadata.common_words.forEach(item => {if (item.isSelected === true) newSavedMetadata.push({metadata : item, category : "COMMON_WORDS"})})
        metadata.metadata.topics.forEach(item => {if (item.isSelected === true) newSavedMetadata.push({metadata : item, category : "TOPICS"})})
        metadata.metadata.years.forEach(item => {if (item.isSelected === true) newSavedMetadata.push({metadata : item, category : "YEARS"})})
        metadata.metadata.fields_of_study.forEach(item => {if (item.isSelected === true) newSavedMetadata.push({metadata : item, category : "FIELDS_OF_STUDY"})})
    }
    return newSavedMetadata;
}

export const removeSelected = (metadata: NewMetadata) : NewMetadata => {
    let newAuthors: Array<IMetadata> = [];
    let newCommons: Array<IMetadata> = [];
    let newYears: Array<IMetadata> = [];
    let newFields: Array<IMetadata> = [];
    let newTopics : Array<IMetadata> = [];

    metadata.metadata.authors.forEach(item => {if (item.isSelected === false) newAuthors.push(item)});
    metadata.metadata.common_words.forEach(item => {if (item.isSelected === false) newCommons.push(item)});
    metadata.metadata.topics.forEach(item => {if (item.isSelected === false) newTopics.push(item)});
    metadata.metadata.years.forEach(item => {if (item.isSelected === false) newYears.push(item)});
    metadata.metadata.fields_of_study.forEach(item => {if (item.isSelected === false) newFields.push(item)});

    const newMetadata : NewMetadata = {
        metadata: {
            authors: [...newAuthors],
            topics: [...newTopics],
            fields_of_study: [...newFields],
            common_words: [...newCommons],
            years: [...newYears],
        }
    }
    return newMetadata;
}

export const unSelectOne = (metadata: NewMetadata ,categoryType: string, index: number) : NewMetadata => {
    let newMetadata = {...metadata};
    if(categoryType === "AUTHORS") newMetadata.metadata.authors[index].isSelected = !newMetadata.metadata.authors[index].isSelected;
    else if(categoryType === "COMMON_WORDS") newMetadata.metadata.common_words[index].isSelected = !newMetadata.metadata.common_words[index].isSelected;
    else if(categoryType === "TOPICS") newMetadata.metadata.topics[index].isSelected = !newMetadata.metadata.topics[index].isSelected;
    else if(categoryType === "YEARS") newMetadata.metadata.years[index].isSelected = !newMetadata.metadata.years[index].isSelected;
    else newMetadata.metadata.fields_of_study[index].isSelected = !newMetadata.metadata.fields_of_study[index].isSelected;

    return newMetadata;
}

export const unSelectAll = (metadata: NewMetadata) : NewMetadata => {
    let newMetadata = {...metadata};
    newMetadata.metadata.authors.forEach(item => {if (item.isSelected === true) item.isSelected = false});
    newMetadata.metadata.common_words.forEach(item => {if (item.isSelected === true) item.isSelected = false});
    newMetadata.metadata.topics.forEach(item => {if (item.isSelected === true) item.isSelected = false});
    newMetadata.metadata.years.forEach(item => {if (item.isSelected === true) item.isSelected = false});
    newMetadata.metadata.fields_of_study.forEach(item => {if (item.isSelected === true) item.isSelected = false});
    return metadata;
}

export const count = (metadata: NewMetadata) : number => {
    let count: number = 0;
    count +=  metadata.metadata.authors.length;
    count +=  metadata.metadata.common_words.length;
    count +=  metadata.metadata.topics.length;
    count +=  metadata.metadata.years.length;
    count +=  metadata.metadata.fields_of_study.length;
    return count;
}

export const NewMetadataList: React.FC<MetadataListProps> = (props) => {
    // @ts-ignore
    // SERVER
    const state_metadataList = useAppSelector<NewMetadata>(state => state.metadata.metadataList);
    const state_savedMetadataList = useAppSelector<Array<IMetadataWithCategory>>(state => state.metadata.savedMetadataList);
    const queryId = useAppSelector<string>(state => state.query.queryId);


    const categories = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.selectedCategories);
    const numberOfClusters = useAppSelector<Array<INewSingleCatalog>>(state => state.catalog.numOfClusters);

    const [localMetadata, setLocalMetadata] = useState<NewMetadata>({...state_metadataList});
    const [savedMetadataList, setSavedMetadataList] = useState<Array<IMetadataWithCategory>>([...state_savedMetadataList]);

    // TYPE OF TOGGLE
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [isSubmitSelected, setIsSubmitSelected] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    /**
     * ON LOAD
    **/
    useEffect(()=>{
        setIsLoader(true);
        // @ts-ignore
        dispatch(resetMetadata());

        // @ts-ignore
        dispatch( getMetadata(queryId, 100, state_savedMetadataList, categories, numberOfClusters));
    },[queryId])

    /**
    * LISTENER TO SERVER METADATA
    **/
    useEffect(() => {
        setLocalMetadata({...state_metadataList});
        setTimeout(() => {
            setIsLoader(false);
        }, 1500);
        },[  state_metadataList ]);

    useEffect(() => {
        setSavedMetadataList([...state_savedMetadataList]);
    },[ state_savedMetadataList]);

    useEffect(()=>{
    },[savedMetadataList, categories, numberOfClusters ])

    /**
     * TAKE ALL SELECTED FROM LOCAL
     * CHANGE ALL SELECTED TO UNSELECTED
     * */
    const onClear = () => {
        setIsLoader(true);
        setLocalMetadata({...unSelectAll(localMetadata)});
    }


    /**
     * TAKE ALL SELECTED FROM LOCAL
     * MOVE ALL SELECTED TO SAVE
     * REMOVE SELECTED FROM LOCAL
     * */
    const onSave = () => {
        setIsLoader(true);
        setIsSubmitSelected(true);
        const newSavedMetadata = fromCatalogToArray(localMetadata, savedMetadataList);
        const newMetadata = removeSelected(localMetadata);
         // @ts-ignore
        dispatch(patchMetadata({...newMetadata}, [...newSavedMetadata]));
    }


    /**
     * SELECT ONE
     * UNSELECT ONE
     * */
    const onMetadataChange = (listName: string, listType: string, id:string ) => {
        // IF SAVED LIST = REMOVE FROM SAVED TO THE
        if(listName === "SAVED"){
            const foundIndex = savedMetadataList.findIndex(item => item.metadata.id === id);
            let newSavedList = [...savedMetadataList];
            let newMetadata = {...localMetadata};
            if (foundIndex !== -1) {
                Swal.fire({
                    title: 'Are you sure you want to remove this filter?',
                    text: `Your data set will be change`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // @ts-ignore
                        newSavedList[foundIndex].metadata.isSelected = !newSavedList[foundIndex].metadata.isSelected;
                        if (newSavedList[foundIndex].category === "AUTHORS") newMetadata.metadata.authors.push({...newSavedList[foundIndex].metadata});
                        else if (newSavedList[foundIndex].category === "COMMON_WORDS") newMetadata.metadata.common_words.push({...newSavedList[foundIndex].metadata});
                        else if (newSavedList[foundIndex].category === "TOPICS") newMetadata.metadata.topics.push({...newSavedList[foundIndex].metadata});
                        else if (newSavedList[foundIndex].category === "YEARS") newMetadata.metadata.years.push({...newSavedList[foundIndex].metadata});
                        else  newMetadata.metadata.fields_of_study.push({...newSavedList[foundIndex].metadata});
                        const list = [...savedMetadataList.filter(item => item.metadata.id !== id)];
                        // @ts-ignore
                        //dispatch(patchMetadata({...newMetadata}, list));
                        Swal.fire(
                            'Deleted!',
                            'Your collection has been deleted.',
                            'success'
                        )
                    }
                })
            }
        }

        else {
            // IF UN_SAVED LIST
            let newMetadata = {...localMetadata};
            let newList: Array<IMetadata> = []
            if (listType === "AUTHORS") {
                newList = [...localMetadata.metadata.authors];
                const foundIndex = newList.findIndex(item => item.id === id);
                if (foundIndex !== -1) newList[foundIndex].isSelected = !newList[foundIndex].isSelected;
                newMetadata.metadata.authors = newList;
            }
            else if(listType === "COMMON_WORDS"){
                newList = [...localMetadata.metadata.common_words];
                const foundIndex = newList.findIndex(item => item.id === id);
                if (foundIndex !== -1) newList[foundIndex].isSelected = !newList[foundIndex].isSelected;
                newMetadata.metadata.common_words = newList;
            }
            else if(listType === "TOPICS"){
                newList = [...localMetadata.metadata.topics];
                const foundIndex = newList.findIndex(item => item.id === id);
                if (foundIndex !== -1) newList[foundIndex].isSelected = !newList[foundIndex].isSelected;
                newMetadata.metadata.topics = newList;
            }
            else if(listType === "YEARS"){
                newList = [...localMetadata.metadata.years];
                const foundIndex = newList.findIndex(item => item.id === id);
                if (foundIndex !== -1) newList[foundIndex].isSelected = !newList[foundIndex].isSelected;
                newMetadata.metadata.years = newList;
            }
            else {
                newList = [...localMetadata.metadata.fields_of_study];
                const foundIndex = newList.findIndex(item => item.id === id);
                if (foundIndex !== -1) newList[foundIndex].isSelected = !newList[foundIndex].isSelected;
                newMetadata.metadata.fields_of_study = newList;
            }
            // TODO : DISPATCH AND NOT LOCAL
            // @ts-ignore
            dispatch(patchMetadata({...newMetadata}, [...savedMetadataList]))
        }
    };

    function callback(key:any) {
        console.log(key);
    }

    return (
        <div className="metadata-list-container">
            { isLoader ?
                <div className="screen-articles">
                    <div className="loader-container">
                        <Spin size="large" />
                        <h4 style={{marginLeft: -100, color: "black"}} className="loader-articles-details">Uploading updated metadata list</h4>
                    </div>
                </div> :

                localMetadata.metadata &&
                <>
                    <Divider orientation="left">Saved Metadata ( {savedMetadataList.length} )</Divider>
                    <div className="saved-metadata-list">
                        {savedMetadataList.map((metadata, index) => {
                            return(
                                <Metadata metadata={metadata.metadata} index={index} listName="NONE" onMetadataChange={onMetadataChange}/>
                            )
                        })}
                    </div>
                    <Divider orientation="left">New Metadata ( {count(localMetadata)} )</Divider>

                    <Collapse accordion onChange={callback} style={{width: 470}}>
                        <Panel header={`Common words (${localMetadata.metadata.common_words.length})`} key="1">
                            <div className="metadata-list">
                                {localMetadata.metadata.common_words.map((metadata, index) => {
                                    return(
                                        <Metadata metadata={metadata} index={index} listName="COMMON_WORDS" onMetadataChange={onMetadataChange}/>
                                    )
                                })}
                            </div>
                        </Panel>
                        <Panel header={`Topics (${localMetadata.metadata.topics.length})`} key="2">
                            <div className="metadata-list">
                                {localMetadata.metadata.topics.map((metadata, index) => {
                                    return(
                                        <Metadata metadata={metadata} index={index} listName="TOPICS" onMetadataChange={onMetadataChange}/>
                                    )
                                })}
                            </div>
                        </Panel>
                        <Panel header={`Fields of study (${localMetadata.metadata.fields_of_study.length})`} key="3">
                            <div className="metadata-list">
                                {localMetadata.metadata.fields_of_study.map((metadata, index) => {
                                    return(
                                        <Metadata metadata={metadata} index={index} listName="FIELDS_OF_STUDY" onMetadataChange={onMetadataChange}/>
                                    )
                                })}
                            </div>
                        </Panel>
                        <Panel header={`Authors (${localMetadata.metadata.authors.length})`} key="4">
                            <div className="metadata-list">
                                {localMetadata.metadata.authors.map((metadata, index) => {
                                    return(
                                        <Metadata metadata={metadata} index={index} listName="AUTHORS" onMetadataChange={onMetadataChange}/>
                                    )
                                })}
                            </div>
                        </Panel>
                        <Panel header={`Years (${localMetadata.metadata.years.length})`} key="5">
                            <div className="metadata-list">
                                {localMetadata.metadata.years.map((metadata, index) => {
                                    return(
                                        <Metadata metadata={metadata} index={index} listName="YEARS" onMetadataChange={onMetadataChange}/>
                                    )
                                })}
                            </div>
                        </Panel>
                    </Collapse>

                    <div className="metadata-footer">
                        <Button onClick={onSave} type="primary" className="save-saved-metadata" shape="round" block>Save selected</Button>
                        <Button onClick={onClear} shape="round" block >Clear selected</Button>
                    </div>
                </>
            }
        </div>
    );
};

