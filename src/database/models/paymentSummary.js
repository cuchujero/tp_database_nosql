const mongoose = require('mongoose');

const paymentSummarySchema = new mongoose.Schema({
  code: { type: String, required: true },
  month: { type: String, required: true },
  year: { type: String, required: true },
  firstExpiration: { type: Date, required: true },
  secondExpiration: { type: Date, required: true },
  surchargePercentaje: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
 // quotas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quota' }],
 // purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Purchase' }] 
}, { timestamps: false });

const PaymentSummary = mongoose.model('PaymentSummary', paymentSummarySchema);

module.exports = PaymentSummary;
