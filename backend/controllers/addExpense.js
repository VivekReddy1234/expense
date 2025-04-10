const Expense = require("../models/expense.js");

async function addExpense(req, res) {
    if (!req.body) {
        return res.status(401).json({ msg: "No details found" });
    }

    console.log(req.user);
    const { expenseName, amount, category, date } = req.body;
    const { user } = req;

    try {
        const response = await Expense.create({
            expenseName,
            amount,
            category,
            date,
            createdBy: user._id, // Explicitly set the createdBy field
        });

        if (!response) return res.status(401).json({ msg: "Expense not added" });
        return res.status(200).json({ msg: "Expense successfully added" });

    } catch (error) {
        console.error("Error adding expense:", error);
        return res.status(500).json({ msg: "Server error" });
    }
}

module.exports = {
    addExpense,
};
