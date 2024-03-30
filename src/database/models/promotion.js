const mongoose = require('mongoose');
const Purchase = require('./purchase');
const Bank = require('./bank');

const promotionSchema = new mongoose.Schema({
  code: { type: String, required: true },
  promotionTitle: { type: String, required: true },
  nameStore: { type: String, required: true },
  cuilStore: { type: String, required: true },
  validityStartDate: { type: Date, required: true },
  validityEndDate: { type: Date, required: true },
  comments: { type: Number, required: false },
  type: { type: String, enum: ['Financing', 'Discount'], required: true },
  numberOfQuotas: { type: Number },
  interest: { type: Number },
  discountPercentage: { type: Number },
  priceCap: { type: Number },
  onlyCash: { type: Boolean },
  promotionEnable: { type: Boolean, required: true },
  Bank_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Bank', required: true }, 
  purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Purchase' }] 
}, {collection : 'Promotion', timestamps: false });

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;
