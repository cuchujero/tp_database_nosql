const mongoose = require('mongoose');
const Purchase = require('./purchase');

const paymentSummarySchema = new mongoose.Schema({
  code: { type: String, required: true },
  month: { type: String, required: true },
  year: { type: String, required: true },
  firstExpiration: { type: Date, required: true },
  secondExpiration: { type: Date, required: true },
  surchargePercentaje: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
 // quotas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quota' }],
 purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Purchase' }] 
}, {collection : 'paymentSummary', timestamps: false });

const paymentSummary = mongoose.model('paymentSummary', paymentSummarySchema);

module.exports = paymentSummary;
