import { Route, Routes } from 'react-router-dom'
import { MainPage, NotFound, TodoPage } from './pages'
import styles from './app.module.css'





export const App = () => {

	return (
		<div className={styles.app}>
			<h2>Welcome!</h2>
			<h1>Let's start Your Time organization:</h1>

			<Routes>
				<Route path='/' element={ <MainPage /> } />
				<Route path='/task' element={ <TodoPage /> } />
				<Route path='/task/:id' element={ <TodoPage /> } />
				<Route path='/404' element={ <NotFound /> } />
				<Route path='/*' element={ <NotFound /> } />
			</Routes>

			<h3>* My App Todos-Json-Server *</h3>
		</div>
	)
}


// npm i eslint-config-prettier eslint-plugin-prettier prettier
// npm i json-server
// npm install json-server@0.17.4
// npx json-server --watch db.json --port 3010
//npm install react-router-dom
