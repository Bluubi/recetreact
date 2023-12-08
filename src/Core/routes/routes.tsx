import { createBrowserRouter } from 'react-router-dom'
import AppTemplate from '../../App.template.tsx'
import LoginPath from './login/feature/login.path.tsx'

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <AppTemplate />,
		children: [LoginPath()],
	},
])
