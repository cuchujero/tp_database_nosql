// const bd = require('../database/models'); 
// const { sequelize } = require('../database/models'); 
// const { Op } = require('sequelize');

// const services = {

//     getPromotions: (promotionId, reqQuery) => {

//         if (reqQuery.max){
//            return bd.Promotion.findAll({
//                 attributes: [
//                   'id', 'code', 'promotionTitle', 'nameStore', 'cuilStore', 'validityStartDate', 'validityEndDate', 'comments',
//                   'Bank_id', 'type', 'numberOfQuotas', 'interest', 'discountPercentage', 'priceCap', 'onlyCash', 'promotionEnable',
//                   [sequelize.literal('(SELECT COUNT(*) FROM Purchase WHERE Promotion_id = Promotion.id)'), 'purchaseCount']
//                 ],
//                 order: [[sequelize.literal('purchaseCount'), 'DESC']],
//                 limit: parseInt(reqQuery.max),
//                 include: [{
//                   model: bd.Purchase,
//                   as: 'purchases'
//                 }]
//               })
//         }

//         if ((reqQuery.nameStore) && (reqQuery.validityEndDate)){
//             return promotionId? 
//             bd.Promotion.findByPk(promotionId,
//             {
//                 where: {
//                   promotionEnable: true,
//                   nameStore: reqQuery.nameStore,
//                   [Op.and]: [
//                     { validityStartDate: { [Op.between]: [reqQuery.validityStartDate, reqQuery.validityEndDate] } },
//                     { validityEndDate: { [Op.between]: [reqQuery.validityStartDate, reqQuery.validityEndDate] } }
//                   ]
//                 }
//             })
//             : bd.Promotion.findAll({
//                 where: {
//                   promotionEnable: true,
//                   nameStore: reqQuery.nameStore,
//                   [Op.and]: [
//                     { validityStartDate: { [Op.between]: [reqQuery.validityStartDate, reqQuery.validityEndDate] } },
//                     { validityEndDate: { [Op.between]: [reqQuery.validityStartDate, reqQuery.validityEndDate] } }
//                   ]
//                 }
//             })
//         }

//         if  (reqQuery.nameStore){
//             return promotionId? bd.Promotion.findByPk(promotionId, {where: {promotionEnable: true, nameStore: reqQuery.nameStore, }}) 
//             : bd.Promotion.findAll({where: {promotionEnable: true, nameStore: reqQuery.nameStore}});
//         }

//         return promotionId? bd.Promotion.findByPk(promotionId, {where: {promotionEnable: true}}) : bd.Promotion.findAll({where: {promotionEnable: true}});
//     },
    
//     createPromotion: async (promotionData) => {

//         await bd.Promotion.create({
//             code: promotionData.code,
//             promotionTitle: promotionData.promotionTitle,
//             nameStore: promotionData.nameStore,
//             cuilStore:  promotionData.cuilStore,
//             validityStartDate:  promotionData.validityStartDate,
//             validityEndDate: promotionData.validityEndDate,
//             comments:  promotionData.comments,
//             Bank_id:  promotionData.Bank_id,
//             type:  promotionData.type,
//             numberOfQuotas:  promotionData.numberOfQuotas? promotionData.numberOfQuotas : null,
//             interest:  promotionData.interest? promotionData.interest : null,
//             discountPercentage: promotionData.discountPercentage? promotionData.discountPercentage : null,
//             priceCap:  promotionData.priceCap? promotionData.priceCap : null,
//             onlyCash:  promotionData.onlyCash? promotionData.onlyCash : null,
//             promotionEnable:  promotionData.promotionEnable
//         });

//         return {code: 200, message: 'promotion created'};
//     },

//     updatePromotion: async (promotionData) => {

//         let updatePromotion = {};

//         if (!promotionData.code){
//             return {code: 400, message: 'promotion code missing'};
//         }

//         if (promotionData.promotionTitle) {
//             updatePromotion.promotionTitle = promotionData.promotionTitle;
//         }

//         if (promotionData.nameStore) {
//             updatePromotion.nameStore = promotionData.nameStore;
//         }

//         if (promotionData.cuilStore) {
//             updatePromotion.cuilStore = promotionData.cuilStore;
//         }

//         if (promotionData.validityStartDate) {
//             updatePromotion.validityStartDate = promotionData.validityStartDate;
//         }

//         if (promotionData.validityEndDate) {
//             updatePromotion.validityEndDate = promotionData.validityEndDate;
//         }

//         if (promotionData.comments) {
//             updatePromotion.comments = promotionData.comments;
//         }

//         if (promotionData.Bank_id) {
//             updatePromotion.Bank_id = promotionData.Bank_id;
//         }

//         if (promotionData.type) {
//             updatePromotion.type = promotionData.type;
//         }

//         if (promotionData.numberOfQuotas) {
//             updatePromotion.numberOfQuotas = promotionData.numberOfQuotas;
//         }

//         if (promotionData.interest) {
//             updatePromotion.interest = promotionData.interest;
//         }

//         if (promotionData.discountPercentage) {
//             updatePromotion.discountPercentage = promotionData.discountPercentage;
//         }

//         if (promotionData.priceCap) {
//             updatePromotion.priceCap = promotionData.priceCap;
//         }

//         if (promotionData.onlyCash) {
//             updatePromotion.onlyCash = promotionData.onlyCash;
//         }

//         if (promotionData.promotionEnable) {
//             updatePromotion.promotionEnable = promotionData.promotionEnable;
//         }
    
    
//         await bd.Promotion.update(updatePromotion, { where: { code: promotionData.code } });


//         return {code: 200, message: 'promotion updated'};
//     },

//     deletePromotion: async (promotionData) => {
//         await bd.Promotion.update({promotionEnable: false},{where: {code: promotionData.code }});
//         return {code:200, message: 'promotion deleted'};
//     }
      
// }

// module.exports = services;