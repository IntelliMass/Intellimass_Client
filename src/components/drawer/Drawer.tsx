import React, {useContext, useEffect, useState} from 'react';
import {Drawer} from 'antd';
import './Drawer.scss'
// import {actions, AppStateContext} from '../../contexts/AppStateContext';
import {useHistory} from "react-router-dom"


export const MenuDrawer = (props: { visible: boolean, onClose: (e: any) => void }) => {
    const history = useHistory();
    // const {state, dispatch} = useContext(AppStateContext);
    const [articles , setArticles] = useState<Array<object>>([{id:1}, {id:2}, {id:3}, {id:4} ]);

    // function navigationClicked(tenant: IOrgItem) {
    //
    //     return function (p1: React.MouseEvent<HTMLDivElement>) {
    //         props.onClose(null);
    //         if (tenant.key === props.currOrg?.key) {
    //         } else {
    //             dispatch({type: actions.SET_ACTIVE_ORG, payload: tenant});
    //             history.push(`/${tenant.key}/home`)
    //         }
    //     };
    // }


    return (
        <Drawer
            placement="left"
            width={300}
            closable={false}
            mask={true}
            onClose={props.onClose}
            className={'tenant-drawer'}
            getContainer={'.app-container'}
            visible={props.visible}
            keyboard
            zIndex={1000}
            title={"Switch to"}
        >
            <div className="list">{articles}</div>


        </Drawer>)
}
