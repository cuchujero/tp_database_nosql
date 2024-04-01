const Card = require('../database/models/card');
const moment = require('moment');

const today = moment(); 

const services = {

    getCards: (cardId, reqQuery) => {
        if (reqQuery.purchase) {
            return Card.aggregate([
                {
                    $lookup: {
                        from: 'Purchase',
                        localField: '_id',
                        foreignField: 'Card_id',
                        as: 'purchases'
                    }
                },
                {
                    $group: {
                        _id: '$_id',
                        number: { $first: '$number' },
                        cardHolderNameInCard: { $first: '$cardHolderNameInCard' },
                        purchaseCount: { $sum: { $size: '$purchases' } }
                    }
                },
                {
                    $sort: { purchaseCount: -1 }
                },
                {
                    $limit: parseInt(reqQuery.quantity)
                }
            ]);
        }

        const nextDays = reqQuery.days ? moment().add(reqQuery.days, 'days') : moment().add(90, 'days');
        if (cardId) {
            return Card.findById(cardId);
        } else {
            return Card.find({ expirationDate: { $gte: today, $lte: nextDays } });
        }
    },
    
    createCard: async (cardData) => {

        return {code: 200, message: 'card created'};
    },

    updateCard: async (cardData) => {


        return {code: 200, message: 'card updated'};
    },

    deleteCard: async (cardData) => {
        
        await bd.Card.destroy(
            {where: { id: cardData.id }}
        );

        return {code:200, message: 'card deleted'};
    }
      
}

module.exports = services;