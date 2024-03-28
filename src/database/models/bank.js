const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Default ObjectId field for _id
  id: { type: Number, required: true }, // Custom id field of type Number
  name: { type: String, required: true },
  address: { type: String, required: true },
  cuit: { type: String, required: true },
  telephone: { type: String, required: true },
  // promotions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Promotion' }],
  // cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
  //customers: [{name: { type: String, required: true }}]
}, { timestamps: false });

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;
