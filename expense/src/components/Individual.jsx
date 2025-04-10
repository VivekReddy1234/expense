import React, { useState } from 'react';

const Individual = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExpense, setEditedExpense] = useState({ ...expense });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveExpense = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/expense/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({
        _id: editedExpense._id,
        expenseName: editedExpense.expenseName,
        amount: editedExpense.amount,
        category: editedExpense.category,
        date: editedExpense.date,
      }),
    });
      
  
      if (!response.ok) { console.log("error",response);  throw new Error('Failed to update expense');  }
  
      const result = await response.json();
      alert('Expense updated successfully!');
      console.log("Updated Expense:", result.expense);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating expense:', error);
    }
  };
  const onDelete= async()=>{
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/expense/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({
        _id: expense._id,
      }),
    });
      
  
      if (!response.ok) { console.log("error",response);  throw new Error('Failed to update expense');  }
  
      const result = await response.json();
      alert('Expense deleted successfully!');
      window.location.reload();
      console.log("Updated Expense:", result.msg);
     
    } catch (error) {
      console.error('Error updating expense:', error);
    }

  }
  

  return (
    <tr key={expense._id} className="hover:bg-gray-50">
      <td className="border p-2 text-center">
        <input
          type="text"
          name="expenseName"
          value={editedExpense.expenseName}
          onChange={handleChange}
          readOnly={!isEditing}
          className={`w-full p-1 rounded ${isEditing ? 'bg-gray-100' : 'bg-white'} border`}
        />
      </td>
      <td className="border p-2 text-center">
        <input
          type="number"
          name="amount"
          value={editedExpense.amount}
          onChange={handleChange}
          readOnly={!isEditing}
          className={`w-full p-1 rounded ${isEditing ? 'bg-gray-100' : 'bg-white'} border`}
        />
      </td>
      <td className="border p-2 text-center">
        <input
          type="text"
          name="category"
          value={editedExpense.category}
          onChange={handleChange}
          readOnly={!isEditing}
          className={`w-full p-1 rounded ${isEditing ? 'bg-gray-100' : 'bg-white'} border`}
        />
      </td>
      <td className="border p-2 text-center">
        <input
          type="text"
          name="date"
          value={new Date(editedExpense.date).toLocaleDateString()}
          onChange={handleChange}
          readOnly={!isEditing}
          className={`w-full p-1 rounded ${isEditing ? 'bg-gray-100' : 'bg-white'} border`}
        />
      </td>
      <td className="border p-2 text-center">
        {isEditing ? (
          <button
            onClick={handleSaveExpense}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEditToggle}
            className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(expense._id)}
          className="bg-red-500 text-white px-3 py-1 ml-2 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Individual;
