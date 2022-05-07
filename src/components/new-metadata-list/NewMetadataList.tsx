import React, {useEffect, useState} from "react";
import './NewMetadataList.scss';
import { Metadata} from "../metadata/Metadata";
import {Button, Collapse, Divider, Select, Spin} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getMetadata, patchMetadata} from "../../actions/MeatadataAction";
import { getFilteredArticles} from "../../actions/ArticleActions";
import {getNetwork} from "../../actions/NetworkAction";
import {IMetadata, NewMetadata} from "../../reducers/MetadataReducer";

const { Option } = Select;
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

export const getTitlesFromMetadata = (metadataList:Array<IMetadata>) => {
    let titles: Array<string> = [];
    metadataList.forEach(metadata => {
        titles.push(metadata.title.toString());
    })
    return titles;
}

export const fromCatalogToArray = (metadata: NewMetadata) => {
    const newSavedMetadata: Array<IMetadataWithCategory> = [];
    metadata.metadata.authors.forEach(item => {if (item.isSelected === true) newSavedMetadata.push({metadata : item, category : "AUTHORS"})});
    metadata.metadata.common_words.forEach(item => {if (item.isSelected === true) newSavedMetadata.push({metadata : item, category : "COMMON_WORDS"})})
    metadata.metadata.topics.forEach(item => {if (item.isSelected === true) newSavedMetadata.push({metadata : item, category : "TOPICS"})})
    metadata.metadata.years.forEach(item => {if (item.isSelected === true) newSavedMetadata.push({metadata : item, category : "YEARS"})})
    metadata.metadata.fields_of_study.forEach(item => {if (item.isSelected === true) newSavedMetadata.push({metadata : item, category : "FIELDS_OF_STUDY"})})
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
};

// unSelect one

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
    const state_savedMetadataList = useAppSelector<NewMetadata>(state => state.metadata.savedMetadataList);
    const queryId = useAppSelector<string>(state => state.query.queryId);

    // SHOW ALL IN CATEGORIES
    // SAVED - SAME + ADD TYPE CATEGORY
    // NO FILTERS
    // SELECT
    // UNSAVE - ADD BY CATEGORY

    //const [metadataList, setMetadataList] = useState<Array<IMetadata>>([...state_metadataList]);
    const [localMetadata, setLocalMetadata] = useState<NewMetadata>({...state_metadataList});
    const [savedMetadataList, setSavedMetadataList] = useState<Array<IMetadataWithCategory>>(fromCatalogToArray(state_savedMetadataList));

    // TYPE OF TOGGLE
    const [metadataType, setMetadataType] = useState<string>("NONE");
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [isSubmitSelected, setIsSubmitSelected] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    /*
     * ON LOAD
    */
    useEffect(()=>{
        setIsLoader(true);
        getMetadata(queryId)
        // @ts-ignore
        dispatch( getMetadata(queryId));
    },[])

    /*
    * LISTENER TO SERVER METADATA
    */
    useEffect(() => {


        setIsLoader(false);
    },[state_metadataList]);

    /*
    * LISTENER TO SELECTION
    */
    useEffect(() => {

        setIsLoader(false);
    },[localMetadata])


    const onClear = () => {
        setIsLoader(true);
        setLocalMetadata({...unSelectAll(localMetadata)});
    }

    const onSave = () => {
        setIsLoader(true);
        setIsSubmitSelected(true);


        // const selectedMetadataList = [...metadataList];
        // const newSavedMetadataList:IMetadata[] = [];
        // const newUnsavedMetadataList:IMetadata[] = [];
        // selectedMetadataList.forEach((metadata)=>{
        //     if(metadata.isSelected){
        //         newSavedMetadataList.push(metadata);
        //         metadata.isSelected = false;
        //     }
        //     else
        //         newUnsavedMetadataList.push(metadata);
        // });
        // // setMetadataList([...newUnsavedMetadataList]);
        // // setSavedMetadataList([...filteredSavedMetadataList,...newSavedMetadataList]);
        // // FILTER
        //
        // // @ts-ignore
        // dispatch(patchMetadata(metadataList, savedMetadataList));
    }

    const onMetadataChange = (listName: string, changeType: string, id:string ) => {
        // become reducer later
        // SELECTED
        // const newMeta = [...metadataList];
        //
        // if(changeType === "SELECT_UNSAVED_METADATA"){
        //     if(listName === "UN_SAVED"){
        //         const newMeta2 = newMeta.map(item => (
        //             item.id===id? {...item, isSelected: !item.isSelected } : item
        //         ));
        //         setMetadataList([...newMeta2]);
        //         return;
        //     }
        //     return;
        // }
        //
        // // REMOVED
        // const items = [...savedMetadataList];
        // if(changeType === "REMOVE_SAVED_METADATA"){
        //     if(listName === "SAVED"){
        //         const item:IMetadata | undefined = items.find(item => item.id === id);
        //         const newList = items.filter((item) => item.id !== id);
        //         setSavedMetadataList([...newList]);
        //         item? setMetadataList([...newMeta, item]): console.log("");
        //     }
        //     return;
        // }
    };

    function callback(key:any) {
        console.log(key);
    }

    return (
        <div className="metadata-list-container">
            {isLoader ? <div className="loader-container">
                    <Spin size="large" />
                    <h4 className="loader-details">Upload update metadata list</h4>
                </div> :
                localMetadata.metadata &&
                        <>
                            <Divider orientation="left">Saved Metadata ( {savedMetadataList.length} )</Divider>
                            <div className="saved-metadata-list">
                                {savedMetadataList.map((metadata, index) => {
                                    return(
                                        <Metadata metadata={metadata.metadata} index={index} listName="SAVED" onMetadataChange={onMetadataChange}/>
                                    )
                                })}
                            </div>
                            <Divider orientation="left">New Metadata ( {count(localMetadata)} )</Divider>

                            <Collapse accordion onChange={callback}>
                                <Panel header="Common words" key="1">
                                    <div className="metadata-list">
                                        {localMetadata.metadata.common_words.map((metadata, index) => {
                                            return(
                                                <Metadata metadata={metadata} index={index} listName="UN_SAVED" onMetadataChange={onMetadataChange}/>
                                            )
                                        })}
                                    </div>
                                </Panel>
                                <Panel header="Topics" key="2">
                                    <div className="metadata-list">
                                        {localMetadata.metadata.topics.map((metadata, index) => {
                                            return(
                                                <Metadata metadata={metadata} index={index} listName="UN_SAVED" onMetadataChange={onMetadataChange}/>
                                            )
                                        })}
                                    </div>
                                </Panel>
                                <Panel header="Fields of study" key="3">
                                    <div className="metadata-list">
                                        {localMetadata.metadata.fields_of_study.map((metadata, index) => {
                                            return(
                                                <Metadata metadata={metadata} index={index} listName="UN_SAVED" onMetadataChange={onMetadataChange}/>
                                            )
                                        })}
                                    </div>
                                </Panel>
                                <Panel header="Authors" key="4">
                                    <div className="metadata-list">
                                        {localMetadata.metadata.authors.map((metadata, index) => {
                                            return(
                                                <Metadata metadata={metadata} index={index} listName="UN_SAVED" onMetadataChange={onMetadataChange}/>
                                            )
                                        })}
                                    </div>
                                </Panel>
                                <Panel header="Years" key="5">
                                    <div className="metadata-list">
                                        {localMetadata.metadata.years.map((metadata, index) => {
                                            return(
                                                <Metadata metadata={metadata} index={index} listName="UN_SAVED" onMetadataChange={onMetadataChange}/>
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

