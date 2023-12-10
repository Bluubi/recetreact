import { ComponentProps, ReactNode } from 'react'
import styles from './Button.module.css'

export type ButtonProps = ComponentProps<'button'> & {
	callback: () => void
	testId: 'primary' | 'secondary' | 'submit'
} & ButtonStats

export type ButtonStats = {
	theme?: 'bg-dark' | 'bg-light' | 'bg-none'
	position?: 'relative' | 'absolute' | 'default'
	size?: 'full-width' | 'normal-width' | 'auto'
	mode?: 'default' | 'close'
	place?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'unset'
}

function Button({
	theme = 'bg-dark',
	position = 'default',
	size = 'auto',
	mode = 'default',
	place = 'unset',
	testId,
	callback,
	...props
}: ButtonProps) {
	return {
		render: (): ReactNode => {
			return (
				<button
					className={`${styles.button} ${styles[theme]} ${styles[size]} ${
						styles[mode]
					} ${styles[place]}
					${position !== 'default' && styles[position]}`}
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
