import { TeamOutlined, LoginOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Space, Typography } from 'antd';
import styles from './index.module.css';
import CustomButton from '../custom-button';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';
import { logout, selectUser } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
	const user = useSelector(selectUser);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onLogoutClick = () => {
		dispatch(logout());
		localStorage.removeItem('token');
		navigate('/login');
	};

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
			{user ? (
				<CustomButton type="ghost" icon={<LogoutOutlined />} onClick={onLogoutClick}>
					Log out
				</CustomButton>
			) : (
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
			)}
		</Layout.Header>
	);
};

export default Header;
