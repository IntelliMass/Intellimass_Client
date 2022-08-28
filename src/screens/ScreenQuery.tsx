import React from "react";
import { DefinitionForm } from "../modules/query/queryForm/QueryForm"
import '../index.scss'

type QuestionsScreenProps = {};

export const ScreenQuery: React.FC<QuestionsScreenProps> = () => {
    return (
        <div className={`screen`}>
            <DefinitionForm/>
        </div>
    );
};
