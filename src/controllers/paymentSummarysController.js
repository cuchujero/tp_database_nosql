const paymentSummarysServices = require('../services/paymentSummarysServices'); 

const controller = {
	getPaymentSummarys: async (req, res)=> {
		res.json(await paymentSummarysServices.getPaymentSummarys(req.params.id,req.query));
	},
	createPaymentSummary: async (req, res)=> {
		res.json(await paymentSummarysServices.createPaymentSummary(req.body));
	},
	updatePaymentSummary: async (req, res)=> {
		res.json(await paymentSummarysServices.updatePaymentSummary(req.body));
	},
	deletePaymentSummary: async (req, res)=> {
		res.json(await paymentSummarysServices.deletePaymentSummary(req.body));
	},
	
};

module.exports = controller;