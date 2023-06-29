import { TeamOutlined, LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Space, Typography } from 'antd';
import styles from './index.module.css';
import CustomButton from '../custom-button';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

const Header = () => {
	return (
		<Layout.Header className={styles.bgc}>
			<Space>
				<TeamOutlined className={styles.teamicon} />
				<Link to={Paths.home}>
					<CustomButton type="ghost">
						<Typography.Title level={1}>Employeers</Typography.Title>
					</CustomButton>
				</Link>
			</Space>
			<Space>
				<Link to={Paths.register}>
					<CustomButton type="ghost" icon={<UserOutlined />}>
						Registration
					</CustomButton>
				</Link>
				<Link to={Paths.login}>
					<CustomButton type="ghost" icon={<LoginOutlined />}>
						Log in
					</CustomButton>
				</Link>
			</Space>
		</Layout.Header>
	);
};

export default Header;
