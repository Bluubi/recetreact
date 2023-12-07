import styles from './App.module.css'
import HeaderTemplate from './Shared/Header/Header.template.tsx'
import SectionTemplate from './Shared/Section/Section.template.tsx'
import LogoSession from './Core/feature/session/ui/LogoSession.template.tsx'
import { Outlet } from 'react-router-dom'

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
				<LogoSession />
			</HeaderTemplate>

			<SectionTemplate role={'contentinfo'} />
			<Outlet />
		</main>
	)
}

export default AppTemplate
