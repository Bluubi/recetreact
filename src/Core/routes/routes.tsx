import { createBrowserRouter } from 'react-router-dom'
import AppTemplate from '../../App.template.tsx'
import LoginTemplate from '../feature/session/login/Login.template.tsx'

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <AppTemplate />,
		children: [
			{
				path: '/login',
				element: <LoginTemplate />,
			},
		],
	},
])
