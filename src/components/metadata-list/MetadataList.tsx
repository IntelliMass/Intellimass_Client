import React, {useEffect, useState} from "react";
import './MetadataList.scss';
import {Button, Divider, Select, Spin} from "antd";
import Search from "antd/es/input/Search";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getMetadata, patchMetadata} from "../../actions/MeatadataAction";
import {SimpleNet} from "../network2/SimpleNet";
import {getArticleDetail, getFilteredArticles} from "../../actions/ArticleActions";
import {getNetwork} from "../../actions/NetworkAction";
import {IMetadata} from "../../reducers/MetadataReducer";
import {Metadata} from "../metadata/Metadata";
const { Option } = Select;

type MetadataListProps = {
    metadataList: any[];
    savedMetadataList: any[];
};

export const FUNCTION_TYPE = "REMOVE_SAVED_METADATA" || "SELECT_UNSAVED_METADATA";
export const LIST_TYPE = "SAVED" || "UN_SAVED";

export const getTitlesFromMetadata = (metadataList:Array<IMetadata>) => {
    let titles: Array<string | number> = [];
    metadataList.forEach(metadata => {
        titles.push(metadata.title);
    })
    return titles;
}

export const MetadataList: React.FC<MetadataListProps> = (props) => {
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


            // @ts-ignore
            dispatch(getNetwork(queryId, "frequentWords",getTitlesFromMetadata(savedMetadataList), 'Authors'));

            // // @ts-ignore
            // dispatch(patchMetadata(filteredSavedMetadataList));
        }
    },[savedMetadataList])

    const checkFilters = (items: IMetadata[]) => {
        // const newItems = [...items];
        // let newFiltered;
        // // ALL SAME
        // if (filterTitle === "" && filterTypeRank === "ALL"){
        //     return items;
        // }
        // // TITLE CHANGE
        // if (filterTitle != ""){
        //     newFiltered = newItems.filter(item => item.title.includes(filterTitle));
        //     return newFiltered? newFiltered : [];
        // }
        // // RANK CHANGE
        // if (filterTypeRank === "MORE"){
        //     newFiltered = items.filter(item => item.rank > parseInt(filterRank));
        //     return newFiltered? newFiltered : [];
        // } else if (filterTypeRank === "LESS"){
        //     newFiltered = items.filter(item => item.rank < parseInt(filterRank));
        //     return newFiltered? newFiltered : [];
        // } else if (filterTypeRank === "EQUAL"){
        //     newFiltered = items.filter(item => item.rank == parseInt(filterRank));
        //     return newFiltered? newFiltered : [];
        // }
        return [...items];
    }

    const onFilterByTitle = (value:string) => {
        // const items = [...metadataList];
        // const savedItems = [...savedMetadataList];
        // if(value===""){
        //     setFilteredMetadataList([...items]);
        //     setFilteredSavedMetadataList([...savedItems]);
        //     return;
        // }
        // // update
        // const newFiltered = items.filter(item => item.title.includes(value));
        // const newSavedFiltered = savedItems.filter(item => item.title.includes(value));
        // newFiltered? setFilteredMetadataList([...newFiltered]) : setFilteredMetadataList([]);
        // newSavedFiltered? setFilteredSavedMetadataList([...newSavedFiltered]) : setFilteredSavedMetadataList([]);
        return;
    };

    const onRankSelectChange = (value:any) => {
        setFilterTypeRank(value);
    }

    const onTypeSelectChange = (value:any) => {
        setMetadataType(value);
    }


    const onFilterByRank = (value:string) => {
        const items = [...metadataList];
        const savedItems = [...savedMetadataList];
        if (filterTypeRank === "ALL"){
            setFilteredMetadataList([...items]);
            setFilteredSavedMetadataList([...savedItems]);
            return;
        }

        let filteredItems:IMetadata[] | undefined;
        let filteredSaveItems:IMetadata[] | undefined;

        if(filterTypeRank === "MORE"){
            filteredItems = items.filter(item => item.rank > parseInt(value));
            filteredSaveItems = savedItems.filter(item => item.rank > parseInt(value));
        }
        else if(filterTypeRank === "LESS"){
            filteredItems = items.filter(item => item.rank < parseInt(value));
            filteredSaveItems = savedItems.filter(item => item.rank < parseInt(value));
        }
        else if(filterTypeRank === "EQUAL"){
            filteredItems = items.filter(item => item.rank == parseInt(value));
            filteredSaveItems = savedItems.filter(item => item.rank == parseInt(value));
        }
        if(filteredItems){
            setFilteredMetadataList([...filteredItems]);
        }
        else {
            setFilteredMetadataList([]);
        }
        if(filteredSaveItems)
            setFilteredSavedMetadataList([...filteredSaveItems]);
        else
            setFilteredSavedMetadataList([]);
        return;
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

    const rankHandler = (e:any) => {
        setRank(e.target.value);
    };

    const titleHandler = (e:any) => {
        setTitle(e.target.value);
    };

    return (
        <div className="metadata-list-container">
            {isLoader ? <div className="loader-container">
                <Spin size="large" />
                <h4 className="loader-details">Creating yours articles network</h4>
            </div> :
                <>
                    <Divider orientation="left">Metadata Type</Divider>
                    <Select defaultValue="FREQUENT_WORDS" className="metadata-select-rank" onChange={onTypeSelectChange}>
                        <Option value="FREQUENT_WORDS">Frequent words</Option>
                        <Option value="TOPICS">Topics</Option>
                    </Select>
                    <Divider orientation="left">Filter Metadata</Divider>
                <div className="metadata-header">
                <span className="metadata-header-label">Topic Filter</span>
                <Search value={filterTitle} onChange={titleHandler} placeholder="Filter articles common topics" onSearch={onFilterByTitle} className="metadata-search" />
                <span className="metadata-header-label">Rank Filter</span>
                <Select defaultValue="ALL" className="metadata-select-rank" onChange={onRankSelectChange}>
                <Option value="ALL">All</Option>
                <Option value="MORE">More</Option>
                <Option value="EQUAL">Equal</Option>
                <Option value="LESS">Less</Option>
                </Select>
                <Search value={filterRank} onChange={rankHandler} placeholder="Filter ranks" onSearch={onFilterByRank} className="metadata-number-rank" />
                </div>
                <Divider orientation="left">Saved Metadata ( {savedMetadataList.length} )</Divider>
                <div className="metadata-list">
            {filteredSavedMetadataList.map((metadata, index) => {
                return(
                <Metadata metadata={metadata} index={index} listName="SAVED" onMetadataChange={onMetadataChange}/>
                )
            })}
                </div>
                <Divider orientation="left">New Metadata ( {metadataList.length} )</Divider>
                <div className="metadata-list">
            {filteredMetadataList.map((metadata, index) => {
                return(
                <Metadata metadata={metadata} index={index} listName="UN_SAVED" onMetadataChange={onMetadataChange}/>
                )
            })}
                </div>
                <Divider orientation="left">Actions</Divider>
                <div className="metadata-footer">
                <Button onClick={onSave} type="primary" className="save-saved-metadata">Save selected</Button>
                <Button onClick={onClear}>Clear selected</Button>
                </div>
                </>
            }

        </div>
    );
};

MetadataList.defaultProps = {};
