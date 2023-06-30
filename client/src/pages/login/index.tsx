import { useState } from 'react';
import { Card, Form, Row, Space, Typography } from 'antd';
import Layout from '../../components/layout';
import CustomInput from '../../components/custom-input';
import PasswordInput from '../../components/password-input';
import CustomButton from '../../components/custom-button';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';
import { UserData, useLoginMutation } from '../../app/services/auth';
import { isErrorWithMessage } from '../../utils/is-error-with-message';
import ErrorMessage from '../../components/error-message';

const Login = () => {
	const navigate = useNavigate();
	const [loginUser, loginUserResult] = useLoginMutation();
	const [error, setError] = useState('');

	const login = async (data: UserData) => {
		try {
			await loginUser(data).unwrap();

			navigate('/');
		} catch (err) {
			const maybeError = isErrorWithMessage(err);

			if (maybeError) {
				setError(err.data.message);
			} else {
				setError('Unknown error');
			}
		}
	};

	return (
		<Layout>
			<Row align="middle" justify="center">
				<Card title="Login" style={{ width: '30rem' }}>
					<Form onFinish={login}>
						<CustomInput type="email" name="email" placeholder="Email" />
						<PasswordInput name="password" placeholder="Password" />
						<CustomButton type="primary" htmlType="submit">
							Log in
						</CustomButton>
					</Form>
					<Space direction="vertical" size="large">
						<Typography.Text>
							Don't have an account? <Link to={Paths.register}>Register</Link>
						</Typography.Text>
						<ErrorMessage message={error} />
					</Space>
				</Card>
			</Row>
		</Layout>
	);
};

export default Login;
