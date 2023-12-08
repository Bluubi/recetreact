import LoginTemplate from '../../../feature/session/login/Login.template.tsx'
import { RouteObject } from 'react-router-dom'

const LoginPath = (paths?: RouteObject[]): RouteObject => {
	return {
		path: '/login',
		element: <LoginTemplate />,
		children: paths,
	}
}

export default LoginPath
