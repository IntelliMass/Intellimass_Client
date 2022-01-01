import React, {useCallback, useContext, useEffect, useState} from 'react';
import './NavBar.scss';
import NavigationMenu from '../navigation-menu/NavigationMenu';
import {useHistory, useLocation} from 'react-router-dom';
import {MenuDrawer} from '../drawer/Drawer';
// import {AppStateContext} from '../../contexts/AppStateContext';
import { ImportOutlined, AppstoreOutlined, SettingOutlined, CloseOutlined } from '@ant-design/icons';


interface INavBarProps {
    signOut?: Function,
}

const NavBar = (props: INavBarProps) => {
    const location = useLocation();
    const routeName = location.pathname.replace('/', '');
    const [current, setCurrent] = useState(routeName || 'home');
    const [MenuDrawerVisible, setMenuDrawerVisible] = useState<boolean>(false);
    // const {state, dispatch} = useContext(AppStateContext);
    const history = useHistory();
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


    const onClose = useCallback(() => {
        setMenuDrawerVisible(false);
    }, [])

    function toggleDrawer() {
        setMenuDrawerVisible(prev => !prev);
    }

    return (
        <>
            <div className='navbar'>
                <div className="mast-head">
                    <div className="tenant-button-container">
                        <span className={`tenant-button ${!MenuDrawerVisible ? 'show' : 'hide'}`}
                              onClick={toggleDrawer}><AppstoreOutlined/></span>
                        <span className={`tenant-button closeTenant ${MenuDrawerVisible ? 'show' : 'hide'}`}
                              onClick={toggleDrawer}><CloseOutlined/></span>
                    </div>
                    <img style={{height:60, width:100}} src={"https://i.ibb.co/jvSmCXj/output-onlinepngtools.png"}/>
                    <div className="app-name">IntelliMass</div>

                </div>
                <NavigationMenu handleClick={handleClick} current={current}/>
                <div className="tab-button" onClick={() => {}}>
                    <ImportOutlined/>
                </div>
            </div>
            <MenuDrawer visible={MenuDrawerVisible} onClose={onClose}/>
        </>
    );
};
export default NavBar;
