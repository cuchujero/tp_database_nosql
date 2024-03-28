const express = require('express');
const router = express.Router();

const promotionsController = require('../controllers/promotionsController');

router.get('/:id?', promotionsController.getPromotions);
router.post('/',  promotionsController.createPromotion);
router.put('/',  promotionsController.updatePromotion);
router.delete('/', promotionsController.deletePromotion);

module.exports = router;