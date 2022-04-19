import { Form, Input, Button, notification } from 'antd';

export const Form_Input_Buttons = () => {

    const onFinish = (values: any) => {
        notification.open({
          message: 'Press CTRL+SHIFT+I for open console',
        });
        console.log('Result', values);
    };

    return(
        <Form
            name='basic'
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 5}}
            onFinish={onFinish}
            autoComplete="off"
        >

            <Form.Item
                label="Titlul:"
                name="titlu"
                rules={[
                    { required: true, message: 'Introdu un titlu!!!'}
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="VIDEO_URL:"
                name="video_url"
                rules={[
                    { required: true, message: 'Introdu un VIDEO_URL!!!'}
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Numarul de Vizualizari:"
                name="nr_view"
                rules={[
                    { required: true, message: 'Introdu un text!!! exe 2K 3K 1M'}
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Textul din interior:"
                name="text"
                rules={[
                    { required: true, message: 'Introdu un text!!!'}
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                label="Numarul de telefon:"
                name="nrTelefon"
                rules={[
                    { required: true, message: 'Introdu un text!!!'}
                ]}
            >
                <Input type={ 'number' } />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 7}}>
                <Button type='primary' htmlType='submit' ghost>
                    Introdu
                </Button>

            </Form.Item>

        </Form>
    )
}