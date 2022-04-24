import {Form, Button, Input, Divider, Spin, Radio} from 'antd';
import {useHistory} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import React, {useEffect, useState} from "react";
import {UserState} from "../../reducers/UserReducer";
import "./AuthenticationForm.scss";
import {login, signup} from "../../actions/UserActions";

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

export const AuthenticationForm = () => {
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [isSubmitSelected, setIsSubmitSelected] = useState<boolean>(false);

    const [formLayout, setFormLayout] = useState<string>('Login');

    const [form] = Form.useForm();
    const history = useHistory();

    const userName = useAppSelector<string>(state => state.user.userName);
    const password = useAppSelector<string>(state => state.user.userPassword);
    const userId = useAppSelector<string>(state => state.user.userId);

    const dispatch = useAppDispatch()

    useEffect(()=>{
        form.setFieldsValue({
            userName: userName,
            password: password,
            userId: userId,
        });
    },[]);

    useEffect(()=>{
        setIsLoader(false);
        if (isSubmitSelected){
            setIsSubmitSelected(false);
            history.replace('/home');
        }
    },[userId]);


    const onFormLayoutChange = () => {
        setIsLoader(true);
        setTimeout(() => {
            if(formLayout === 'Login')
                setFormLayout('Signup');
            else
                setFormLayout('Login');
            setIsLoader(false);
            }, 1000);
    };

    const onFinish = (values: any) => {
        setIsLoader(true);
        setIsSubmitSelected(true);

        const newQuery:UserState = {
            userName: values.userName,
            userPassword: values.userPassword,
            userId: 'temp',
        }

        if (formLayout === "Login"){
            dispatch(login(newQuery ));
        }
        else {
            dispatch(signup(newQuery ));
        }
    };

    const onReset = () => {
        form.resetFields();
    };


    return (
        <div className="auth-form-container">
            <Form
                form={form}
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                className="query-form"
            >
                <h2 className="form-auth-title">{formLayout} </h2>
                <Divider className="divider-title-form"/>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                {formLayout === 'Signup' &&  <Form.Item
                    label="Confirm Pass"
                    name="password2"
                    rules={[{ required: true, message: 'Please confirm your password!' }]}
                >
                    <Input.Password />
                </Form.Item>}


                <Form.Item className="action-form-buttons" wrapperCol={{ span: 12, offset: 6 }}>
                    <Button shape="round" block className="action-form-button" type="primary" htmlType="submit">
                        {formLayout}
                    </Button>
                </Form.Item>
                {formLayout === 'Login' ?
                    <span className="change-auth-type">Not a member? <span onClick={onFormLayoutChange} className="link-auth"> Signup </span></span> :
                    <span className="change-auth-type">Already a member? <span onClick={onFormLayoutChange} className="link-auth"> Login </span></span>
                }
                {isLoader && <div className="loader-container">
                    <Spin size="large" />
                    <h4 className="loader-details">Building search query to get articles</h4>
                </div>}
            </Form>
        </div>
    );
};

