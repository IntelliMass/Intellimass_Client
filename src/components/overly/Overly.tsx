import React from 'react';
import './Overly.scss'

interface IProps {
    visible : boolean;
    clickCb?: () => void;
}

export function Overlay({clickCb , visible}: IProps) {
    return <div className={`overlay-container ${visible ? 'visible' : ''}`} onClick={clickCb}/>
}
