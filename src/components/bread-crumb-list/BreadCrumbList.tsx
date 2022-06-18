import React, {useEffect, useState} from "react";
import {Divider, Spin, Timeline} from 'antd';
import "./BreadCrumbList.scss";
import {getBreadcrumb, uploadBreadcrumbs} from "../../actions/BreadCrumbAction";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {IBreadCrumb, ServerStringMetadata} from "../../reducers/BreadcrumbReducer";
import {string} from "prop-types";
import {HomePageHeader} from "../home-page-header/HomePageHeader";
import {CollectionContainer} from "../collection-container/CollectionContainer";
import Swal from "sweetalert2";
import {patchMetadata} from "../../actions/MeatadataAction";

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
        setTimeout(() => {
            setIsLoader(false);
        }, 1500);
    },[breadcrumbs])

    const printListOfStrings = (items: string[]) => {
        let responseString = "";
        items.forEach((item) => {
            responseString+=`${item}, `;
        })
        return responseString.slice(0, -2);
    }

    const printListOfClusters = (items: string[]) => {
        if (items.length == 0)
            return ""
        let responseString = "Clusters: ";
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
        Swal.fire({
            title: 'Are you sure you want to upload this activity?',
            text: `Your data set will be change`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, upload it'
        }).then((result) => {
            if (result.isConfirmed) {
                // @ts-ignore

                // @ts-ignore
                dispatch(uploadBreadcrumbs(item, queryId));
                Swal.fire(
                    'Uploaded!',
                    'Your states has been updated.',
                    'success'
                )
            }
        })
    }


    return (
        <div className={"bread-crumb-container"}>
            <Divider orientation="left">Activity history ({breadcrumbs.length})</Divider>
            <Timeline className="time-line-list">
                {
                isLoader ?
                    <div className="screen-articles">
                        <div className="loader-container">
                            <Spin size="large" />
                            <h4 style={{marginLeft: -100}} className="loader-articles-details">Uploading your private activity history</h4>
                        </div>
                    </div> :
                    <div style={{marginTop: 20}} className="home-page-container">
                        {breadcrumbs.map(item => {
                            return (
                                <Timeline.Item>
                                    <div className="time-line-item" onClick={()=>{onClickSingleBreadCrumb(item)}}>
                                        <h5 className={"title-time-line"}>({item.index + 1}) {item.time}</h5>
                                        <h5 className={"title-time-line"}>Query: {printListOfStrings(item.queryList)}</h5>
                                        <h5 className={"title-time-line"}>Articles: {item.results}</h5>
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


