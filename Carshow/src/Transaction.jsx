import React, { useState } from "react";
import { Link } from "react-router-dom";

function TransactionPage() {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    type: "Income",
    amount: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.description) return;

    const newTransaction = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(formData.amount),
    };
    setTransactions((prev) => [...prev, newTransaction]);
    setFormData({ type: "Income", amount: "", description: "" });
  };

  const handleDeleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((transaction) => transaction.id !== id));
  };

  const calculateSummary = () => {
    let income = 0, expense = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === "Income") {
        income += transaction.amount;
      } else {
        expense += transaction.amount;
      }
    });
    return { income, expense };
  };

  const { income, expense } = calculateSummary();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8">Transaction Manager</h1>

      {/* Summary Section */}
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
        <div className="p-4 bg-green-100 rounded-lg text-center shadow-md">
          <h2 className="text-lg font-semibold text-green-800">Income</h2>
          <p className="text-2xl font-bold text-green-800">₹{income.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg text-center shadow-md">
          <h2 className="text-lg font-semibold text-red-800">Expense</h2>
          <p className="text-2xl font-bold text-red-800">₹{expense.toFixed(2)}</p>
        </div>
      </div>

      {/* Add Transaction Form */}
      <form
        onSubmit={handleAddTransaction}
        className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Transaction</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded p-2"
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Amount (₹)</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded p-2"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Card Number</label>
            <input
              type="number"
              name="Card Number"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border-gray-300 rounded p-2"
              placeholder="Enter description"
            />
          </div>
        </div>
        <Link to={'/payment'}>
        <button
          className="mt-4 w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700" >
          Add Transaction
        </button>
        </Link>
      </form>

      {/* Transaction List */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        {transactions.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className="flex justify-between items-center py-4"
              >
                <div>
                  <p className="text-lg font-medium">{transaction.description}</p>
                  <p
                    className={`text-sm ${
                      transaction.type === "Income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.type} - ₹{transaction.amount.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteTransaction(transaction.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No transactions available.</p>
        )}
      </div>
    </div>
  );
}

export default TransactionPage;
