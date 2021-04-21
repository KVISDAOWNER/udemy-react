import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props){
	const [filterYear, setFilterYear] = useState('2020');

	function filterChangedHandler(selectedYear){
		setFilterYear(selectedYear);
	}

	const filteredExpenses = props.expenses.filter((e) => {
		return e.date.getFullYear().toString() === filterYear;
	});


	return (
		<Card className='expenses'>
			<ExpensesFilter selected={filterYear} onFilterChanged={filterChangedHandler}></ExpensesFilter>
			
			{filteredExpenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}

		</Card>
	);
}

export default Expenses;