import React, {useContext, useEffect, useState} from 'react';
import './NavigationMenu.scss';
import {Menu} from 'antd';
import {Link, NavLink} from 'react-router-dom';
import {
    FileSearchOutlined,
    HomeOutlined,
    NodeIndexOutlined,
    SearchOutlined,
    UnorderedListOutlined
} from "@ant-design/icons";
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
                {isDisabled ? <
                    span className={isDisabled ? `disabled-menu-item`: ''}><HomeOutlined className={"navigation-icon"}/> Home</span> :  <
                    Menu.Item key="home">
                    <NavLink to={"/home"}><HomeOutlined className={"navigation-icon"}/> Home</NavLink>
                </Menu.Item>
                }
                {isDisabled ? <
                    span className={isDisabled ? `disabled-menu-item`: ''}><SearchOutlined className={"navigation-icon"}/>Query</span> :   <Menu.Item key="query">
                    <NavLink to={"/query"}><SearchOutlined className={"navigation-icon"}/> Query</NavLink>
                </Menu.Item>
                }

                {isDisabled ? <
                    span className={isDisabled ? `disabled-menu-item`: ''}><UnorderedListOutlined className={"navigation-icon"}/> Articles</span> :  <
                        Menu.Item key="articles">
                            <NavLink to={"/articles"}><UnorderedListOutlined className={"navigation-icon"}/> Articles</NavLink>
                        </Menu.Item>
                }
                {isDisabled ? <
                    span className={isDisabled ? `disabled-menu-item`: ''}><NodeIndexOutlined className={"navigation-icon"}/> Network</span> :  <
                    Menu.Item key="network">
                    <NavLink to={"/network"}><NodeIndexOutlined className={"navigation-icon"}/> Network</NavLink>
                </Menu.Item>
                }
                {isDisabled ? <
                    span className={isDisabled ? `disabled-menu-item`: ''}> <FileSearchOutlined className={"navigation-icon"}/>Article</span> :  <
                    Menu.Item key="article">
                    <NavLink to={"/article"}> <FileSearchOutlined className={"navigation-icon"}/>Article</NavLink>
                </Menu.Item>
                }
            </Menu>
        </div>
    );
};
export default NavigationMenu;
