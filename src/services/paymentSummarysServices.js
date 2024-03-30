const paymentSummary = require('../database/models/paymentSummary');

const services = {

    getPaymentSummarys: (paymentSummaryId, reqQuery) => {

        if (reqQuery.store){ return paymentSummary.aggregate([
                {
                    $match: { month: reqQuery.month }
                },
                {
                    $lookup: {
                        from: 'purchases',
                        localField: '_id',
                        foreignField: 'paymentSummary_id',
                        as: 'purchases'
                    }
                },
                {
                    $group: {
                        _id: '$store',
                        cuitStore: { $first: '$cuitStore' },
                        totalPriceSum: { $sum: '$purchases.totalPrice' }
                    }
                },
                {
                    $sort: { totalPriceSum: -1 }
                },
                {
                    $limit: parseInt(reqQuery.quantity)
                }
            ]);
        }

        const query = {};
        if (reqQuery.month) {
            query.month = reqQuery.month;
            query.year = '2024';
        }

        if (paymentSummaryId) {
            query._id = paymentSummaryId;
        }

        return paymentSummary.find(query).populate('purchases');
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