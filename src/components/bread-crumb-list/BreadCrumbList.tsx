import React, {useEffect, useState} from "react";
import {Divider, Spin, Timeline} from 'antd';
import "./BreadCrumbList.scss";
import {getBreadcrumb, uploadBreadcrumbs} from "../../actions/BreadCrumbAction";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {IBreadCrumb, ServerStringMetadata} from "../../reducers/BreadcrumbReducer";
import {string} from "prop-types";
import {HomePageHeader} from "../home-page-header/HomePageHeader";
import {CollectionContainer} from "../collection-container/CollectionContainer";

type BreadCrumbListProps = {
};

export const BreadCrumbList: React.FC<BreadCrumbListProps> = (props) => {
    const queryId = useAppSelector<string>(state => state.query.queryId);
    const breadcrumbs = useAppSelector< IBreadCrumb[]>(state => state.breadcrumbs.breadCrumbList);
    const dispatch = useAppDispatch()

    const [isLoader, setIsLoader] = useState<boolean>(false);


    useEffect(()=>{
        setIsLoader(true)
        // @ts-ignore
        dispatch(getBreadcrumb(queryId))
    },[queryId])

    useEffect(()=>{
        console.log(breadcrumbs)
        setTimeout(() => {
            setIsLoader(false);
        }, 1500);
    },[breadcrumbs])

    const printListOfStrings = (items: string[]) => {
        let responseString = "";
        console.log(items)
        items.forEach((item) => {
            responseString+=`${item}, `;
        })
        return responseString.slice(0, -2);
    }

    const printListOfClusters = (items: string[]) => {
        if (items.length == 0)
            return ""
        let responseString = "Clusters: ";
        console.log(items)
        items.forEach((item) => {
            responseString+=`${item}, `;
        })
        return responseString.slice(0, -2);
    }

    const printListOfMetadata = (items: ServerStringMetadata[]) => {
        if (items.length == 0)
            return ""
        return (<div><h5 className={"title-time-line "}>Metadata: </h5>
            {items.map(item =>{
                return <h5 className={"title-time-line title-time-line-margin"}>Type: {item.type} | Title: {item.title}</h5>
            })}
            </div>);
    }

    const onClickSingleBreadCrumb = (item: any) => {
        console.log(item);
        // @ts-ignore
        dispatch(uploadBreadcrumbs(item));
        // WHO LISTEN?
        // 1 - SAVED FILTERS
        // 2 - ARTICLE COUNT
    }


    return (
        <div className={"bread-crumb-container"}>
            <Divider orientation="left">Breadcrumbs list ({breadcrumbs.length})</Divider>
            <Timeline className="time-line-list">
                {
                isLoader ?
                    <div className="screen-articles">
                        <div className="loader-container">
                            <Spin size="large" />
                            <h4 style={{marginLeft: -100}} className="loader-articles-details">Uploading your private collections</h4>
                        </div>
                    </div> :
                    <div style={{marginTop: 20}} className="home-page-container">
                        {breadcrumbs.map(item => {
                            return (
                                <Timeline.Item>
                                    <div className="time-line-item" onClick={()=>{onClickSingleBreadCrumb(item)}}>
                                        <h5 className={"title-time-line"}>({item.index + 1}) {item.time}</h5>
                                        <h5 className={"title-time-line"}>Query: {printListOfStrings(item.queryList)}</h5>
                                        <h5 className={"title-time-line"}>{printListOfClusters(item.clusters)}</h5>
                                        {printListOfMetadata(item.metadataList)}
                                    </div>
                                </Timeline.Item>
                            );
                        })}
                    </div>
                }
            </Timeline>
        </div>
    );
};


