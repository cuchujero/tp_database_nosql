// const bd = require('../database/models'); 

// const services = {

//     getPurchases: (purchaseId) => {
//         return purchaseId? bd.Purchase.findByPk(purchaseId, {include:[{association:'card'},{association:'paymentSummary'}]}) : bd.Purchase.findAll({include:[{association:'purchases'}]});
//     },
    
//     createPurchase: async (purchaseData) => {
//         return {code: 200, message: 'purchase created'};
//     },

//     updatePurchase: async (purchaseData) => {

//         let updatePurchase = {};

//         if (!purchaseData.code){
//             return {code: 400, message: 'purchase code missing'};
//         }

//         if (purchaseData.purchaseTitle) {
//             updatePurchase.purchaseTitle = purchaseData.purchaseTitle;
//         }

//         if (purchaseData.nameStore) {
//             updatePurchase.nameStore = purchaseData.nameStore;
//         }

//         if (purchaseData.cuilStore) {
//             updatePurchase.cuilStore = purchaseData.cuilStore;
//         }

//         if (purchaseData.validityStartDate) {
//             updatePurchase.validityStartDate = purchaseData.validityStartDate;
//         }

//         if (purchaseData.validityEndDate) {
//             updatePurchase.validityEndDate = purchaseData.validityEndDate;
//         }

//         if (purchaseData.comments) {
//             updatePurchase.comments = purchaseData.comments;
//         }

//         if (purchaseData.Bank_id) {
//             updatePurchase.Bank_id = purchaseData.Bank_id;
//         }

//         if (purchaseData.type) {
//             updatePurchase.type = purchaseData.type;
//         }

//         if (purchaseData.numberOfQuotas) {
//             updatePurchase.numberOfQuotas = purchaseData.numberOfQuotas;
//         }

//         if (purchaseData.interest) {
//             updatePurchase.interest = purchaseData.interest;
//         }

//         if (purchaseData.discountPercentage) {
//             updatePurchase.discountPercentage = purchaseData.discountPercentage;
//         }

//         if (purchaseData.priceCap) {
//             updatePurchase.priceCap = purchaseData.priceCap;
//         }

//         if (purchaseData.onlyCash) {
//             updatePurchase.onlyCash = purchaseData.onlyCash;
//         }

//         if (purchaseData.purchaseEnable) {
//             updatePurchase.purchaseEnable = purchaseData.purchaseEnable;
//         }
    
    
//         await bd.Purchase.update(updatePurchase, { where: { code: purchaseData.code } });


//         return {code: 200, message: 'purchase updated'};
//     },

//     deletePurchase: async (purchaseData) => {
        
//         await bd.Purchase.destroy(
//             {where: { id: purchaseData.id }}
//         );

//         return {code:200, message: 'purchase deleted'};
//     }
      
// }

// module.exports = services;