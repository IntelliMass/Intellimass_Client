import React, {useEffect, useState} from "react";
import {Spin, Timeline} from 'antd';
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
    const printListOfClusters = (items: ServerStringMetadata[]) => {
        let responseString = "";
        items.forEach((item) => {
            responseString+=`Title: ${item.type} | Title: ${item.title}\n`;
        })
        return responseString;
    }

    const onClickSingleBreadCrumb = (item: any) => {
        console.log(item);
        // @ts-ignore
        dispatch(uploadBreadcrumbs(item))
    }


    return (
        <div className={"bread-crumb-container"}>
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
                                        <h5 className={"title-time-line"}>({item.index}) {item.time}</h5>
                                        <h5 className={"title-time-line"}>Query: {printListOfStrings(item.queryList)}</h5>
                                        <h5 className={"title-time-line"}>Cluster:  {printListOfStrings(item.clusters)}</h5>
                                        <h5 className={"title-time-line"}>Metadata: {printListOfClusters(item.metadataList)}</h5>
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


