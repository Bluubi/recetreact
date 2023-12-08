import styles from './logo.module.css'
import logout from '@assets/svgs/person-delete-fill.svg'
import { Link } from 'react-router-dom'

function LogoSessionTemplate() {
	return (
		<div className={styles.container}>
			<Link
				role={'link'}
				className={styles.link}
				to={'/login'}>
				<img
					className={styles.logo}
					alt={'no logged'}
					src={logout}
				/>
			</Link>
		</div>
	)
}

export default LogoSessionTemplate
