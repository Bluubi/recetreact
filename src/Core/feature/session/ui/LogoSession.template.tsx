import styles from './logo.module.css'
import logout from '@assets/svgs/person-delete-fill.svg'

const LogoSession = () => {
	return (
		<div className={styles.container}>
			<a
				className={styles.link}
				href={'/login'}>
				<img
					className={styles.logo}
					alt={'no logged'}
					src={logout}
				/>
			</a>
		</div>
	)
}
export default LogoSession
