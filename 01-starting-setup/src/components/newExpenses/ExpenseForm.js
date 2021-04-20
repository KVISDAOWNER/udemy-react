import {useState} from 'react';
import './ExpenseForm.css'

function ExpenseForm(props){
	
	const [title, setTitle] = useState(''); //initially title is empty aka. ''
	const [amount, setAmount] = useState(''); //initially amount is '' not a number because it always returns a string anyway
	const [date, setDate] = useState(''); //initially date is empty aka. ''
	
	function titleChangedHandler(event){
		setTitle(event.target.value);
	}
	
	function amountChangedHandler(event){
		setAmount(event.target.value);
	}

	function dateChangedHandler(event){
		setDate(event.target.value);
	}

	function submitHandler(event){
		event.preventDefault(); //dont reload page on form submit - this is otherwise default html behavior

		const expenseData = {	//IMPORTANT: we use the title, amount, and date returned from useState!!!!
			title: title,
			amount: amount,
			date: new Date(date)
		}

		//pass data to parent component
		props.onSaveExpenseData(expenseData); //onSaveExpenseData is basicly a pointer to the function supplied by NewExpense

		//reset inputs
		setTitle('');
		setAmount('');
		setDate('');
	}

	return (
		<form onSubmit={submitHandler}> 
			<div className="new-expense__controls">
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={title} onChange={titleChangedHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' value={amount} min='0.01' step='0.01' onChange={amountChangedHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' value={date} min='2019-01-01' step='2022-12-31' onChange={dateChangedHandler}/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)//this uses two way binding because the <input> displays a 'default' value which is the most recent one submitted to useState. 
}

export default ExpenseForm;