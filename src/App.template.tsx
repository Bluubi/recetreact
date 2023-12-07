import styles from './App.module.css'
import HeaderTemplate from './Shared/Header/Header.template.tsx'
import SectionTemplate from './Shared/Section/Section.template.tsx'
import SessionTemplate from './Core/feature/session/ui/Session.template.tsx'

function AppTemplate() {
	return (
		<main className={'full-span'}>
			<HeaderTemplate
				backgroundColor={'bg-dark'}
				padding={'pad-16'}>
				<h3
					role={'presentation'}
					className={`${styles.presentation}`}>
					{' '}
					Welcome to RecetReact{' '}
				</h3>
				<SessionTemplate />
			</HeaderTemplate>

			<SectionTemplate role={'contentinfo'} />
		</main>
	)
}

export default AppTemplate
