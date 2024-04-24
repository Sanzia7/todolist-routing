import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, TodoControl } from '../../components'
import { requestCreateTodo, requestDeleteTodo, requestReadTodo, requestUpdateTodo } from '../../api'
import styles from './todo-page.module.css'

export const TodoPage = () => {
	const [title, setTitle] = useState('')
	const { id } = useParams()
	const navigate = useNavigate()

	const onChangeTitle = ({ target }) => setTitle(target.value)

	const onRemove = () => requestDeleteTodo(id).then(() => navigate('/'))

	const onSave = () => {
		if (id === undefined) {
			requestCreateTodo({ title, completed: false }).then(() => navigate('/'))
		} else {
			requestUpdateTodo({ id, title }).then(() => navigate('/'))
		}
	}

	useEffect(() => {
		if (id === undefined) return

		requestReadTodo(id).then((loadedTodo) => {
			if (loadedTodo.title === undefined) {
				navigate('/404')
			}

			setTitle(loadedTodo.title)
		})
	}, [id, navigate])

	return (
		<>
			<h2>Single Task Page</h2>
			<TodoControl>
				<Button>
					<Link to="/">👈</Link>
				</Button>
				<Button onClick={onRemove}>🗑</Button>
				<Button onClick={onSave}>⏳</Button>
			</TodoControl>
			<div>
				<textarea
					className={styles.title}
					value={title}
					onChange={onChangeTitle}
				/>
			</div>
		</>

	)
}


//жирная стрелка назад: <b>&larr;</b>
