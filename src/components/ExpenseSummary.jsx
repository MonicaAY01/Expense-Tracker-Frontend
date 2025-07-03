export default function ExpenseSummary({ expenses }) {
  const income = expenses
    .filter((exp) => exp.amount > 0)
    .reduce((acc, exp) => acc + exp.amount, 0);

  const expense = expenses
    .filter((exp) => exp.amount < 0)
    .reduce((acc, exp) => acc + exp.amount, 0);

  const balance = income + expense;

  return (
    <div className="expense-summary">
      <p><strong>Income:</strong> ₹{income}</p>
      <p><strong>Expense:</strong> ₹{Math.abs(expense)}</p>
      <p><strong>Balance:</strong> ₹{balance}</p>
    </div>
  );
}