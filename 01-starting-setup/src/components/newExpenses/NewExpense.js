import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import AddNexExpenseBtn from './AddNexExpenseBtn'

import { useState } from 'react';

function NewExpense(props){
	const [showExpenseForm, setShowExpenseForm] = useState(false);

	function saveExpenseDataHandler(enteredExpenseData){
		const expensedata = {
			...enteredExpenseData, //put out all key value pairs
			id: Math.random().toString() //just a wack id generation
		}
		props.onAddExpense(expensedata);
	}

	function addNexExpenseHandler(event){
		setShowExpenseForm(true);
	}

	function cancelExpenseHandler(event){
		setShowExpenseForm(false);
	}

	if(!showExpenseForm){
		return (
		<div className='new-expense'>
			<AddNexExpenseBtn onAddExpense={addNexExpenseHandler}></AddNexExpenseBtn>
		</div>
		);
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={cancelExpenseHandler}/>
		</div>
	);
}

export default NewExpense;