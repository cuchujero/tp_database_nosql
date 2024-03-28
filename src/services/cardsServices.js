// const bd = require('../database/models'); 
// const {sequelize} = require('../database/models'); 
// const moment = require('moment');
// const { Op } = require('sequelize');

// const today = moment(); 

// const services = {

//     getCards: (cardId, reqQuery) => {

//         if (reqQuery.purchase){
//            return sequelize.query(`
//             SELECT 
//                 c.id,
//                 c.number,
//                 c.cardHolderNameInCard,
//                 COUNT(p.id) AS purchaseCount
//             FROM 
//                 Card c
//             LEFT JOIN 
//                 Purchase p ON c.id = p.Card_id
//             GROUP BY 
//                 c.id
//             ORDER BY 
//                 purchaseCount DESC
//             LIMIT 
//                 ${reqQuery.quantity};
//             `, {
//             type: sequelize.QueryTypes.SELECT
//             });
//         }

//         const nextDays = reqQuery.days? moment().add(reqQuery.days, 'days') : moment().add(90, 'days');
//         return cardId? bd.Card.findByPk(promotionId) : bd.Card.findAll({where: {expirationDate: { [Op.between]: [today, nextDays]}}});
//     },
    
//     createCard: async (cardData) => {

//         return {code: 200, message: 'card created'};
//     },

//     updateCard: async (cardData) => {

//         let updateCard = {};

//         if (!cardData.code){
//             return {code: 400, message: 'card code missing'};
//         }

//         if (cardData.cardTitle) {
//             updateCard.cardTitle = cardData.cardTitle;
//         }

//         if (cardData.nameStore) {
//             updateCard.nameStore = cardData.nameStore;
//         }

//         if (cardData.cuilStore) {
//             updateCard.cuilStore = cardData.cuilStore;
//         }

//         if (cardData.validityStartDate) {
//             updateCard.validityStartDate = cardData.validityStartDate;
//         }

//         if (cardData.validityEndDate) {
//             updateCard.validityEndDate = cardData.validityEndDate;
//         }

//         if (cardData.comments) {
//             updateCard.comments = cardData.comments;
//         }

//         if (cardData.Bank_id) {
//             updateCard.Bank_id = cardData.Bank_id;
//         }

//         if (cardData.type) {
//             updateCard.type = cardData.type;
//         }

//         if (cardData.numberOfQuotas) {
//             updateCard.numberOfQuotas = cardData.numberOfQuotas;
//         }

//         if (cardData.interest) {
//             updateCard.interest = cardData.interest;
//         }

//         if (cardData.discountPercentage) {
//             updateCard.discountPercentage = cardData.discountPercentage;
//         }

//         if (cardData.priceCap) {
//             updateCard.priceCap = cardData.priceCap;
//         }

//         if (cardData.onlyCash) {
//             updateCard.onlyCash = cardData.onlyCash;
//         }

//         if (cardData.cardEnable) {
//             updateCard.cardEnable = cardData.cardEnable;
//         }
    
    
//         await bd.Card.update(updateCard, { where: { code: cardData.code } });


//         return {code: 200, message: 'card updated'};
//     },

//     deleteCard: async (cardData) => {
        
//         await bd.Card.destroy(
//             {where: { id: cardData.id }}
//         );

//         return {code:200, message: 'card deleted'};
//     }
      
// }

// module.exports = services;