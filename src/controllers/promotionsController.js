const promotionsServices = require('../services/promotionsServices'); 

const controller = {
	getPromotions: async (req, res)=> {
		res.json(await promotionsServices.getPromotions(req.params.id, req.query));
	},
	createPromotion: async (req, res)=> {
		res.json(await promotionsServices.createPromotion(req.body));
	},
	updatePromotion: async (req, res)=> {
		res.json(await promotionsServices.updatePromotion(req.body));
	},
	deletePromotion: async (req, res)=> {
		res.json(await promotionsServices.deletePromotion(req.body));
	},
	
};

module.exports = controller;