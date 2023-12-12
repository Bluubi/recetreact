import styles from './login.module.css'
import { ButtonLogin } from '../button-login/ButtonLogin.component.tsx'
import { ButtonClose } from '../../../../Shared/ButtonClose/ButtonClose.component.tsx'

const LoginTemplate = () => {
	return (
		<div className={styles.background}>
			<div role={'generic'}>
				<form
					role={'form'}
					className={styles.formulary}>
					<ButtonClose>
						<span>X</span>
					</ButtonClose>

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
					<ButtonLogin>
						<span> Login </span>
					</ButtonLogin>
				</form>
			</div>
		</div>
	)
}

export default LoginTemplate
