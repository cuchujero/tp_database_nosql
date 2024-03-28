const express = require('express');
const router = express.Router();

const cardsController = require('../controllers/cardsController');

router.get('/:id?', cardsController.getCards);
router.post('/',  cardsController.createCard);
router.put('/',  cardsController.updateCard);
router.delete('/', cardsController.deleteCard);

module.exports = router;