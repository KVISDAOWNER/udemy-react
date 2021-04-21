import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props){
	const [filterDate, setFilterDate] = useState('');


	function filterChangedHandler(selectedYear){
		setFilterDate(selectedYear);
		console.log(selectedYear);
	}

	return (
		<Card className='expenses'>
			<ExpensesFilter onFilterChanged={filterChangedHandler}></ExpensesFilter>
			<ExpenseItem
				title={props.expenses[0].title}
				amount={props.expenses[0].amount}
				date={props.expenses[0].date}
			></ExpenseItem>
			<ExpenseItem
				title={props.expenses[1].title}
				amount={props.expenses[1].amount}
				date={props.expenses[1].date}
			></ExpenseItem>
			<ExpenseItem
				title={props.expenses[2].title}
				amount={props.expenses[2].amount}
				date={props.expenses[2].date}
			></ExpenseItem>
		</Card>
	);
}

export default Expenses;