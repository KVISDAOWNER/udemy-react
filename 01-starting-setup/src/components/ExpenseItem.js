import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div>
        <h2 className="expense-item__descriptor">Car Insurance</h2>
        <div className="expense-item__price">$296.47</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
