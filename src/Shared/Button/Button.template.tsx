import { ComponentProps } from 'react'
import styles from './Button.module.css'

export type ButtonProps = ComponentProps<'button'> & {
	action: () => void
	testId: 'primary' | 'secondary' | 'submit' | 'close'
	size: 'full-width' | 'auto-width' | 'normal-width'
	customStyles?: string[]
	type: 'button' | 'submit'
}

function Button({
	testId,
	action,
	size,
	type = 'submit',
	customStyles = [],
	...props
}: ButtonProps) {
	return (
		<button
			className={
				styles.base + ' ' + styles[size] + ' ' + concatenate(customStyles)
			}
			role={'button'}
			data-testid={testId}
			onClick={action}
			type={type}>
			{props.children}
		</button>
	)
}

function concatenate(customStyles: string[]) {
	if (customStyles.length === 0) {
		return ''
	}
	return customStyles.reduce((style, nextStyle) => style + ' ' + nextStyle)
}

export default Button
