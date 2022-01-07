import React, { useState } from "react";
import {Menu} from "antd";
import { useAppSelector } from '../hooks/hooks'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";


const { SubMenu } = Menu;

type MenuProps = {};
type MenuTab = {
    current: string
};

const MenuComponent: React.FC<MenuProps> = (props) => {
  // REDUCER
  const theme = useAppSelector<string>(state => state.shared.theme)

  // STATES
  const [currentTab, setCurrentTab] = useState<MenuTab>({ current: "mail" });


  const handleClick = (e: any) => {
    setCurrentTab({ current: e.key });
  };

  return (
      <>
        <Menu theme={theme==='light'? 'light' : 'dark'} onClick={(e) => { handleClick(e); }} selectedKeys={[currentTab.current]} mode="horizontal">
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
            Navigation Two
          </Menu.Item>
          <SubMenu
            key="SubMenu"
            icon={<SettingOutlined />}
            title="Navigation Three - Submenu"
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
      </>
);
};

export default MenuComponent;

MenuComponent.defaultProps = {};
