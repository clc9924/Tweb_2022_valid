import './FormsStyle.css';
import { Form, Input, InputNumber, Button } from 'antd';
import {useState} from "react";

const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 2 },
};


const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
    };

export const Forms = () => {
    const onFinish = (values: any) => {
        console.log(values);
        const myJSON = JSON.stringify(values);
        alert(myJSON);
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'name']} label="Name and Surname" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'number']} label="Number" rules={[{ type: 'number' }]}>
                <Input />
            </Form.Item>
        
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
                <Button type="primary" htmlType="submit"> 
                    Upload
                </Button>
            </Form.Item>
        </Form>
    );
};