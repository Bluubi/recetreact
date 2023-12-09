import Button from '../../../../Shared/Button/Button.template.tsx'
import { JSX } from 'react'

export const ButtonLoginTemplate = {
	action: {
		render: (children: JSX.Element) =>
			Button({ callback: sayHi, testId: 'submit', children }).render(),
	},
}

function sayHi() {
	console.log('hi')
}
