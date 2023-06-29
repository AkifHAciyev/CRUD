import { Card, Form, Row } from 'antd';
import Layout from '../../components/layout';
import CustomInput from '../../components/custom-input';

const Login = () => {
	return (
		<Layout>
			<Row align="middle" justify="center">
				<Card title="Login" style={{ width: '30rem' }}>
					<Form onFinish={() => null}>
						<CustomInput />
					</Form>
				</Card>
			</Row>
		</Layout>
	);
};

export default Login;
