import React, {CSSProperties} from 'react';
import Icon from '@ant-design/icons';
import {icons} from '../my-icons/MyIcons';

interface IUiIconProps {
    name: string;
    onClick?: any;
    disabled?: boolean
}


export const UiIcon = (props: IUiIconProps) => {
    function getStyle() {
        if (props.disabled) {
            return {color: '#565B75', pointerEvents: 'none'} as CSSProperties;
        } else {
            return {color: '#436ace',}
        }
    }

    const getIcon = () => (

        <Icon component={() => icons[props.name]}
              style={getStyle()}
              onClick={props.onClick}/>
    );

    return (
        <>
            {icons[props.name] ? getIcon() : ''}
        </>
    );
}
