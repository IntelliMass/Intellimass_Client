import React, {useState} from "react";
import './MetadataList.scss';
import {IMetadata, Metadata} from "../metadata/Metadata";

type MetadataListProps = {
    items: any[];
};


export const MetadataList: React.FC<MetadataListProps> = (props) => {
    const [metadataList, setMetadataList] = useState<Array<IMetadata>>([
        {title: "IOT", rank: 10, isSelected: false},
        {title: "Architecture", rank: 20, isSelected: false},
        {title: "Networks", rank: 500, isSelected: false},
        {title: "Cyber", rank: 60, isSelected: false},
        {title: "Chips", rank: 100, isSelected: true},
        {title: "Software", rank: 200, isSelected: true},
        {title: "Hardware", rank: 90, isSelected: false},
        {title: "Intel company", rank: 90, isSelected: false},
        {title: "Apple company", rank: 90, isSelected: false},
        {title: "Android cellphones", rank: 90, isSelected: false},
    ]);


    return (
        <div className="metadata-list-container">
            {metadataList.map((metadata, index) => {
                return(
                    <Metadata metadata={metadata} index={index} onClose={()=>{}}/>
                )
            })}
        </div>
    );
};

MetadataList.defaultProps = {};