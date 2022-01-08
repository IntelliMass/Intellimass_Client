import { Form, Input, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export const FormEdition = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('validation + sending ', values);
    };

    return (
        <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
            <Form.List name="sights">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(field => (
                            <Space key={field.key} align="baseline">
                                <Form.Item
                                    {...field}
                                    label="keyword"
                                    name={[field.name, 'keyword']}
                                    rules={[{ required: true, message: 'Missing keyword' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                            </Space>
                        ))}

                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add sights
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};