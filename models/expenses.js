const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    expense_type: String,
    expense_amount: String,
    date: String,
    card_id: String,
    user_id: String,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense