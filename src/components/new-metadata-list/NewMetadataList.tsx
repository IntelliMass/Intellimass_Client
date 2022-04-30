import React, {useEffect, useState} from "react";
import './NewMetadataList.scss';
import { IMetadata, Metadata} from "../metadata/Metadata";
import {Button, Collapse, Divider, Select, Spin} from "antd";
import Search from "antd/es/input/Search";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getMetadata, patchMetadata} from "../../actions/MeatadataAction";
import {SimpleNet} from "../network2/SimpleNet";
import {getArticleDetail, getFilteredArticles} from "../../actions/ArticleActions";
import {getNetwork} from "../../actions/NetworkAction";
import {CollectionTable} from "../collection-table/CollectionTable";

const { Option } = Select;
const { Panel } = Collapse;


type MetadataListProps = {
    metadataList: any[];
    savedMetadataList: any[];
};

export const FUNCTION_TYPE = "REMOVE_SAVED_METADATA" || "SELECT_UNSAVED_METADATA";
export const LIST_TYPE = "SAVED" || "UN_SAVED";

export const getTitlesFromMetadata = (metadataList:Array<IMetadata>) => {
    let titles: Array<string> = [];
    metadataList.forEach(metadata => {
        titles.push(metadata.title);
    })
    return titles;
}

export const NewMetadataList: React.FC<MetadataListProps> = (props) => {
    // @ts-ignore
    // SERVER
    const state_metadataList = useAppSelector<Array<IMetadata>>(state => state.metadata.metadataList);
    const state_savedMetadataList = useAppSelector<Array<IMetadata>>(state => state.metadata.savedMetadataList);
    const queryId = useAppSelector<string>(state => state.query.queryId);

    // STATE
    const [metadataList, setMetadataList] = useState<Array<IMetadata>>([...state_metadataList]);
    const [savedMetadataList, setSavedMetadataList] = useState<Array<IMetadata>>([...state_savedMetadataList]);

    // FILTERED
    const [filteredMetadataList, setFilteredMetadataList] = useState<Array<IMetadata>>([...metadataList]);
    const [filteredSavedMetadataList, setFilteredSavedMetadataList] = useState<Array<IMetadata>>([...savedMetadataList]);

    const [filterTypeRank, setFilterTypeRank] = useState<string>("ALL");
    const [metadataType, setMetadataType] = useState<string>("FREQUENT_WORDS");
    const [filterTitle, setTitle] = useState<string>("");
    const [filterRank, setRank] = useState<string>("0");

    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [isSubmitSelected, setIsSubmitSelected] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    /*
    * LISTENER TO SERVER METADATA
    */
    useEffect(() => {
        console.log(state_metadataList)
        console.log(state_savedMetadataList)
        setMetadataList([...state_metadataList]);
        setSavedMetadataList([...state_savedMetadataList]);
        setIsLoader(false);
    },[state_metadataList]);

    /*
    * LISTENER TO LOCAL METADATA
    */
    useEffect(() => {
        const items = [...metadataList];
        const newItems = checkFilters(items);
        setFilteredMetadataList([...newItems]);
    },[metadataList])


    useEffect(() => {
        const items = [...savedMetadataList];
        const newItems = checkFilters(items);
        setFilteredSavedMetadataList([...newItems]);
        // PATCH
        if (isSubmitSelected){
            setIsSubmitSelected(false);
            // @ts-ignore
            dispatch(getFilteredArticles(queryId, getTitlesFromMetadata(savedMetadataList), 'frequentWords'));


            // @ts-ignore
            dispatch(getNetwork(queryId, "frequentWords",getTitlesFromMetadata(savedMetadataList), 'Authors'));

            // // @ts-ignore
            // dispatch(patchMetadata(filteredSavedMetadataList));
        }
    },[savedMetadataList])

    const checkFilters = (items: IMetadata[]) => {
        const newItems = [...items];
        let newFiltered;
        // ALL SAME
        if (filterTitle === "" && filterTypeRank === "ALL"){
            return items;
        }
        // TITLE CHANGE
        if (filterTitle != ""){
            newFiltered = newItems.filter(item => item.title.includes(filterTitle));
            return newFiltered? newFiltered : [];
        }
        // RANK CHANGE
        if (filterTypeRank === "MORE"){
            newFiltered = items.filter(item => item.rank > parseInt(filterRank));
            return newFiltered? newFiltered : [];
        } else if (filterTypeRank === "LESS"){
            newFiltered = items.filter(item => item.rank < parseInt(filterRank));
            return newFiltered? newFiltered : [];
        } else if (filterTypeRank === "EQUAL"){
            newFiltered = items.filter(item => item.rank == parseInt(filterRank));
            return newFiltered? newFiltered : [];
        }
        return [...items];
    }

    const onClear = () => {
        const unSelectedMetadataList = [...filteredMetadataList];
        unSelectedMetadataList.forEach((metadata)=>{
            if(metadata.isSelected)
                metadata.isSelected = false;
        });
        setMetadataList([...unSelectedMetadataList]);
    }

    const onSave = () => {
        setIsSubmitSelected(true);
        const selectedMetadataList = [...metadataList];
        const newSavedMetadataList:IMetadata[] = [];
        const newUnsavedMetadataList:IMetadata[] = [];
        selectedMetadataList.forEach((metadata)=>{
            if(metadata.isSelected){
                newSavedMetadataList.push(metadata);
                metadata.isSelected = false;
            }
            else
                newUnsavedMetadataList.push(metadata);
        });
        // setMetadataList([...newUnsavedMetadataList]);
        // setSavedMetadataList([...filteredSavedMetadataList,...newSavedMetadataList]);
        // FILTER

        // @ts-ignore
        dispatch(patchMetadata(metadataList, savedMetadataList));
    }

    const onMetadataChange = (listName: string, changeType: string, id:string ) => {
        // become reducer later
        // SELECTED
        const newMeta = [...metadataList];

        if(changeType === "SELECT_UNSAVED_METADATA"){
            if(listName === "UN_SAVED"){
                const newMeta2 = newMeta.map(item => (
                    item.id===id? {...item, isSelected: !item.isSelected } : item
                ));
                setMetadataList([...newMeta2]);
                return;
            }
            return;
        }

        // REMOVED
        const items = [...savedMetadataList];
        if(changeType === "REMOVE_SAVED_METADATA"){
            if(listName === "SAVED"){
                const item:IMetadata | undefined = items.find(item => item.id === id);
                const newList = items.filter((item) => item.id !== id);
                setSavedMetadataList([...newList]);
                item? setMetadataList([...newMeta, item]): console.log("");
            }
            return;
        }
    };

    function callback(key:any) {
        console.log(key);
    }

    return (
        <div className="metadata-list-container">
            {isLoader ? <div className="loader-container">
                    <Spin size="large" />
                    <h4 className="loader-details">Creating yours articles network</h4>
                </div> :
                <>
                    <Divider orientation="left">Saved Metadata ( {savedMetadataList.length} )</Divider>
                    <div className="saved-metadata-list">
                        {filteredSavedMetadataList.map((metadata, index) => {
                            return(
                                <Metadata metadata={metadata} index={index} listName="SAVED" onMetadataChange={onMetadataChange}/>
                            )
                        })}
                    </div>
                    <Divider orientation="left">New Metadata ( {metadataList.length} )</Divider>

                    <Collapse accordion onChange={callback}>
                        <Panel header="Common words" key="1">
                            <div className="metadata-list">
                                {filteredMetadataList.map((metadata, index) => {
                                    return(
                                        <Metadata metadata={metadata} index={index} listName="UN_SAVED" onMetadataChange={onMetadataChange}/>
                                    )
                                })}
                            </div>
                        </Panel>
                        <Panel header="Topics" key="2">
                            <div className="metadata-list">
                                {filteredMetadataList.map((metadata, index) => {
                                    return(
                                        <Metadata metadata={metadata} index={index} listName="UN_SAVED" onMetadataChange={onMetadataChange}/>
                                    )
                                })}
                            </div>
                        </Panel>
                        <Panel header="Fields of study" key="3">
                            <div className="metadata-list">
                                {filteredMetadataList.map((metadata, index) => {
                                    return(
                                        <Metadata metadata={metadata} index={index} listName="UN_SAVED" onMetadataChange={onMetadataChange}/>
                                    )
                                })}
                            </div>
                        </Panel>
                        <Panel header="Authors" key="4">
                            <div className="metadata-list">
                                {filteredMetadataList.map((metadata, index) => {
                                    return(
                                        <Metadata metadata={metadata} index={index} listName="UN_SAVED" onMetadataChange={onMetadataChange}/>
                                    )
                                })}
                            </div>
                        </Panel>
                        <Panel header="Years" key="5">
                            <div className="metadata-list">
                                {filteredMetadataList.map((metadata, index) => {
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

