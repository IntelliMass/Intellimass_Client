import React from "react";
import './MetadataList.scss';
import {Metadata} from "../metadata/Metadata";

type MetadataListProps = {
    items: any[];
};



export const MetadataList: React.FC<MetadataListProps> = (props) => {


    return (
        <div className="metadata-list-container">
            <Metadata title={"Architecture"} rank={101} isSelected={false} index={1} onClose={()=>{}}/>
            <Metadata title={"Architecture"} rank={101} isSelected={true} index={1} onClose={()=>{}}/>
            <Metadata title={"Architecture"} rank={101} isSelected={false} index={1} onClose={()=>{}}/>
            <Metadata title={"Architecture"} rank={101} isSelected={false} index={1} onClose={()=>{}}/>
            <Metadata title={"Architecture"} rank={101} isSelected={false} index={1} onClose={()=>{}}/>
            <Metadata title={"Architecture"} rank={101} isSelected={false} index={1} onClose={()=>{}}/>
            <Metadata title={"Architecture"} rank={101} isSelected={false} index={1} onClose={()=>{}}/>
        </div>
    );
};

MetadataList.defaultProps = {};