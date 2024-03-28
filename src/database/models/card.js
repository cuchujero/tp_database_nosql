const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  number: { type: String, required: true },
  ccv: { type: String, required: true },
  cardHolderNameInCard: { type: String, required: true },
  since: { type: Date, required: true },
  expirationDate: { type: Date, required: true },
  Bank_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Bank', required: true }, 
  Customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true }, 
//  purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Purchase' }] 
}, { timestamps: false });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
