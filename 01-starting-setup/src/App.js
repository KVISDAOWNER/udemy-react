import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense"
function App() {
	const expenses = [
		{
			id: "e1",
			title: "Car Insurance",
			amount: 293,
			date: new Date(2021, 4, 14),
		},
		{
			id: "e2",
			title: "Dishwasher",
			amount: 1000,
			date: new Date(2021, 4, 14),
		},
		{
			id: "Netflix",
			title: "Car Insurance",
			amount: 10,
			date: new Date(2021, 4, 14),
		},
	];

	function addExpenseHandler(expense){
		console.log(expense);
	}

	return (
		//jsx code "html inside js"
		<div>
			<NewExpense onAddExpense={addExpenseHandler}/>
			<Expenses expenses={expenses} ></Expenses>
		</div>
	);
}

export default App;
