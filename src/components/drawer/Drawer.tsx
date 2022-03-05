import React, { useState} from 'react';
import {Drawer} from 'antd';
import './Drawer.scss'


export const MenuDrawer = (props: { visible: boolean, onClose: (e: any) => void }) => {
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
