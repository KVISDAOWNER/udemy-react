import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

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
			<ExpensesChart expenses={filteredExpenses}/>
			<ExpensesFilter selected={filterYear} onFilterChanged={filterChangedHandler}/>	
			<ExpensesList expenses={filteredExpenses}/>
		</Card>
	);
}

export default Expenses;