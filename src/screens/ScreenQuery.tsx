import React from "react";
import { DefinitionForm } from "../modules/query/queryForm/QueryForm"
import { useAppSelector, useAppDispatch } from "../hooks/hooks"
import '../index.scss'

type QuestionsScreenProps = {};

export const ScreenQuery: React.FC<QuestionsScreenProps> = () => {
    const theme = useAppSelector<string>(state => state.shared.theme);

    return (
        <div className={`screen`}>
            <DefinitionForm/>
        </div>
    );
};
