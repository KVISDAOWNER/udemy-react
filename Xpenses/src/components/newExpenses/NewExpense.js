import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

import { useState } from 'react';

function NewExpense(props){
	const [showExpenseForm, setShowExpenseForm] = useState(false);

	function saveExpenseDataHandler(enteredExpenseData){
		const expensedata = {
			...enteredExpenseData, //put out all key value pairs
			id: Math.random().toString() //just a wack id generation
		}
		props.onAddExpense(expensedata);
		setShowExpenseForm(false);
	}

	function startNewExpenseHandler(){
		setShowExpenseForm(true);
	}

	function cancelHandler(){
		setShowExpenseForm(false);
	}

	return (
		<div className='new-expense'>
			{!showExpenseForm && <button onClick={startNewExpenseHandler}>Add Nex Expense</button>}
			{showExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>}
		</div>
	);
}

export default NewExpense;