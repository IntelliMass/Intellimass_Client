import React, {useEffect, useState} from "react";
import './MetadataList.scss';
import { IMetadata, Metadata} from "../metadata/Metadata";
import {Button, Divider, Select} from "antd";
import Search from "antd/es/input/Search";
const { Option } = Select;

type MetadataListProps = {
    items: any[];
};

export const FUNCTION_TYPE = "REMOVE_SAVED_METADATA" || "SELECT_UNSAVED_METADATA";
export const LIST_TYPE = "SAVED" || "UN_SAVED";


export const MetadataList: React.FC<MetadataListProps> = (props) => {
    const [metadataList, setMetadataList] = useState<Array<IMetadata>>([
        {title: "Networks", rank: 500, isSelected: false, id: "uuid1"},
        {title: "Cyber", rank: 60, isSelected: false, id: "uuid2"},
        {title: "Chips", rank: 100, isSelected: true, id: "uuid3"},
        {title: "Software", rank: 200, isSelected: true, id: "uuid4"},
        {title: "Hardware", rank: 90, isSelected: false, id: "uuid5"},
        {title: "Intel company", rank: 90, isSelected: false, id: "uuid6"},
        {title: "Apple company", rank: 90, isSelected: false, id: "uuid7"},
        {title: "Android cellphones", rank: 90, isSelected: false, id: "uuid8"},
        {title: "Networks", rank: 500, isSelected: false, id: "uuid9"},
        {title: "Cyber", rank: 60, isSelected: false, id: "uuid10"},
        {title: "Chips", rank: 100, isSelected: true, id: "uuid11"},
        {title: "Software", rank: 200, isSelected: true, id: "uuid12"},
        {title: "Hardware", rank: 90, isSelected: false, id: "uuid13"},
        {title: "Intel company", rank: 90, isSelected: false, id: "uuid14"},
        {title: "Apple company", rank: 90, isSelected: false, id: "uuid15"},
        {title: "Android cellphones", rank: 90, isSelected: false, id: "uuid16"},
        {title: "Networks", rank: 500, isSelected: false, id: "uuid17"},
        {title: "Cyber", rank: 60, isSelected: false, id: "uuid18"},
        {title: "Chips", rank: 100, isSelected: true, id: "uuid19"},
        {title: "Software", rank: 200, isSelected: true, id: "uuid20"},
        {title: "Hardware", rank: 90, isSelected: false, id: "uuid21"},
        {title: "Intel company", rank: 90, isSelected: false, id: "uuid22"},
        {title: "Apple company", rank: 90, isSelected: false, id: "uuid23"},
        {title: "Android cellphones", rank: 90, isSelected: false, id: "uuid24"},
    ]);
    const [savedMetadataList, setSavedMetadataList] = useState<Array<IMetadata>>([
        {title: "IOT", rank: 10, isSelected: false, id: "uuid25"},
        {title: "Architecture", rank: 20, isSelected: false, id: "uuid26"},
    ]);
    const [filteredMetadataList, setFilteredMetadataList] = useState<Array<IMetadata>>([...metadataList]);
    const [filteredSavedMetadataList, setFilteredSavedMetadataList] = useState<Array<IMetadata>>([...savedMetadataList]);

    const [filterTypeRank, setFilterTypeRank] = useState<string>("ALL");
    const [filterTitle, setTitle] = useState<string>("");
    const [filterRank, setRank] = useState<string>("0");


    useEffect(() => {
        const items = [...metadataList];
        const newItems = checkFilters(items);
        setFilteredMetadataList([...newItems]);
    },[metadataList])

    useEffect(() => {
        const items = [...savedMetadataList];
        const newItems = checkFilters(items);
        setFilteredSavedMetadataList([...newItems]);
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

    const onFilterByTitle = (value:string) => {
        const items = [...metadataList];
        const savedItems = [...savedMetadataList];
        if(value===""){
            setFilteredMetadataList([...items]);
            setFilteredSavedMetadataList([...savedItems]);
            return;
        }
        // update
        const newFiltered = items.filter(item => item.title.includes(value));
        const newSavedFiltered = savedItems.filter(item => item.title.includes(value));
        newFiltered? setFilteredMetadataList([...newFiltered]) : setFilteredMetadataList([]);
        newSavedFiltered? setFilteredSavedMetadataList([...newSavedFiltered]) : setFilteredSavedMetadataList([]);
        return;
    };

    const onRankSelectChange = (value:any) => {
        setFilterTypeRank(value);
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
        setMetadataList([...newUnsavedMetadataList]);
        setSavedMetadataList([...filteredSavedMetadataList,...newSavedMetadataList]);
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
            <Divider orientation="left">Saved Metadata</Divider>
            <div className="metadata-list">
            {filteredSavedMetadataList.map((metadata, index) => {
                return(
                    <Metadata metadata={metadata} index={index} listName="SAVED" onMetadataChange={onMetadataChange}/>
                )
            })}
        </div>
            <Divider orientation="left">New Metadata</Divider>
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
        </div>
    );
};

MetadataList.defaultProps = {};