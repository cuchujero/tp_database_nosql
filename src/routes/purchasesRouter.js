const express = require('express');
const router = express.Router();

const purchasesController = require('../controllers/purchasesController');

router.get('/:id?', purchasesController.getPurchases);
router.post('/',  purchasesController.createPurchase);
router.put('/',  purchasesController.updatePurchase);
router.delete('/', purchasesController.deletePurchase);

module.exports = router;