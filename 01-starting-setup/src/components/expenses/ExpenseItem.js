import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
	let [title, setTitle] = useState(props.title); //react hook - for updating html content on change - returns the variable itself and the update func

	function clickHandler(){
		setTitle('clicked!!');
	}
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__descriptor'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
				<button onClick={clickHandler}>Change Title</button>
			</div>
		</Card>
	);
}

export default ExpenseItem;
