import { Card, Form, Row, Space, Typography } from 'antd';
import Layout from '../../components/layout';
import CustomInput from '../../components/custom-input';
import PasswordInput from '../../components/password-input';
import CustomButton from '../../components/custom-button';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

const Login = () => {
	return (
		<Layout>
			<Row align="middle" justify="center">
				<Card title="Login" style={{ width: '30rem' }}>
					<Form onFinish={() => null}>
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
					</Space>
				</Card>
			</Row>
		</Layout>
	);
};

export default Login;
