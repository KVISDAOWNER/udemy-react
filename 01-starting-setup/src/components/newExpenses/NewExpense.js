import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(){

	function saveExpenseDataHandler(enteredExpenseData){
		const expensedata = {
			...enteredExpenseData, //put out all key value pairs
			id: Math.random().toString() //just a wack id generation
		}
		console.log(expensedata);
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
		</div>
	)
}

export default NewExpense;