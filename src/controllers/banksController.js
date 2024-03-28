const banksServices = require('../services/banksServices'); 

const controller = {
	getBanks: async (req, res)=> {
		res.json(await banksServices.getBanks(req.params.id, req.query));
	},
	createBank: async (req, res)=> {
		res.json(await banksServices.createBank(req.body));
	},
	updateBank: async (req, res)=> {
		res.json(await banksServices.updateBank(req.body));
	},
	deleteBank: async (req, res)=> {
		res.json(await banksServices.deleteBank(req.body));
	},
	
};

module.exports = controller;