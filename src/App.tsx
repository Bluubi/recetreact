import styles from './App.module.css'
import Header from './Shared/Header.tsx'
function App() {
	return (
		<Header backgroundColor={'bg-dark'} padding={'pad-16'}>
			<h3
				role={'presentation'}
				className={`${styles.presentation}`}>
				{' '}
				Welcome to RecetReact{' '}
			</h3>
		</Header>
	)
}

export default App
