import React from "react";
import {Dropdown, Menu} from "antd";
import {useHistory} from "react-router-dom";
import {getArticleDetail} from "../../actions/ArticleActions";
import {useAppDispatch} from "../../hooks/hooks";


type GetMoreButtonProps = {
    paperId: string;
};

export const GetMoreButton: React.FC<GetMoreButtonProps> = (props) => {
    const {paperId} = props;
    const history = useHistory();
    const dispatch = useAppDispatch();

    function handleMenuClick(e:any) {
        console.log(e.item);
        // @ts-ignore
        dispatch(getArticleDetail(paperId));
        // set selected article
        history.replace('/article');
    }

    const GetMoreMenu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">Get detail</Menu.Item>
            <Menu.Item key="2">Save</Menu.Item>
            <Menu.Item key="3">Export</Menu.Item>
        </Menu>
    );
    return (
        <div className="get-more-button" style={{marginLeft: -30, marginBottom:20}}>
            <Dropdown.Button overlay={GetMoreMenu}></Dropdown.Button>
        </div>
    );
};


