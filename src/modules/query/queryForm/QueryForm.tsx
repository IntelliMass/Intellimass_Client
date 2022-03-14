import {Form, Select, Radio, Button, Space, Input} from 'antd';
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import { OperatorTag } from "../../../components/tag/OperatorTag"
import {useHistory} from "react-router-dom"
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks'
import { createQuery, KeywordsListObject } from "../../../actions/QueryActions";
import {joinQuery, QueryState} from "../../../reducers/QueryReducer";
import {useEffect} from "react";
import "./QueryForm.scss"

const { Option } = Select;

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

export const DefinitionForm = () => {
    const [form] = Form.useForm();
    const history = useHistory();
    const query = useAppSelector<string>(state => state.query.query)
    const first_keyword = useAppSelector<string>(state => state.query.first_keyword)
    const first_operator = useAppSelector<string>(state => state.query.first_operator)
    const extra_keywords = useAppSelector<Array<KeywordsListObject>>(state => state.query.extra_keywords)
    const source = useAppSelector<string>(state => state.query.connection)
    // const strategy = useAppSelector<string>(state => state.query.strategy)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        form.setFieldsValue({
            query: query,
            first_keyword: first_keyword,
            first_operator: first_operator,
            source: source,
            // strategy: strategy,
        });
    },[])

    const makeKeywordsTemplate = (keyeords:Array<{keyword: string, operator:string}>, source:string):Array<KeywordsListObject> =>  {
        let newExtraKeywords:Array<KeywordsListObject> = [];
        keyeords.forEach((item) => {
            newExtraKeywords.push({keyword: item.keyword, operator: item.operator, source: source})
        })
        return newExtraKeywords;
    }

    const onFinish = (values: any) => {
        console.log('validation + sending ', values);
        const newKeywords = values.keywords || [];
        const newQuery:QueryState = {
            query: joinQuery(values.first_keyword, makeKeywordsTemplate(newKeywords, "user")),
            first_keyword: values.first_keyword,
            first_operator: values.first_operator,
            extra_keywords: makeKeywordsTemplate(newKeywords, "user"),
            connection: values.authors,
            //strategy: values.strategy
        }
        // @ts-ignore
        dispatch(createQuery(newQuery));
        history.replace('/');
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            query: 'IOT',
            first_keyword: 'cyber',
            first_operator: 'AND',
            connection: 'authors',
            //strategy: 'suggestions',
        });
    };

    const onCleanFirst = () => {
        form.setFieldsValue({
            first_keyword: '',
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
                <Form.Item label="Title" style={{color:"gray", fontWeight:"bold"}}>
                    <span className="ant-form-text">Searching Query</span>
                </Form.Item>
                {/*<Form.Item*/}
                {/*    name="query"*/}
                {/*    label="Query"*/}
                {/*    rules={[{ required: true, message: 'Missing search input', type: 'array' }]}*/}
                {/*>*/}
                {/*    <Select mode="multiple" placeholder="Please type subject" >*/}
                {/*        <Option value="IOT">IOT</Option>*/}
                {/*        <Option value="green">Green</Option>*/}
                {/*        <Option value="blue">Blue</Option>*/}
                {/*    </Select>*/}
                {/*</Form.Item>*/}


                {/*<Form.Item*/}
                {/*    name="query"*/}
                {/*    label="Query"*/}
                {/*    rules={[{ required: true, message: 'Missing search input', type: 'string' }]}*/}
                {/*>*/}
                {/*    <Input placeholder="Basic usage" />*/}
                {/*    <Select mode="multiple" placeholder="Please type subject" >*/}
                {/*        <Option value="IOT">IOT</Option>*/}
                {/*        <Option value="green">Green</Option>*/}
                {/*        <Option value="blue">Blue</Option>*/}
                {/*    </Select>*/}
                {/*</Form.Item>*/}
                <div style={{marginLeft: "19.5%"}}>
                    <Space key="first_key" align="baseline"  style={{marginRight: 40, width: 550}}>
                    <Form.Item
                        style={{width:350}}
                        name="first_keyword"
                        label="keyword:"
                        rules={[{ required: true, message: 'Missing keyword' }]}
                    >
                        <Input style={{marginLeft:10}}/>
                    </Form.Item>
                    <Form.Item label="Operator" name="first_operator" style={{width:250}}>
                        <Select style={{marginLeft:14, width:100}}>
                            <Select.Option value="NOT"><OperatorTag operator={"NOT"}/></Select.Option>
                            <Select.Option value="OR"><OperatorTag operator={"OR"}/></Select.Option>
                            <Select.Option value="AND"><OperatorTag operator={"AND"}/></Select.Option>
                        </Select>
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => onCleanFirst()} />
                </Space>
                </div>
                <div style={{marginLeft: "19.5%"}}>
                    <Form.List name="keywords">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(field => (
                                    <Space key={field.key} align="baseline" style={{marginRight: 40, width: 700}}>
                                        <Form.Item
                                            style={{width:350}}
                                            {...field}
                                            label="keyword"
                                            name={[field.name, 'keyword']}
                                            rules={[{ required: true, message: 'Missing keyword' }]}
                                        >
                                            <Input style={{marginLeft:10}}/>
                                        </Form.Item>
                                        <Form.Item label="Operator" name={[field.name, 'operator']}
                                                   style={{width:250}}>
                                            <Select style={{marginLeft:14, width:100}}>
                                                <Select.Option value="NOT"><OperatorTag operator={"NOT"}/></Select.Option>
                                                <Select.Option value="OR"><OperatorTag operator={"OR"}/></Select.Option>
                                                <Select.Option value="AND"><OperatorTag operator={"AND"}/></Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                                    </Space>
                                ))}

                                <Form.Item style={{marginLeft:"7%"}}>
                                    <Button style={{width: 140}} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add keywords
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </div>
                <Form.Item
                    name="connection"
                    label="Connection Type"
                    hasFeedback
                    rules={[{ required: true, message: 'Missing connection type input' }]}
                >
                    <Select placeholder="Please select a connection">
                        <Option value="authors">Authors - Who referenced who</Option>
                    </Select>
                </Form.Item>

                {/*<Form.Item*/}
                {/*    name="strategy"*/}
                {/*    label="Strategy"*/}
                {/*    rules={[{ required: true, message: 'Missing strategy input' }]}*/}
                {/*>*/}
                {/*    <Radio.Group>*/}
                {/*        <Radio.Button value="suggestions">Suggestion</Radio.Button>*/}
                {/*        <Radio.Button value="search">Search AI</Radio.Button>*/}
                {/*        <Radio.Button value="user">User AI</Radio.Button>*/}
                {/*    </Radio.Group>*/}
                {/*</Form.Item>*/}

                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                    <Button htmlType="reset" style={{marginLeft:10}} onClick={onReset}>
                        Clear
                    </Button>
                    <Button type="link" htmlType="button" onClick={onFill}>
                        Fill form
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

