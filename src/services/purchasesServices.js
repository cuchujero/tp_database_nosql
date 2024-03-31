const Purchase = require('../database/models/purchase');

const services = {

    getPurchases: (purchaseId) => {
            if (purchaseId) {
                return Purchase.findById(purchaseId)
                .populate('Card_id')
                .populate('paymentSummary_id')
                .populate('quotas');
            } else {
                return Purchase.find().populate({ path: 'purchases', options: { strictPopulate: false } })
            }
    },
    
    createPurchase: async (purchaseData) => {
        return {code: 200, message: 'purchase created'};
    },

    updatePurchase: async (purchaseData) => {

        return {code: 200, message: 'purchase updated'};
    },

    deletePurchase: async (purchaseData) => {
        
        await bd.Purchase.destroy(
            {where: { id: purchaseData.id }}
        );

        return {code:200, message: 'purchase deleted'};
    }
      
}

module.exports = services;