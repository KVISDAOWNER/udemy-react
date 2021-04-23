import './Expenses.css';
import ExpensesList from './ExpensesList';
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
			<ExpensesList expenses={filteredExpenses}></ExpensesList>
		</Card>
	);
}

export default Expenses;