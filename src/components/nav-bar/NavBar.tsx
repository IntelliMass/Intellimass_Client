import React, {useEffect, useState} from 'react';
import './NavBar.scss';
import NavigationMenu from '../navigation-menu/NavigationMenu';
import {useHistory, useLocation} from 'react-router-dom';
import {MenuDrawer} from '../drawer/Drawer';
import { ImportOutlined, AppstoreOutlined, CloseOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import {changeTheme} from "../../actions/SharedAction";
import {login, logout} from "../../actions/UserActions";


interface INavBarProps {}

const NavBar = (props: INavBarProps) => {
    // REDUCER
    const queryId = useAppSelector<string>(state => state.query.queryId);

    const dispatch = useAppDispatch()

    // STATES
    const location = useLocation();
    const history = useHistory();

    const routeName = location.pathname.replace('/', '');
    const [current, setCurrent] = useState(routeName || 'query');
    const [MenuDrawerVisible, setMenuDrawerVisible] = useState<boolean>(false);

    const handleClick = (e: any) => {
        setCurrent(e.key);
        setMenuDrawerVisible(false);
    };

    useEffect(() => {
        const newLocation = location.pathname.replace('/', '');
        if (newLocation !== current) {
            const currentRoute = newLocation.length ? newLocation : 'query';
            setCurrent(currentRoute);
        }
    }, [location, current]);

    useEffect(()=>{

    },[queryId])


    const onClose  = () => {
        setMenuDrawerVisible(false);
    };

    const showDrawer = () => {
        setMenuDrawerVisible(true);
    };

    const onLogout = () => {
        dispatch(logout());
        history.replace('/');
    }


    return (
        <>
            <div className='navbar'>
                <div className="mast-head">
                    <div className="tenant-button-container">
                        {!MenuDrawerVisible? <AppstoreOutlined style={{fontSize:25, color: "cadetblue", cursor:"pointer"}} onClick={showDrawer}/>:
                            <CloseOutlined style={{fontSize:25, color: "cadetblue"}} onClick={onClose}/>}
                    </div>
                    <img style={{height:35, width:110, marginBottom: 15}} src={"https://i.ibb.co/Pj4dtmP/Whats-App-Image-2022-01-13-at-15-33-32.jpg"}/>
                </div>
                <NavigationMenu handleClick={handleClick} current={current}/>
                <div className="tab-button" onClick={() => {}}>
                    <ImportOutlined onClick={onLogout} style={{marginLeft:15, fontSize:25, color: "cadetblue", cursor: "pointer"}}/>
                </div>
            </div>
            <MenuDrawer visible={MenuDrawerVisible} onClose={onClose} />
        </>
    );
};
export default NavBar;
