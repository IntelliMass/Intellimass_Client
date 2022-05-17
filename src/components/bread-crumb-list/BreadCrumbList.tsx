import React, {useEffect} from "react";
import { Timeline } from 'antd';
import "./BreadCrumbList.scss";
import {getBreadcrumb, uploadBreadcrumbs} from "../../actions/BreadCrumbAction";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {IBreadCrumb, ServerStringMetadata} from "../../reducers/BreadcrumbReducer";
import {string} from "prop-types";

type BreadCrumbListProps = {
};

export const BreadCrumbList: React.FC<BreadCrumbListProps> = (props) => {
    const queryId = useAppSelector<string>(state => state.query.queryId);
    const breadcrumbs = useAppSelector< IBreadCrumb[]>(state => state.breadcrumbs.breadCrumbList);
    const dispatch = useAppDispatch()

    useEffect(()=>{
        // @ts-ignore
        dispatch(getBreadcrumb(queryId))
    },[queryId])

    useEffect(()=>{
        console.log(breadcrumbs)
    },[breadcrumbs])

    const printListOfStrings = (items: string[]) => {
        let responseString = "";
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
                {breadcrumbs.map(item => {
                    return (
                        <Timeline.Item>
                            <div  className="time-line-item">
                                <h5 className={"title-time-line"}>({item.index}) {item.time}</h5>
                                <h5 className={"title-time-line"}>Query: {printListOfStrings(item.queryList)}</h5>
                                <h5 className={"title-time-line"}>Cluster:  {printListOfStrings(item.clusters)}</h5>
                                <h5 className={"title-time-line"}>Metadata: {printListOfClusters(item.metadataList)}</h5>
                            </div>
                        </Timeline.Item>
                    );
                })}
            </Timeline>
        </div>
    );
};


