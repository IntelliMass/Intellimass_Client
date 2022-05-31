import React, {useEffect, useState} from 'react';
import "./QueryListHeader.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Button, Input, Select} from "antd";
import Swal from "sweetalert2";
import {updateQueryKeywords} from "../../actions/QueryActions";
import {OperatorTag} from "../tag/OperatorTag";

interface QueryListHeaderProps {}

export const fromListToString = (items: string[]) => {
    let responseQueryString = '';
    items.forEach((item: string) => responseQueryString += item + ', ' );
    return responseQueryString.slice(0, -2);
}

export const fromStringToList = (queryWord: string) => {
    let items: string[] = queryWord.split(',');
    let queryItems: string[] = [];
    items.forEach(item => {
        if(item[0] === ' '){
            let newItem = item.substring(1);
            queryItems.push(newItem);
        } else
            queryItems.push(item);
    })
    return queryItems;
}

export const QueryListHeader = (props: QueryListHeaderProps) => {

    const searching_words = useAppSelector<string[]>(state => state.query.searching_words);
    const searching_operator = useAppSelector<string>(state => state.query.searching_operator);

    const [queryString, setQueryString] = useState<string>('');

    const dispatch = useAppDispatch();

    const onSearch = () => {
        Swal.fire({
            title: 'Are you sure you want to update the query?',
            text: `Your data set will be change`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it'
        }).then((result) => {
            if (result.isConfirmed) {
                // @ts-ignore
                const newItems = fromStringToList(queryString);
                dispatch(updateQueryKeywords([...newItems]));
                Swal.fire(
                    'Added as new custom metadata!',
                    'Your metadata list and articles list has been updated.',
                    'success'
                )
            }
        })
    };

    const onChange = (event:any) => {
        setQueryString(event.target.value);
    };

    useEffect(()=>{
        setQueryString(fromListToString(searching_words));
    },[searching_words])

    useEffect(()=>{
        fromStringToList(fromListToString(searching_words));
    },[])
    return (
        <div className="query-list">
            <Select className="select-operator" >
                <Select.Option value="AND"><OperatorTag operator={"AND"}/></Select.Option>
                <Select.Option value="OR"><OperatorTag operator={"OR"}/></Select.Option>
            </Select>
            <Input  size="large" value={queryString} onChange={onChange} className="input-query"/>
            <Button size="large" type="primary" onClick={onSearch} className="button-query">Search</Button>
        </div>
    );
}
