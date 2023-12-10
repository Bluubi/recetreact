import Button from '../../../../Shared/Button/Button.template.tsx'
import styles from './ButtonLogin.module.css'

export const ButtonLoginTemplate = {
	action: {
		render: () =>
			Button({
				callback: sayHi,
				testId: 'submit',
				position: 'relative',
				size: 'full-width',
				children: <span className={styles.text}>Login</span>,
			}).render(),
	},
}

function sayHi() {
	console.log('hi')
}
