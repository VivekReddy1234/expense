const Expense= require("../models/expense.js");

const deleteExpense = async (req, res) => {
    try {
        const expenseId = req.body._id; // <-- get it from request body
        console.log(expenseId);
        const response = await Expense.deleteOne({ _id: expenseId });

        if (response.deletedCount > 0) {
            return res.status(200).json({ msg: "Deleted Successfully" });
        }
        res.status(404).json({ msg: "Expense not found" });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};


module.exports={
    deleteExpense,
}