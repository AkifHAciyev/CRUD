import { Form, Input } from 'antd';

type Props = {
	name: string;
	placeholder: string;
	type?: string;
};

const CustomInput = ({ type = 'text', name, placeholder }: Props) => {
	return (
		<Form.Item name={name} rules={[{ required: true, message: 'Obligatory field' }]} shouldUpdate={true}>
			<Input placeholder={placeholder} type={type} size="large" />
		</Form.Item>
	);
};

export default CustomInput;
