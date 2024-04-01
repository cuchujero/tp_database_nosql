const paymentSummary = require('../database/models/paymentSummary');
const mongoose = require('mongoose');


const services = {

    getPaymentSummarys: (paymentSummaryId, reqQuery) => {
        const { Types: { ObjectId } } = mongoose;

        const pipeline = [];
        
        if (paymentSummaryId) {
            pipeline.push(
                {
                    $match: { _id: new ObjectId(paymentSummaryId) }
                },
                {
                    $lookup: {
                        from: 'Purchase',
                        localField: '_id',
                        foreignField: 'paymentSummary_id',
                        as: 'purchases'
                    }
                },
                {
                    $lookup: {
                        from: 'Quota',
                        localField: 'purchases._id',
                        foreignField: 'purchaseId',
                        as: 'quotas'
                    }
                }
            );
        } else if (reqQuery.store) {
            pipeline.push(
                {
                    $match: { month: reqQuery.month }
                },
                {
                    $lookup: {
                        from: 'Purchase',
                        localField: '_id',
                        foreignField: 'paymentSummary_id',
                        as: 'purchases'
                    }
                },
                {
                    $unwind: '$purchases' 
                },
                {
                    $lookup: {
                        from: 'Quota',
                        localField: 'purchases._id',
                        foreignField: 'purchaseId',
                        as: 'quotas'
                    }
                },
                {
                    $group: {
                        _id: '$purchases.store',
                        cuitStore: { $first: '$purchases.cuitStore' },
                        totalPriceSum: { $sum: '$totalPrice' }
                    }
                },
                {
                    $sort: { totalPriceSum: -1 }
                },
                {
                    $limit: parseInt(reqQuery.quantity)
                },
                {
                    $project: {
                        _id: 0, 
                        store: '$_id', 
                        cuitStore: 1,
                        totalPriceSum: 1 
                    }
                }
            );
        } else if (reqQuery.month) {
            pipeline.push(
                {
                    $match: { month: reqQuery.month }
                },
                {
                    $lookup: {
                        from: 'Purchase',
                        localField: '_id',
                        foreignField: 'paymentSummary_id',
                        as: 'purchases'
                    }
                },
                {
                    $lookup: {
                        from: 'Quota',
                        localField: 'purchases._id',
                        foreignField: 'purchaseId',
                        as: 'quotas'
                    }
                }
            );
        } else {
            pipeline.push(
                {
                    $lookup: {
                        from: 'Purchase',
                        localField: '_id',
                        foreignField: 'paymentSummary_id',
                        as: 'purchases'
                    }
                },
                {
                    $lookup: {
                        from: 'Quota',
                        localField: 'purchases._id',
                        foreignField: 'purchaseId',
                        as: 'quotas'
                    }
                }
            );
        }
        
        const paymentSummaryReturn = paymentSummary.aggregate(pipeline);
        return paymentSummaryReturn;
        
    },
    
    createPaymentSummary: async (paymentSummaryData) => {
    },

    updatePaymentSummary: async (paymentSummaryData) => {
    },

    deletePaymentSummary: async (paymentSummaryData) => {
        
        await bd.paymentSummary.destroy(
            {where: { id: paymentSummaryData.id }}
        );

        return {code:200, message: 'paymentSummary deleted'};
    }
      
}

module.exports = services;