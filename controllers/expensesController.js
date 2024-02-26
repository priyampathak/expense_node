const Expense = require('../models/expenses')

const expenseController = {
    getExpenses:  async (req, res)=>{
        try{
            const cardId = req.params.cardid;
            const expenses = await Expense.find({ card_id: cardId })
            if(!expenses || expenses.length === 0){
                return res.status(404).json({ message: "No expenses to show"})
            }
            res.json(expenses)
        }   catch(error){
            console.log(error)
            res.status(500).json({ message: 'Internal server error'})
        }
        
    },

    createExpense: async(req, res)=>{
        try{
            const { expense_type, expense_amount, date, card_id, user_id } = req.body;

            const expense = new Expense({
                expense_type,
                expense_amount,
                date,
                card_id,
                user_id
            });

            const savedExpense = await expense.save()
            res.status(201).json(savedExpense)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"})
        }
    },
}

module.exports = expenseController;