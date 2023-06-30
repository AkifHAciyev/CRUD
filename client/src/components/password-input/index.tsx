import { Form, Input } from 'antd';
import { NamePath } from 'antd/es/form/interface';

type Props = {
	name: string;
	placeholder: string;
	dependencies?: NamePath[];
};

const PasswordInput = ({ name, placeholder, dependencies }: Props) => {
	return (
		<Form.Item
			name={name}
			dependencies={dependencies}
			hasFeedback
			rules={[
				{ required: true, message: 'Obligatory field' },
				({ getFieldValue }) => ({
					validator(_, value) {
						if (!value) {
							return Promise.resolve();
						}

						if (name === 'confirmPassword') {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve();
							}
							return Promise.reject(new Error('Passwords must match'));
						} else {
							if (value.length < 6) {
								return Promise.reject(new Error('Password must be longer than 6 characters'));
							}

							return Promise.resolve();
						}
					},
				}),
			]}
		>
			<Input.Password placeholder={placeholder} size="large" />
		</Form.Item>
	);
};

export default PasswordInput;
