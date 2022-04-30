import React, {useState} from "react";
import "./MenuButton2.scss"
import {
    ArrowLeftOutlined,
    PlusOutlined,
    SplitCellsOutlined,
    ZoomInOutlined
} from "@ant-design/icons";
import { Tooltip } from 'antd';

type MenuButton2Props = {
    actionOption: string,
    setActionOption: Function
};

export const MenuButton2: React.FC<MenuButton2Props> = (props) => {
    const {actionOption, setActionOption} = props;

    return (
        <div className="menu-button-container">
            <nav className="menu">
                <input type="checkbox" className="menu-open" name="menu-open" id="menu-open"/>
                <Tooltip placement="bottom" title={'Actions options'}>
                    <label className="menu-open-button" htmlFor="menu-open" onClick={()=>setActionOption('none')}>
                        <span className="hamburger hamburger-1"></span>
                        <span className="hamburger hamburger-2"></span>
                        <span className="hamburger hamburger-3"></span>
                    </label>
                </Tooltip>
                <Tooltip placement="bottom" title={'Filter'}>
                    <span onClick={()=>setActionOption('Filter')} className="menu-item"> <ZoomInOutlined/></span>
                </Tooltip>
                <Tooltip placement="bottom" title={'Cluster'}>
                    <span onClick={()=>setActionOption('Cluster')} className="menu-item"> <SplitCellsOutlined/> </span>
                </Tooltip>
                <Tooltip placement="bottom" title={'Export'}>
                    <span onClick={()=>setActionOption('Export')} className="menu-item"> <PlusOutlined /> </span>
                </Tooltip>
                <Tooltip placement="bottom" title={'Breadcrumb'}>
                    <span onClick={()=>setActionOption('Breadcrumb')} className="menu-item"> <ArrowLeftOutlined /> </span>
                </Tooltip>
            </nav>


            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="shadowed-goo">

                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"/>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                       result="goo"/>
                        <feGaussianBlur in="goo" stdDeviation="3" result="shadow"/>
                        <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
                                       result="shadow"/>
                        <feOffset in="shadow" dx="1" dy="1" result="shadow"/>
                        <feComposite in2="shadow" in="goo" result="goo"/>
                        <feComposite in2="goo" in="SourceGraphic" result="mix"/>
                    </filter>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"/>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                       result="goo"/>
                        <feComposite in2="goo" in="SourceGraphic" result="mix"/>
                    </filter>
                </defs>
            </svg>
        </div>
    );
};


