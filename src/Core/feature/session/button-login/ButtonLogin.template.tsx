import Button from '../../../../Shared/Button/Button.template.tsx'
import styles from './ButtonLogin.module.css'

export const ButtonLoginTemplate = {
	action: {
		render: () =>
			Button({
				action: sayHi,
				testId: 'submit',
				children: <span className={styles.text}>Login</span>,
				size: 'full-width',
				customStyles: [styles.button, styles.text, styles.bgDark],
			}).render(),
	},
}

function sayHi() {
	console.log('hi')
}
