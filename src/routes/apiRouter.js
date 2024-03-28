
const express = require('express');
const router = express.Router();
const banksRouter = require('./banksRouter'); 
// const customersRouter = require('./customersRouter'); 
const cardsRouter = require('./cardsRouter'); 
const purchasesRouter = require('./purchasesRouter'); 
const promotionsRouter = require('./promotionsRouter'); 
// const quotasRouter = require('./quotasRouter'); 
const paymentSummarysRouter = require('./paymentSummarysRouter'); 

router.use('/banks', banksRouter); 
// router.use('/customers', customersRouter); 
router.use('/cards', cardsRouter);
router.use('/purchases', purchasesRouter);  
router.use('/promotions', promotionsRouter);  
// router.use('/quotas', quotasRouter);  
router.use('/paymentSummarys', paymentSummarysRouter);  


module.exports = router;
