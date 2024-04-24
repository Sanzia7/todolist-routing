import { useState } from 'react'
import { Button } from '../../../../components/button/button'
import styles from './sorting.module.css'


export const Sorting = ({ onSorting }) => {
	const [isActive, setIsActive] = useState(false)

	const onChange = ({ target }) => {
		setIsActive(target.checked)
		onSorting(target.checked)
	}

	return (
		<Button>
			<input
				className={styles.checkbox}
				type="checkbox"
				id="sorting-btn"
				checked={isActive}
				onChange={onChange}
			/>
			<label className={styles.label} htmlFor="sorting-btn">
				A&darr;
			</label>
		</Button>
	)
}
