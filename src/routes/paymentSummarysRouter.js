const express = require('express');
const router = express.Router();

const paymentSummarysController = require('../controllers/paymentSummarysController');

router.get('/:id?', paymentSummarysController.getPaymentSummarys);
router.post('/',  paymentSummarysController.createPaymentSummary);
router.put('/',  paymentSummarysController.updatePaymentSummary);
router.delete('/', paymentSummarysController.deletePaymentSummary);

module.exports = router;