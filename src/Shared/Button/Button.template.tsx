import { ComponentProps, ReactNode } from 'react'
import styles from './Button.module.css'

export type ButtonProps = ComponentProps<'button'> & {
	action: () => void
	testId: 'primary' | 'secondary' | 'submit' | 'close'
	size: 'full-width' | 'auto-width' | 'normal-width'
	customStyles?: string[]
}

function Button({
	testId,
	action,
	size,
	customStyles = [],
	...props
}: ButtonProps) {
	return {
		render: (): ReactNode => {
			return (
				<button
					className={
						styles.base + ' ' + styles[size] + ' ' + concatenate(customStyles)
					}
					role={'button'}
					data-testid={testId}
					onClick={action}>
					{' '}
					{props.children}
				</button>
			)
		},
	}
}

function concatenate(customStyles: string[]) {
	if (customStyles.length === 0) {
		return ''
	}
	return customStyles.reduce((style, nextStyle) => style + ' ' + nextStyle)
}

export default Button
