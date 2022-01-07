import React, { useState} from 'react';
import {Drawer} from 'antd';
import './Drawer.scss'
import {useHistory} from "react-router-dom"


export const MenuDrawer = (props: { visible: boolean, onClose: (e: any) => void }) => {
    console.log(props.visible)
    const history = useHistory();
    return (
        <Drawer
            placement="left"
            width={300}
            closable={false}
            mask={true}
            onClose={props.onClose}
            className={'tenant-drawer'}
            visible={props.visible}
            keyboard
            zIndex={1000}
            title={"Collection list"}
        >
            <p>Drawer</p>


        </Drawer>)
}
