const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  paymentVoucher: { type: String, required: true },
  store: { type: String, required: true },
  cuitStore: { type: String, required: true },
  amount: { type: Number, required: true },
  finalAmount: { type: Number, required: true },
  type: { type: String, enum: ['singlePayment', 'montlyPayments'], required: true },
  interest: { type: Number },
  numberOfQuotas: { type: Number },
  storeDiscount: { type: Number },
  purchaseDate: { type: Date, required: true },
  paymentSummary_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PaymentSummary', required: true }, 
  Promotion_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Promotion' },
  Card_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Card', required: true } 
}, { timestamps: false });

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;