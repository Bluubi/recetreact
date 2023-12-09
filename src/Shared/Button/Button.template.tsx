import { ComponentProps } from 'react'
import styles from './Button.module.css'

export type ButtonProps = ComponentProps<'button'> & {
	callback: () => void
} & ButtonStats

type ButtonStats = {
	testId: 'primary' | 'secondary' | 'submit'
	theme?: 'dark' | 'light'
	colorText?: 'dark' | 'light'
}

function Button({
	colorText = 'light',
	theme = 'dark',
	testId,
	callback,
	...props
}: ButtonProps) {
	return {
		render: () => {
			return (
				<button
					className={`${styles.link} ${styles[theme]} ${
						'text-' + styles[colorText]
					}`}
					role={'button'}
					data-testid={testId}
					onClick={callback}>
					{' '}
					{props.children}
				</button>
			)
		},
	}
}

export default Button
