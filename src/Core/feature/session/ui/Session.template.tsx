import styles from './session.module.css'
import logout from '@assets/svgs/person-delete-fill.svg'

const SessionTemplate = () => {
	return (
		<div className={styles.container}>
			<img
				className={styles.message}
				alt={'no logged'}
				src={logout}
			/>
		</div>
	)
}
export default SessionTemplate
