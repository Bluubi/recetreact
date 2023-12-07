import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AppTemplate from './App.template.tsx'
import { describe, expect, it } from 'vitest'

/**
 * @vitest-environment jsdom
 */
describe('App', () => {
	it('should render Hello World', () => {
		render(<AppTemplate />)

		expect(screen.getByRole('presentation')).toBeInTheDocument()
	})
})
