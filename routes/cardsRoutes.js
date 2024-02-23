const express = require('express')
const router = express.Router();
const cardController = require('../controllers/cardsController')

router.get('/', cardController.getCards);//all cards
router.get('/:userid', cardController.getCard);//number of cards with user id.
router.delete('/:id', cardController.deleteCard)//delte all cards

module.exports = router