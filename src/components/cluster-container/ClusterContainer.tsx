import React, {useEffect, useState} from "react";
import "./ClusterContainer.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"
import Swal from 'sweetalert2'
import {ICollection} from "../../reducers/CollectionResucer";
import {CategoriesList} from "../category-list/CategoryList";
import {Alert, Col, Divider, Row} from "antd";
import {typeGeneretor} from "../category-tags/CategoryTag";

type ClusterContainerProps = {};

export const ClusterContainer: React.FC<ClusterContainerProps> = () => {
    const catalog = useAppSelector<Array<string>>(state => state.catalog.catalogs);
    const userid = useAppSelector<string>(state => state.user.userId) || 'userId';
    const queryId = useAppSelector<string>(state => state.query.queryId) || 'queryId';

    const dispatch = useAppDispatch();

    return (
        <>
            <CategoriesList/>
        </>
    );
};


