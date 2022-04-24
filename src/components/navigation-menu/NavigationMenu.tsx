import React from 'react';
import './NavigationMenu.scss';
import {Menu} from 'antd';
import { NavLink} from 'react-router-dom';
import {
    FileSearchOutlined,
    HomeOutlined,
    NodeIndexOutlined,
    SearchOutlined,
    UnorderedListOutlined
} from "@ant-design/icons";
import { useAppSelector } from '../../hooks/hooks';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    handleClick: any
    current: string
}


const NavigationMenu: React.FC<any> = (props: IProps) => {
    const {handleClick, current} = props;
    const userId = useAppSelector<string>(state => state.user.userId);
    const queryId = useAppSelector<string>(state => state.query.queryId);

    return (
        <div className="navigation-menu">
            <Menu onClick={handleClick}
                  selectedKeys={[current]}
                  mode="horizontal">
                {userId === '' ? <
                    span className={userId === '' ? `disabled-menu-item`: ''}><HomeOutlined className={"navigation-icon"}/> Home</span> :  <
                    Menu.Item key="home">
                    <NavLink to={"/home"}><HomeOutlined className={"navigation-icon"}/> Home</NavLink>
                </Menu.Item>
                }
                {userId === '' ? <
                    span className={userId === '' ? `disabled-menu-item`: ''}><SearchOutlined className={"navigation-icon"}/> Query</span> :   <Menu.Item key="query">
                    <NavLink to={"/query"}><SearchOutlined className={"navigation-icon"}/> Query</NavLink>
                </Menu.Item>
                }

                {queryId === '' ? <
                    span className={queryId === ''  ? `disabled-menu-item`: ''}><UnorderedListOutlined className={"navigation-icon"}/> Articles</span> :  <
                        Menu.Item key="articles">
                            <NavLink to={"/articles"}><UnorderedListOutlined className={"navigation-icon"}/> Articles</NavLink>
                        </Menu.Item>
                }
                {queryId === '' ? <
                    span className={queryId === ''  ? `disabled-menu-item`: ''}><NodeIndexOutlined className={"navigation-icon"}/> Network</span> :  <
                    Menu.Item key="network">
                    <NavLink to={"/network"}><NodeIndexOutlined className={"navigation-icon"}/> Network</NavLink>
                </Menu.Item>
                }
                {queryId === '' ? <
                    span className={queryId === ''  ? `disabled-menu-item`: ''}> <FileSearchOutlined className={"navigation-icon"}/> Article</span> :  <
                    Menu.Item key="article">
                    <NavLink to={"/article"}> <FileSearchOutlined className={"navigation-icon"}/> Article</NavLink>
                </Menu.Item>
                }
            </Menu>
        </div>
    );
};
export default NavigationMenu;
