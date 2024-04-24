import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, TodoControl } from '../../components'
import { RiTodoFill } from 'react-icons/ri'
import { Search, Sorting } from './actions'
import { requestReadTodos, requestUpdateTodo } from '../../api'
import { setTodo } from '../../utils'
import styles from './main-page.module.css'

export const MainPage = () => {
	const [todos, setTodos] = useState([])
	const [searchText, setSearchText] = useState('')
	const [isSortingAlphabet, setIsSortingAlphabet] = useState(false)

	useEffect(() => {
		requestReadTodos(searchText, isSortingAlphabet)
			.then((loadedTodos) => setTodos(loadedTodos))
	}, [searchText, isSortingAlphabet])


	const onToggleCompleted = (id, isCompleted) => {
		requestUpdateTodo({ id, completed: isCompleted })
			.then(() => {
			setTodos(setTodo(todos, { id, completed: isCompleted }))
		})
	}


	return (
		<>
			<TodoControl>
				<Search onSearch={ setSearchText } />
				<Sorting onSorting={ setIsSortingAlphabet } />
				<Button>
					<Link to="/task">☝</Link>
				</Button>
			</TodoControl>
			<div>
				{todos.map(({ id, title, completed }) => (
					<div className={`${styles.todo} ${completed ? styles.completedTodo : ''}`} key={ id }>
					<RiTodoFill className={styles.todoIcon} />
						<Link to={ `/task/${id}` } className={ styles.title }>
							{ title }
						</Link>
						<input
							className={ styles.checkbox }
							type="checkbox"
							checked={ completed }
							onChange={ ({ target }) =>
								onToggleCompleted(id, target.checked)
							}
						/>
					</div>
				)) }
			</div>
		</>
	)
}


