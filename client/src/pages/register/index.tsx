import { useState } from 'react';
import { Card, Form, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/custom-button';
import CustomInput from '../../components/custom-input';
import Layout from '../../components/layout';
import PasswordInput from '../../components/password-input';
import { Paths } from '../../paths';
import ErrorMessage from '../../components/error-message';

const Register = () => {
	const [error, setError] = useState('');
	return (
		<Layout>
			<Row align="middle" justify="center">
				<Card title="Registration" style={{ width: '30rem' }}>
					<Form onFinish={() => null}>
						<CustomInput type="text" name="name" placeholder="Name" />
						<CustomInput type="email" name="email" placeholder="Email" />
						<PasswordInput name="password" placeholder="Password" />
						<PasswordInput name="confirmPassword" placeholder="Password" />
						<CustomButton type="primary" htmlType="submit">
							Regirter
						</CustomButton>
					</Form>
					<Space direction="vertical" size="large">
						<Typography.Text>
							Do you have an account? <Link to={Paths.login}>Log in</Link>
						</Typography.Text>
						<ErrorMessage message={error} />
					</Space>
				</Card>
			</Row>
		</Layout>
	);
};
export default Register;
