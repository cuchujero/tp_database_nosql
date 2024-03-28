const cardsServices = require('../services/cardsServices'); 

const controller = {
	getCards: async (req, res)=> {
		res.json(await cardsServices.getCards(req.params.id, req.query));
	},
	createCard: async (req, res)=> {
		res.json(await cardsServices.createCard(req.body));
	},
	updateCard: async (req, res)=> {
		res.json(await cardsServices.updateCard(req.body));
	},
	deleteCard: async (req, res)=> {
		res.json(await cardsServices.deleteCard(req.body));
	},
	
};

module.exports = controller;