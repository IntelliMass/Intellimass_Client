import React from 'react';
import './UiTitle.scss';
import {UiIcon} from "../ui-icon/UiIcon";


interface ITitleProps {
    title: string;
    type: 'x-large' | 'large' | 'medium' | 'small';
    iconName?: string;
}

export const UiTitle = (props: ITitleProps) => {

    return (
        <div className="ui-title">
            <span className={props.type}>{props.title}</span>
            {props.iconName ? <span className="title-icon"><UiIcon name={props.iconName}/></span> : ''}
        </div>
    );
};
