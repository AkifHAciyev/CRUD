import { useEffect, useState } from 'react';
import { Card, Form, Row, Space, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../../components/custom-button';
import CustomInput from '../../components/custom-input';
import Layout from '../../components/layout';
import PasswordInput from '../../components/password-input';
import { Paths } from '../../paths';
import ErrorMessage from '../../components/error-message';
import { selectUser } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { isErrorWithMessage } from '../../utils/is-error-with-message';
import { useRegisterMutation } from '../../app/services/auth';
import { User } from '@prisma/client';

type RegisterData = Omit<User, 'id'> & { confirmPassword: string };

const Register = () => {
	const navigate = useNavigate();
	const user = useSelector(selectUser);
	const [error, setError] = useState('');
	const [registerUser] = useRegisterMutation();

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user, navigate]);

	const register = async (data: RegisterData) => {
		try {
			await registerUser(data).unwrap();

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
				<Card title="Registration" style={{ width: '30rem' }}>
					<Form onFinish={register}>
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
