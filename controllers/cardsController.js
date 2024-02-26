const { cookies } = require('next/headers');
const Card = require('../models/cards')

const cardController = {
    getCards: async (req, res)=>{
        try{
            const cards = await Card.find()
            res.json(cards)
        } catch (error){
            console.error(error);
            res.status(500).json({ message: "Internal server error"})
        }
    },

    getCard: async (req, res) => {
        try {
            const userId = req.params.userid;
            const cards = await Card.find({ user_id: userId });
            
            // Check if any cards are found
            if (!cards || cards.length === 0) {
                return res.status(404).json({ message: 'No cards found for this user' });
            }
    
            res.json(cards);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server Error' });
        }
    },

    deleteCard: async (req, res)=>{
        try{
            const cardId = req.params.id;
            const deletecard = await Card.findByIdAndDelete(cardId);
            if(!deletecard){
                return res.status(404).json({ message: 'Card not found' });
            }
            res.json({ message: 'Card deleted successfully' })
        }catch(error){
            console.error(error);
            res.status(500).json({ message: 'Internal server Error' });
        }
    },

    createCard: async (req, res)=>{
        try {
            const { card_no, card_type, expiry, balance_init, balance_curr, user_id } = req.body
            const newCard = new Card({
                card_no,
                card_type,
                expiry,
                balance_init,
                balance_curr,
                user_id
            });

            const savedCard = await newCard.save();
            res.status(201).json(savedCard);
        } catch(error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error"})
        }
    }
};

module.exports = cardController;