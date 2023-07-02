import { Employee } from '@prisma/client';
import { Card, Form, Space } from 'antd';
import CustomInput from '../custom-input';
import ErrorMessage from '../error-message';
import CustomButton from '../custom-button';

type Props<T> = {
	onFinish: (values: T) => void;
	btnText: string;
	title: string;
	error?: string;
	employee?: T;
};

const EmployeeForm = ({ onFinish, title, employee, btnText, error }: Props<Employee>) => {
	return (
		<Card title={title} style={{ width: '30rem' }}>
			<Form name="add-employee" onFinish={onFinish} initialValues={employee}>
				<CustomInput type="text" name="firstName" placeholder="Name" />
				<CustomInput name="lastName" placeholder="Surname" />
				<CustomInput type="number" name="age" placeholder="Age" />
				<CustomInput name="adress" placeholder="Address" />
				<Space direction="vertical" size="large">
					<ErrorMessage message={error} />
					<CustomButton htmlType="submit">{btnText}</CustomButton>
				</Space>
			</Form>
		</Card>
	);
};

export default EmployeeForm;
