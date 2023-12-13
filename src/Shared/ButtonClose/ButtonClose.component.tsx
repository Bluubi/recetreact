import { ComponentProps } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ButtonClose.module.css'

type NavLinkProps = ComponentProps<'a'> & { customStyles?: string[] }
export const ButtonClose = ({ ...props }: NavLinkProps) => {
	return (
		<NavLink
			to={'/'}
			data-testid={'close'}
			className={`${styles.topRight} ${styles.button}`}>
			{props.children}
		</NavLink>
	)
}
