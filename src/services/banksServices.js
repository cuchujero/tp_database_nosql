const Bank = require('../database/models/Bank');

const services = {

    getBanks: async () => {
        try {
            const banks = await Bank.find({});
            console.log('Number of banks retrieved:', banks.length);
            return banks;
        } catch (error) {
            console.error('Error fetching banks:', error);
            throw error; // Rethrow the error to propagate it upwards
        }
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