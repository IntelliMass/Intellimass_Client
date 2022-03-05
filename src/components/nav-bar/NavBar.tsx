import React, {useEffect, useState} from 'react';
import './NavBar.scss';
import NavigationMenu from '../navigation-menu/NavigationMenu';
import {useLocation} from 'react-router-dom';
import {MenuDrawer} from '../drawer/Drawer';
import { ImportOutlined, AppstoreOutlined, CloseOutlined } from '@ant-design/icons';
import {Switch} from "antd";
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import {changeTheme} from "../../actions/SharedAction";


interface INavBarProps {
    signOut?: Function,
}

const NavBar = (props: INavBarProps) => {
    // REDUCER
    const theme = useAppSelector<string>(state => state.shared.theme)
    const dispatch = useAppDispatch()

    const onChangingTheme = (currentTheme:string) => {
        dispatch(changeTheme(currentTheme))
    }

    // STATES
    const location = useLocation();
    const routeName = location.pathname.replace('/', '');
    const [current, setCurrent] = useState(routeName || 'home');
    const [MenuDrawerVisible, setMenuDrawerVisible] = useState<boolean>(false);
    const handleClick = (e: any) => {
        setCurrent(e.key);
        setMenuDrawerVisible(false);
    };

    useEffect(() => {
        const newLocation = location.pathname.replace('/', '');
        if (newLocation !== current) {
            const currentRoute = newLocation.length ? newLocation : 'home';
            setCurrent(currentRoute);
        }
    }, [location, current]);


    const onClose  = () => {
        setMenuDrawerVisible(false);
    };

    const showDrawer = () => {
        setMenuDrawerVisible(true);
    };


    return (
        <>
            <div className='navbar'>
                <div className="mast-head">
                    <div className="tenant-button-container">
                        {!MenuDrawerVisible? <AppstoreOutlined style={{fontSize:25, color: "cadetblue"}} onClick={showDrawer}/>:
                            <CloseOutlined style={{fontSize:25, color: "cadetblue"}} onClick={onClose}/>}
                    </div>
                    <img style={{height:35, width:110, marginBottom: 15}} src={"https://i.ibb.co/Pj4dtmP/Whats-App-Image-2022-01-13-at-15-33-32.jpg"}/>

                </div>
                <NavigationMenu handleClick={handleClick} current={current}/>
                <div className="tab-button" onClick={() => {}}>
                    <Switch checked={theme === "dark"} onChange={()=>onChangingTheme(theme)} checkedChildren="Dark" unCheckedChildren="Light" />
                    <span style={{fontWeight:"bold", marginLeft:10}}>Mode</span>
                    <ImportOutlined style={{marginLeft:15, fontSize:25, color: "cadetblue"}}/>
                </div>
            </div>
            <MenuDrawer visible={MenuDrawerVisible} onClose={onClose} />
        </>
    );
};
export default NavBar;
