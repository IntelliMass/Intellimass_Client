import React from "react";
import {Dropdown, Menu} from "antd";
import {useHistory} from "react-router-dom";
import {ArticleOfList, getArticleDetail} from "../../actions/ArticleActions";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"
import Swal from 'sweetalert2'
import {ICollection} from "../../reducers/CollectionResucer";
import {insertToCollection} from "../../actions/CollectionAction";

type GetMoreButtonProps = {
    paperId: string;
    article?: ArticleOfList;
};

export const GetMoreButton: React.FC<GetMoreButtonProps> = (props) => {
    const {paperId, article} = props;

    const collections = useAppSelector<Array<ICollection>>(state => state.collection.collections);
    const userid = useAppSelector<string>(state => state.user.userId) || 'userId';
    const queryId = useAppSelector<string>(state => state.query.queryId) || 'queryId';

    const history = useHistory();
    const dispatch = useAppDispatch();

    function handleMenuClick(e:any) {
        console.log(e.item);
        // @ts-ignore
        dispatch(getArticleDetail(paperId));
        // set selected article
        history.replace('/article');
    }

    const getCollectionsNames = (collections: Array<ICollection>): Array<string> => {
        let collectionNames: Array<string> = [];
        collections.forEach(collection => {
            collectionNames.push(collection.collectionName);
        })
        return collectionNames;
    }

    const insertArticleToCollection = ()=>{

        const collectionName: any  =  Swal.fire({
            title: 'Select field validation',
            input: 'select',
            inputOptions: getCollectionsNames(collections),
            inputPlaceholder: 'Select a fruit',
            showCancelButton: true,
        })

        if (collectionName) {
            Swal.fire(`You selected: ${collectionName}`);
            // @ts-ignore
            dispatch(insertToCollection(queryId, userid, collections, "", article));
        }
    }

    const GetMoreMenu = (
        <Menu>
            <Menu.Item onClick={handleMenuClick} key="1">Get detail</Menu.Item>
            <Menu.Item onClick={insertArticleToCollection} key="2">Export</Menu.Item>
        </Menu>
    );
    return (
        <div className="get-more-button" style={{marginLeft: -30, marginBottom:20}}>
            <Dropdown.Button overlay={GetMoreMenu}></Dropdown.Button>
        </div>
    );
};


