const mongoose = require('mongoose');

const lostAndFoundSchema = new mongoose.Schema({
  trainNo: { type: String, required: true },
  date: { type: Date, required: true },
  itemDescription: { type: String, required: true },
  contactDetails: { type: String, required: true },
});

module.exports = mongoose.model('LostAndFound', lostAndFoundSchema);
