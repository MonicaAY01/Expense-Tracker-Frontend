import { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import axios from "axios";
import "./Stylecss.css";

export default function ExpenseTrack() {
  const [expenses, setExpenses] = useState([]);

  // Fetch all expenses from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/expenses")
      .then((res) => setExpenses(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Add a new expense/income
  const addExpense = (title, amount, type, date) => {
    const parsedAmount = Number(amount);

    // Determine sign based on type
    const finalAmount =
      type === "expense" ? -Math.abs(parsedAmount) : Math.abs(parsedAmount);

    axios
      .post("http://localhost:5000/api/expenses", {
        title,
        amount: finalAmount,
        date,
      })
      .then((res) => setExpenses([...expenses, res.data]))
      .catch((err) => console.error("Add error:", err));
  };

  // Delete an expense by ID
  const deleteExpense = (id) => {
    axios
      .delete(`http://localhost:5000/api/expenses/${id}`)
      .then(() =>
        setExpenses((prevExpenses) =>
          prevExpenses.filter((exp) => exp._id !== id)
        )
      )
      .catch((err) => console.error("Delete error:", err));
  };

  return (
    <div className="expense-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}
