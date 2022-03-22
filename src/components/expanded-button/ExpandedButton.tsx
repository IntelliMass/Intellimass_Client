import React from 'react';
import {UiIcon} from "../ui-icon/UiIcon";
import './ExpandButton.scss' ;

interface IProps {
    active: boolean;
    toggleExpand: () => void
}

export function ExpandButton({active, toggleExpand}: IProps) {
    return (
        <div className={`expand-button-container ${active ? 'active' : ''}`}
             onClick={toggleExpand}
        >
            <UiIcon name="treeOpen"/>
        </div>
    );
}
