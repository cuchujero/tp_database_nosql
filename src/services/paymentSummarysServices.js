// const bd = require('../database/models'); 
// const { sequelize } = require('../database/models'); 

// const services = {

//     getPaymentSummarys: (paymentSummaryId, reqQuery) => {

//         if (reqQuery.store){
//             return sequelize.query(`
//             SELECT 
//                 p.store,
//                 p.cuitStore,
//                 SUM(ps.totalPrice) AS totalPriceSum
//             FROM 
//                 paymentSummary AS ps
//             INNER JOIN 
//                 Purchase AS p ON ps.id = p.paymentSummary_id
//             WHERE 
//                 ps.month = '${reqQuery.month}'
//             GROUP BY 
//                 p.store
//             ORDER BY 
//                 totalPriceSum DESC
//             LIMIT ${reqQuery.quantity};
//         `, {
//             type: sequelize.QueryTypes.SELECT
//             });
//         }


//         return reqQuery.month?  bd.paymentSummary.findAll({include:[{association:'purchases'}],where:{month: reqQuery.month, year:2024}}) :
//         paymentSummaryId? bd.paymentSummary.findByPk(paymentSummaryId) : bd.paymentSummary.findAll();
//     },
    
//     createPaymentSummary: async (paymentSummaryData) => {
//     },

//     updatePaymentSummary: async (paymentSummaryData) => {
//     },

//     deletePaymentSummary: async (paymentSummaryData) => {
        
//         await bd.paymentSummary.destroy(
//             {where: { id: paymentSummaryData.id }}
//         );

//         return {code:200, message: 'paymentSummary deleted'};
//     }
      
// }

// module.exports = services;