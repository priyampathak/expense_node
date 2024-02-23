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

    getCard: async (req, res)=>{
        try{
            const userId = req.params.userid;
            const card = await Card.find({ user_id:userId });
            if(!card) {
                return res.status(404).json({ message: 'card not found'});
            }
            res.json(card);
        }
        catch (error){
            console.error(error);
            res.status(500).json({ message: 'Internal server Error'})
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
};

module.exports = cardController;