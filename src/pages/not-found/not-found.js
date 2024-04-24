// import image from '../../img/sorry.jpg'
import image from './sorry.jpg'
import styles from './not-found.module.css'
import { Button, TodoControl} from '../../components'
import { Link } from 'react-router-dom'


export const NotFound = () => {
	return (
		<div className={styles.container}>
			<img src={image} alt="img" />
			<div className={ styles.info }>
				<TodoControl>
					<Button>
						<Link to="/">
							<b>&larr;</b>
						</Link>
					</Button>
				</TodoControl>
				<h1>SORRY!</h1>
				<h2>SOMETHING IS WRONG . . .</h2>
				<h2>This page was not found . . . 😕</h2>
			</div>
		</div>
	)
}
