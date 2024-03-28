const purchasesServices = require('../services/purchasesServices'); 

const controller = {
	getPurchases: async (req, res)=> {
		res.json(await purchasesServices.getPurchases(req.params.id));
	},
	createPurchase: async (req, res)=> {
		res.json(await purchasesServices.createPurchase(req.body));
	},
	updatePurchase: async (req, res)=> {
		res.json(await purchasesServices.updatePurchase(req.body));
	},
	deletePurchase: async (req, res)=> {
		res.json(await purchasesServices.deletePurchase(req.body));
	},
	
};

module.exports = controller;