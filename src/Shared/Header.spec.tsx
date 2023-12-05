import { describe } from 'vitest'
import { render } from '@testing-library/react'
import Header from './Header.tsx'

/**
 * @vitest-environment jsdom
 */
describe('Header', () => {
	it.each`
		valuePadding | expectedPadding | valueBackground | expectedBackground
		${'pad-8'}   | ${'pad-8'}      | ${'bg-dark'}    | ${'bg-dark'}
		${'pad-16'}  | ${'pad-16'}     | ${'bg-light'}   | ${'bg-light'}
	`(
		'should set correct parameter',
		({
			valuePadding,
			expectedPadding,
			valueBackground,
			expectedBackground,
		}) => {
			const renderized = render(
				<Header
					backgroundColor={valueBackground}
					padding={valuePadding}
				/>
			)
			const header = renderized.getByRole('title')

			expect(header.className.includes(expectedBackground)).toBeTruthy()
			expect(header.className.includes(expectedPadding)).toBeTruthy()
		}
	)

	it('header should render content projection', () => {
		const header = render(
			<Header
				backgroundColor={'bg-dark'}
				padding={'pad-8'}>
				<div role={'contentinfo'}></div>
			</Header>
		)

		expect(header.getByRole('contentinfo')).toBeTruthy()
	})
})
