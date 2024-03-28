const express = require('express');
const router = express.Router();

const banksController = require('../controllers/banksController');

router.get('/:id?', banksController.getBanks);
router.post('/',  banksController.createBank);
router.put('/',  banksController.updateBank);
router.delete('/', banksController.deleteBank);

module.exports = router;