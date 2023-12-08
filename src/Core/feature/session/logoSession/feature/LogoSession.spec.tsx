import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginTemplate from '../../login/Login.template.tsx'
import { vi } from 'vitest'
import AppTemplate from '../../../../../App.template.tsx'

vi.mock('/login', () => ({
	default: () => LoginTemplate,
}))

/**
 * @vitest-environment jsdom
 */
describe('LogoSession', () => {
	it('should set path /login when user is not logged and clicks on LogoSessionTemplate', async () => {
		render(
			<BrowserRouter>
				<Routes>
					<Route
						path={'/'}
						element={<AppTemplate />}></Route>
					<Route
						path={'/login'}
						element={<LoginTemplate />}></Route>
				</Routes>
			</BrowserRouter>
		)

		await userEvent.click(screen.getByRole('link'))

		await waitFor(() => {
			expect(screen.getByRole('form')).toBeInTheDocument()
		})
	})
})
