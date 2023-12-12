import Button from '../Button/Button.template.tsx'
import styles from './ButtonClose.module.css'
import { ComponentProps } from 'react'

export const ButtonClose = ({ ...props }: ComponentProps<'button'>) => {
	return (
		<Button
			testId={'close'}
			size={'auto-width'}
			action={close}
			customStyles={[styles.button, styles.topRight]}>
			{props.children}
		</Button>
	)
}

function close() {}
