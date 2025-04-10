const Expense = require("../models/expense.js");

async function updateExpense(req, res) {
   // Get the expense ID from the URL
   console.log(req.body);
    const {_id,expenseName,amount,category,date} = req.body; // Get updated data from the request body
     const updatedData={
        _id:_id,
        expenseName:expenseName,
        amount: amount,
        category: category,
        date:date,
     };
     console.log(updatedData);

    try {
        const response = await Expense.findByIdAndUpdate(_id, updatedData, { new: true });
        if (!response) return res.status(404).json({ msg: "Expense not found" });
        return res.status(200).json({ msg: "Expense updated successfully", expense: response });
    } catch (error) {
        console.error("Error updating expense:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
}

module.exports = {
    updateExpense
};
