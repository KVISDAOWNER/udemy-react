import ExpenseItem from "./components/ExpenseItem";

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
  return (
    //jsx code "html inside js"
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
			<ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
			<ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
