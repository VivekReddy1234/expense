const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    expenseName: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to the User model
        required: true,
    }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
