const mongoose = require('mongoose');

const quotaSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  price: { type: mongoose.Decimal128, required: true },
  month: { type: String, required: true },
  year: { type: String, required: true },
  Purchase_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Purchase', required: true },
  paymentSummary_id: { type: mongoose.Schema.Types.ObjectId, ref: 'paymentSummary', required: true }
}, {collection : 'Quota', timestamps: false });

const Quota = mongoose.model('Quota', quotaSchema);

module.exports = Quota;
