import styles from './login.module.css'
import { JSX } from 'react'
import { ButtonLoginTemplate } from '../button-login/ButtonLogin.template.tsx'

const LoginTemplate = (): JSX.Element => {
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
					<div className={styles.close}>X</div>
					{ButtonLoginTemplate.action.render(<span>Login</span>)}
				</form>
			</div>
		</div>
	)
}

export default LoginTemplate
