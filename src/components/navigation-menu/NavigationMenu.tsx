import React, {useContext, useEffect, useState} from 'react';
import './NavigationMenu.scss';
import {Menu} from 'antd';
import {Link, NavLink} from 'react-router-dom';
// import {AppStateContext, IAppState} from '../../contexts/AppStateContext';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    handleClick: any
    current: string
    activeOrg: string
}


const NavigationMenu: React.FC<any> = (props: IProps) => {
    const {handleClick, current} = props;
    return (
        <div className="navigation-menu">
            <Menu onClick={handleClick}
                  selectedKeys={[current]}
                  mode="horizontal">
                {/*<Menu.Item key="researches">*/}
                {/*    <NavLink to={"/researches"}>My Researches</NavLink>*/}
                {/*</Menu.Item>*/}
                <Menu.Item key="query">
                    <NavLink to={"/"}>Query</NavLink>
                </Menu.Item>
                <Menu.Item key="articles">
                    <NavLink to={"/articles"}>Articles</NavLink>
                </Menu.Item>
                {/*<Menu.Item key="search">*/}
                {/*    <NavLink to={"/search"}>Research</NavLink>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item key="profile">*/}
                {/*    <NavLink to={"/profile"}>Profile</NavLink>*/}
                {/*</Menu.Item>*/}
                <Menu.Item key="article">
                    <NavLink to={"/article"}>Article</NavLink>
                </Menu.Item>
            </Menu>
        </div>
    );
};
export default NavigationMenu;
