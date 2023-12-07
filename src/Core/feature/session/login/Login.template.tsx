import styles from './login.module.css'

const LoginTemplate = () => {
	return (
		<div className={styles.background}>
			<div role={'generic'}>
				<form
					role={'form'}
					className={styles.formulary}>
					<div className={styles.formGroup}>
						<p>Introduce your username</p>
						<input
							className={styles.input}
							role={'textbox'}
							type={'text'}></input>
					</div>

					<div className={styles.formGroup}>
						<p>Introduce your password</p>
						<input
							className={styles.input}
							role={'textbox'}
							type={'password'}></input>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginTemplate
