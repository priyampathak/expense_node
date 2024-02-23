const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    card_no: String,
    card_type: String,
    expiry: String,
    balance_init: String,
    balance_curr: String,
    user_id: String
});

const Card = mongoose.model('Card', cardSchema)

module.exports = Card;