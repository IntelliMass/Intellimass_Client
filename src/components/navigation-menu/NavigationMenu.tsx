import React, {useContext, useEffect, useState} from 'react';
import './NavigationMenu.scss';
import {Menu} from 'antd';
import {Link, NavLink} from 'react-router-dom';
// import {AppStateContext, IAppState} from '../../contexts/AppStateContext';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    handleClick: any
    current: string
    isDisabled: boolean
}


const NavigationMenu: React.FC<any> = (props: IProps) => {
    const {handleClick, current, isDisabled} = props;
    return (
        <div className="navigation-menu">
            <Menu onClick={handleClick}
                  selectedKeys={[current]}
                  mode="horizontal">
                <Menu.Item key="query">
                    <NavLink to={"/"}>Query</NavLink>
                </Menu.Item>
                {isDisabled ? <
                    span className={isDisabled ? `disabled-menu-item`: ''}>Articles</span> :  <
                        Menu.Item key="articles">
                            <NavLink to={"/articles"}>Articles</NavLink>
                        </Menu.Item>
                }
                {isDisabled ? <
                    span className={isDisabled ? `disabled-menu-item`: ''}>Article</span> :  <
                    Menu.Item key="article">
                    <NavLink to={"/article"}>Article</NavLink>
                </Menu.Item>
                }
                {/*<Menu.Item key="search">*/}
                {/*    <NavLink to={"/search"}>Research</NavLink>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item key="profile">*/}
                {/*    <NavLink to={"/profile"}>Profile</NavLink>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item key="researches">*/}
                {/*    <NavLink to={"/researches"}>My Researches</NavLink>*/}
                {/*</Menu.Item>*/}
            </Menu>
        </div>
    );
};
export default NavigationMenu;
