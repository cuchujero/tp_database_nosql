const Bank = require('../database/models/bank');

const services = {

    getBanks: async () => {
        return Bank.aggregate([
            {
                $lookup: {
                    from: 'bank_customers', 
                    localField: '_id',
                    foreignField: 'Bank_id',
                    as: 'customers'
                }
            },
            {
                $group: {
                    _id: '$_id',
                    bank_name: { $first: '$name' },
                    bank_cuit: { $first: '$cuit' },
                    bank_address: { $first: '$address' },
                    bank_telephone: { $first: '$telephone' },
                    number_customers: { $sum: { $size: '$customers' } }
                }
            }
        ]);
    },
    
    createBank: async (bankData) => {

        return {code: 200, message: 'bank created'};
    },

    updateBank: async (bankData) => {

    },

    deleteBank: async (bankData) => {
        
        await bd.Bank.destroy(
            {where: { id: bankData.id }}
        );

        return {code:200, message: 'bank deleted'};
    }
      
}

module.exports = services;