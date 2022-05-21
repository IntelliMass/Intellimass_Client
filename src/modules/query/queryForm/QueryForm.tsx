import {Form, Select, Radio, Button, Space, Input, Divider, Spin} from 'antd';
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import { OperatorTag } from "../../../components/tag/OperatorTag"
import {useHistory} from "react-router-dom"
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks'
import { createQuery, KeywordsListObject } from "../../../actions/QueryActions";
import {joinQuery, joinQueryString, QueryState} from "../../../reducers/QueryReducer";
import React, {useEffect, useState} from "react";
import "./QueryForm.scss"

const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

 interface FormType {
     first_word: string,
     second_word: string,
     others: any[]
 }

const fromReducerToQueryForm = (items: string[]): FormType => {
    let responseObject: FormType = {
        first_word: '',
        second_word: '',
        others: []
    }
    if(items.length === 0){
        responseObject = {
            first_word: '',
            second_word: '',
            others: []
        }
    }
    if(items.length === 1){
        responseObject = {
            first_word: items[0],
            second_word: '',
            others: []
        }
    }
    if(items.length === 2){
        responseObject = {
            first_word: items[0],
            second_word: items[1],
            others: []
        }
    }
    else{
        const first = items[0];
        const second = items[1];
        let others : any[] = items.slice(2);

        responseObject = {
            first_word: first,
            second_word: second,
            others: [...others]
        }
    }
    return responseObject;
}

export const DefinitionForm = () => {
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [isSubmitSelected, setIsSubmitSelected] = useState<boolean>(false);
    const [form] = Form.useForm();

    const searching_operator = useAppSelector<string>(state => state.query.searching_operator);
    const searching_words = useAppSelector<string[]>(state => state.query.searching_words);
    const queryId = useAppSelector<string>(state => state.query.queryId);

    const dispatch = useAppDispatch()
    const history = useHistory();

    useEffect(()=>{
        const queryToForm = fromReducerToQueryForm(searching_words);
        if(queryToForm.others.length > 0){
            form.setFieldsValue({
                first_word: queryToForm.first_word,
                second_word: queryToForm.second_word,
                keywords: queryToForm.others,
                operator: searching_operator || 'AND'
            });
        }
        else if(queryToForm.second_word){
            form.setFieldsValue({
                first_word: queryToForm.first_word,
                second_word: queryToForm.second_word,
                keywords: [],
                operator: searching_operator || 'AND'
            });
        }
        else {
            form.setFieldsValue({
                first_word: queryToForm.first_word,
                second_word: '',
                keywords: [],
                operator: searching_operator || 'AND'
            });
        }
    },[]);

    useEffect(()=>{
        setIsLoader(false);
        if (isSubmitSelected){
            setIsSubmitSelected(false);
            history.replace('/articles');
        }
    },[queryId]);


    const makeKeywordsTemplate = (keyeords:Array<{keyword: string, operator:string}>):Array<KeywordsListObject> =>  {
        let newExtraKeywords:Array<KeywordsListObject> = [];
        keyeords.forEach((item) => {
            newExtraKeywords.push({keyword: item.keyword, operator: item.operator})
        })
        return newExtraKeywords;
    }

    const onFinish = (values: any) => {
        setIsLoader(true);
        setIsSubmitSelected(true);

        let responseQueryString: string[] = [];
        if(values){
            if(values.keywords && values.keywords.length > 0){
                responseQueryString.push(values.first_word);
                responseQueryString.push(values.second_word);
                values.keywords.forEach((item: string) => responseQueryString.push(item));
            } else if (values.second_word != ''){
                responseQueryString.push(values.first_word);
                responseQueryString.push(values.second_word);
            } else {
                responseQueryString.push(values.first_word);
            }
        }
        const newQuery: QueryState = {
            searching_words: responseQueryString,
            searching_operator: values.operator,
            queryId: ''
        }
        // @ts-ignore
            dispatch(createQuery(newQuery ));
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            first_word: 'IOT',
            second_word: 'Architecture',
            keywords: ['Academy'],
            operator: 'AND',
        });
    };

    const onCleanFirst = () => {
        form.setFieldsValue({
            first_word: '',
        });
    };

    const onCleanSecond = () => {
        form.setFieldsValue({
            second_word: '',
        });
    };


    return (
        <div className="query-form-container">
            <Form
                form={form}
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                className="query-form"
            >
                <span className="form-title">Searching Query</span>
                <Divider className="divider-title-form"/>
                <div className="select-keyword-container">
                    <div className="select-keyword">
                        <Space key="first_key" align="baseline"  style={{marginRight: 40, width: 550}}>
                            <Form.Item
                                style={{width:350}}
                                name="first_word"
                                label="Keyword (1):"
                                rules={[{ required: true, message: 'Missing keyword' }]}
                            >
                                <Input style={{marginLeft:10}}/>
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => onCleanFirst()} />
                        </Space>
                    </div>
                    <div className="select-keyword">
                        <Space key="first_key" align="baseline"  style={{marginRight: 40, width: 550}}>
                            <Form.Item
                                style={{width:350}}
                                name="second_word"
                                label="Keyword (2):"
                                rules={[{ required: true, message: 'Missing keyword' }]}
                            >
                                <Input style={{marginLeft:10}}/>
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => onCleanSecond()} />
                        </Space>
                    </div>
                <div className="select-keyword">
                    <Form.List name="keywords">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map((field , index)=> (
                                    <Space key={field.key} align="baseline" style={{marginRight: 40, width: 550}}>
                                        <Form.Item
                                            style={{width:350}}
                                            {...field}
                                            label={`Keyword (${index+3}):`}
                                            rules={[{ required: true, message: 'Missing keyword' }]}
                                        >
                                            <Input style={{marginLeft:10}}/>
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                                    </Space>
                                ))}

                                <Form.Item style={{marginLeft:"7px"}}>
                                    <Button style={{width: 140}} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add keyword
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </div>
                    <div className="select-keyword">
                        <Space key="first_key" align="baseline"  style={{marginRight: 40, width: 550}}>
                            <Form.Item label="Operator" name="operator" style={{width:250}}>
                                <Select style={{marginLeft:14, width:100}}>
                                    <Select.Option value="AND"><OperatorTag operator={"AND"}/></Select.Option>
                                    {/*<Select.Option value="NOT"><OperatorTag operator={"NOT"}/></Select.Option>*/}
                                    <Select.Option value="OR"><OperatorTag operator={"OR"}/></Select.Option>
                                </Select>
                            </Form.Item>
                        </Space>
                    </div>
                </div>
                <Divider/>
                <Form.Item className="action-form-buttons" wrapperCol={{ span: 12, offset: 6 }}>
                    <Button className="action-form-button" type="primary" htmlType="submit">
                        Search
                    </Button>
                    <Button className="action-form-button" htmlType="reset"  onClick={onReset}>
                        Clear
                    </Button>
                    <Button className="action-form-button" type="link" htmlType="button" onClick={onFill}>
                        Fill form
                    </Button>
                </Form.Item>
            </Form>
            {isLoader && <div className="loader-container">
                <Spin size="large" />
                <h4 className="loader-details">Building search query to get articles</h4>
                </div>}
        </div>
    );
};

