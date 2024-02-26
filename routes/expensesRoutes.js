const express = require('express')
const router = express.Router();
const expenseController = require('../controllers/expensesController')

router.get('/:cardid', expenseController.getExpenses)
router.post('/', expenseController.createExpense)

module.exports = router