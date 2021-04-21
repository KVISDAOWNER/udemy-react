import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props){
	const [filterYear, setFilterYear] = useState('2020');


	function filterChangedHandler(selectedYear){
		setFilterYear(selectedYear);
		console.log(selectedYear);
	}

	return (
		<Card className='expenses'>
			<ExpensesFilter selected={filterYear} onFilterChanged={filterChangedHandler}></ExpensesFilter>
			
			{props.expenses.map((expense) => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				></ExpenseItem>
			))}

		</Card>
	);
}

export default Expenses;