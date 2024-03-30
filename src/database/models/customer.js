const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  completeName: { type: String, required: true },
  dni: { type: String, required: true },
  cuil: { type: String },
  address: { type: String, required: true },
  telephone: { type: String, required: true },
  entryDate: { type: Date, required: true },
 // purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Purchase' }], 
 // banks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bank' }] 
}, {collection : 'Customer', timestamps: false });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
