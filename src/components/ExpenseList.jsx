export default function ExpenseList({ expenses, deleteExpense }) {
  return (
    <ul className="expense-list">
      {expenses.map((expense) => {
        console.log('Expense item:', expense); // Debug log
        return (
          <li key={expense._id} className="expense-item">
            <div className="expense-info">
              <strong>{expense.title}</strong>: ₹{expense.amount}
              <div style={{ fontSize: '0.9em', color: '#555' }}>
                {expense.date ? new Date(expense.date).toLocaleDateString('en-IN') : 'Date not available'}
              </div>
            </div>
            <button onClick={() => deleteExpense(expense._id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}