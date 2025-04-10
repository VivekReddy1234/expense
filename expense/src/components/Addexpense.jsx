import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddExpenseForm = () => {
    const [expense, setExpense] = useState({ name: '', amount: '', category: '', date: '' });
    const navigate= useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense({ ...expense, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
     
  
      try {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/expense/addExpense`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              credentials: "include",
              body: JSON.stringify({
                  expenseName: expense.name,
                  amount: expense.amount,
                  category: expense.category,
                  date: expense.date,
              }),
          });
  
          if (response.ok) {
              const data = await response.json();
              console.log('Expense Added:', data);
              navigate('/'); // Redirect to the expenses list or another page
          } else {
              alert('Failed to add expense. Please try again.');
              navigate('/addExpense');
          }
      } catch (error) {
          console.error('Error adding expense:', error);
          alert('Something went wrong. Please try again.');
      } finally {
       
          setExpense({ name: '', amount: '', category: '', date: '' });
      }
  };
  

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Add Expense</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Expense Name"
                    value={expense.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={expense.amount}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                />
                <select
                    name="category"
                    value={expense.category}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                >
                    <option value="" disabled>Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Transport">Transport</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Bills">Bills</option>
                    <option value="Shopping">Shopping</option>
                </select>
                <input
                    type="date"
                    name="date"
                    value={expense.date}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                />
                <button
                    type="submit"
                    className="w-full p-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Add Expense
                </button>
            </form>
        </div>
    );
};

export default AddExpenseForm;
