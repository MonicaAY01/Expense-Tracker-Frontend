// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// import "./Stylecss.css";





// export default function App() {
//   const [expenses, setExpenses] = useState([]);
//   const [title, setTitle] = useState("");
//   const [amount, setAmount] = useState("");
//   const [type, setType] = useState("income");
//   const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

//   // Fetch expenses on load
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/expenses").then((res) => {
//       setExpenses(res.data);
//     });
//   }, []);

//   const addExpense = async () => {
//     if (!title || !amount || !date) return;
//     const response = await axios.post("http://localhost:5000/api/expenses", {
//       title,
//       amount: type === "expense" ? -Math.abs(amount) : Math.abs(amount),
//       date,
//     });
//     setExpenses([...expenses, response.data]);
//     setTitle("");
//     setAmount("");
//     setType("income");
//     setDate(new Date().toISOString().split("T")[0]);
//   };

//   const deleteExpense = async (id) => {
//     await axios.delete(`http://localhost:5000/api/expenses/${id}`);
//     setExpenses(expenses.filter((e) => e._id !== id));
//   };

//   const income = expenses.filter((e) => e.amount > 0).reduce((a, b) => a + b.amount, 0);
//   const expense = expenses.filter((e) => e.amount < 0).reduce((a, b) => a + b.amount, 0);
//   const balance = income + expense;

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-100 to-white py-10 px-4 md:px-10">
//       <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
//         <h1 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h1>

//         {/* Form */}
//         <select
//           className="w-full mb-2 p-2 bg-gray-200 rounded"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//         >
//           <option value="income">Income</option>
//           <option value="expense">Expense</option>
//         </select>
//         <input
//           type="text"
//           placeholder="Title"
//           className="w-full mb-2 p-2 bg-gray-200 rounded"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Amount"
//           className="w-full mb-2 p-2 bg-gray-200 rounded"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <input
//           type="date"
//           className="w-full mb-4 p-2 bg-gray-200 rounded"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <button
//           onClick={addExpense}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Add {type}
//         </button>

//         {/* Summary */}
//         <div className="bg-blue-100 mt-6 p-4 rounded-xl">
//           <p><strong>Income:</strong> ₹{income}</p>
//           <p><strong>Expense:</strong> ₹{Math.abs(expense)}</p>
//           <p><strong>Balance:</strong> ₹{balance}</p>
//         </div>

//         {/* List */}
//         <ul className="mt-6">
//           {expenses.map((expense) => (
//             <li
//               key={expense._id}
//               className="bg-white shadow p-4 mb-4 rounded-xl flex justify-between items-center"
//             >
//               <div>
//                 <p className="font-semibold">
//                   {expense.title}
//                   <span className="text-sm text-gray-500 ml-2">
//                     {expense.date
//                       ? new Date(expense.date).toLocaleDateString("en-GB").replaceAll("/", "-")
//                       : "No date"}
//                   </span>
//                 </p>
//                 <p className="text-lg font-bold">
//                   ₹{Math.abs(expense.amount)}
//                 </p>
//               </div>
//               <button
//                 onClick={() => deleteExpense(expense._id)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
import ExpenseTrack from "./components/ExpenseTrack"

function App() {
    
  return (
    <>
     <ExpenseTrack/>
    </>
  )  
}

export default App