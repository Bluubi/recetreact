import { ComponentProps } from 'react'
import styles from './Header.module.css'

type HeaderProps = ComponentProps<'header'> & {
	backgroundColor: 'bg-dark' | 'bg-light'
	padding: 'pad-8' | 'pad-16'
}

const Header = ({ backgroundColor, padding, ...props }: HeaderProps) => {
	return <header role={'title'} className={`full-span ${styles.header} ${backgroundColor} ${padding}`}>
		{props.children}</header>
}

export default Header
