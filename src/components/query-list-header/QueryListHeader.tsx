import React, {useEffect, useState} from 'react';
import "./QueryListHeader.scss";
import {useAppSelector} from "../../hooks/hooks";
import {Button, Input} from "antd";
import Swal from "sweetalert2";

interface QueryListHeaderProps {}

export const fromListToString = (items: string[]) => {
    let responseQueryString = '';
    items.forEach((item: string) => responseQueryString += item + ' | ' );
    return responseQueryString.slice(0, -3);
}

export const QueryListHeader = (props: QueryListHeaderProps) => {

    const searching_words = useAppSelector<string[]>(state => state.query.searching_words);
    const [queryString, setQueryString] = useState<string>('');

    const onSearch = () => {
        // custom_search
        Swal.fire({
            title: 'Are you sure you want to add new custom filter?',
            text: `Your data set will be change`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, insert it'
        }).then((result) => {
            if (result.isConfirmed) {
                // @ts-ignore
                // DISPATCH TO METADATA
                //custom_search
                //dispatch(patchMetadata({...newMetadata}, list));
                Swal.fire(
                    'Added as new custom metadata!',
                    'Your metadata list and articles list has been updated.',
                    'success'
                )
            }
        })
        console.log(queryString);
    };

    const onChange = (event:any) => {
        console.log(event.target.value);
        setQueryString(event.target.value);
    };

    useEffect(()=>{
        setQueryString(fromListToString(searching_words));
    },[searching_words])

    return (
        <div className="query-list">
            <Input  size="large" value={queryString} onChange={onChange} className="input-query"/>
            <Button size="large" type="primary" onClick={onSearch} className="button-query">Filter</Button>
        </div>
    );
}
