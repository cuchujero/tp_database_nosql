const Purchase = require('../database/models/purchase');
const mongoose = require('mongoose');

const services = {

    getPurchases: (purchaseId) => {
        const { Types: { ObjectId } } = mongoose;

        const pipeline = [
            {
                $match: { _id: new ObjectId(purchaseId) } 
            },
            {
                $lookup: {
                    from: 'Card',
                    localField: 'Card_id',
                    foreignField: '_id',
                    as: 'Card'
                }
            },
            {
                $lookup: {
                    from: 'paymentSummary',
                    localField: 'paymentSummary_id',
                    foreignField: '_id',
                    as: 'paymentSummary'
                }
            },
            {
                $lookup: {
                    from: 'Promotion',
                    localField: 'Promotion_id',
                    foreignField: '_id',
                    as: 'Promotion'
                }
            },
            {
                $lookup: {
                    from: 'Quota',
                    localField: '_id',
                    foreignField: 'Purchase_id',
                    as: 'quotas'
                }
            },
            {
                $addFields: {
                    Card: { $arrayElemAt: ["$Card", 0] },
                    Promotion: { $arrayElemAt: ["$Promotion", 0] },
                    paymentSummary: { $arrayElemAt: ["$paymentSummary", 0] }
                }
            }
        ];
        
        if (!purchaseId) {
            pipeline.unshift({
                $match: {} 
            });
        }
        
        const purchase = Purchase.aggregate(pipeline);
        
        return purchase;
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