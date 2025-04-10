import React from 'react';
import Individual from './Individual';

const ShowExpense = ({ expenses }) => {
  return (
    <div className="max-w-4xl  p-3 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Expense List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Make Changes</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <Individual expense={expense} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowExpense;
