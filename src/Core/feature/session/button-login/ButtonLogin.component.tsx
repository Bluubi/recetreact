import styles from './ButtonLogin.module.css'
import Button from '../../../../Shared/Button/Button.template.tsx'
import { ComponentProps } from 'react'

export function ButtonLogin({ ...props }: ComponentProps<'button'>) {
	return (
		<Button
			action={sayHi}
			testId={'submit'}
			size={'full-width'}
			customStyles={[styles.button, styles.text, styles.bgDark]}>
			<span className={styles.text}>{props.children}</span>
		</Button>
	)
}

function sayHi() {
	console.log('hi')
}
