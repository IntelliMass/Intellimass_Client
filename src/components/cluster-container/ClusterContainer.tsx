import React from "react";
import "./ClusterContainer.scss";
import {CategoriesList} from "../category-list/CategoryList";

type ClusterContainerProps = {};

export const ClusterContainer: React.FC<ClusterContainerProps> = () => {
    return (
        <>
            <CategoriesList/>
        </>
    );
};


