import { ComponentProps } from 'react'
import styles from './Header.module.css'

type HeaderProps = ComponentProps<'header'> & {
	backgroundColor: 'bg-primary-dark' | 'bg-primary-light'
	padding: 'pad-8' | 'pad-16'
}

const HeaderTemplate = ({
	backgroundColor,
	padding,
	...props
}: HeaderProps) => {
	return (
		<header
			role={'title'}
			className={`full-span ${styles.header} ${backgroundColor} ${padding}`}>
			{props.children}
		</header>
	)
}

export default HeaderTemplate
