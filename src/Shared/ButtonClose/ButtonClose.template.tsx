import Button from '../Button/Button.template.tsx'
import styles from './ButtonClose.module.css'

export const ButtonCloseTemplate = {
	action: {
		render: () => {
			return Button({
				testId: 'close',
				size: 'auto-width',
				children: <span>X</span>,
				action: close,
				customStyles: [styles.button, styles.topRight],
			}).render()
		},
	},
}

function close() {}
