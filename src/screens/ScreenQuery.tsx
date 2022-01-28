import React from "react";
import { DefinitionForm } from "../modules/query/queryForm/QueryForm"

type QuestionsScreenProps = {};

export const ScreenQuery: React.FC<QuestionsScreenProps> = () => {

    return (
        <>
            <DefinitionForm/>
        </>
    );
};


ScreenQuery.defaultProps = {};
