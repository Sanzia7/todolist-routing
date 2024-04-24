import { RiTodoFill } from 'react-icons/ri'
import {Button} from '../button/button'
import styles from './todo.module.css'

export const Todo = ({
	title,
	completed,
	isEdit,
	onEdit,
	onChangeTitle,
	onToggleCompleted,
	onSave,
	onRemove
}) => {
	return (

		<div className={`${styles.todo} ${completed ? styles.completedTodo : ''}`}>
			<RiTodoFill className={ styles.todoIcon } />

		

			<div className={styles.title}>
				{isEdit ? (
					<input
						type="text"
						value={title}
						onChange={({ target }) => onChangeTitle(target.value)}
					/>
				) : (
					<div onClick={onEdit}>{title}</div>
				)}
			</div>
			<div>
				{isEdit ? (

					<Button onClick={onSave}>✍</Button>
				) : (
					<Button onClick={onRemove}>✖</Button>
				)}
			</div>

			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={({target}) => onToggleCompleted(target.checked)}
			/>
		</div>
		)
}
