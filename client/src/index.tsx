import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Paths } from './paths';
import Login from './pages/login';
import Register from './pages/register';
import { ConfigProvider, theme } from 'antd';
import Employees from './pages/employees';

const router = createBrowserRouter([
	{
		path: Paths.home,
		element: <Employees />,
	},
	{
		path: Paths.login,
		element: <Login />,
	},
	{
		path: Paths.register,
		element: <Register />,
	},
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConfigProvider
				theme={{
					algorithm: theme.darkAlgorithm,
				}}
			>
				<RouterProvider router={router} />
			</ConfigProvider>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
