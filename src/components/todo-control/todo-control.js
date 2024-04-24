//import { Button } from '../button/button'
// import { Search, Sorting } from './actions'
import styles from './todo-control.module.css'



export const TodoControl = ({ children }) => {
	return <div className={ styles.controlPanel }>
					{ children }
			</div>
}

//пержний вариант без страниц:
// export const TodoControl = ({ onAddTodo, onSearch, onSorting }) => {
//
// 	return (
// 		<div className={styles.controlPanel}>
// 			<Search onSearch={onSearch} />
// 			<Sorting onSorting={onSorting} />
//
// 			<Button  onClick={onAddTodo}>
// 				☝
// 			</Button>
// 		</div>
// 	)
// }



// html unicode - значки для кнопок
//https://www.w3schools.com/charsets/ref_utf_symbols.asp
