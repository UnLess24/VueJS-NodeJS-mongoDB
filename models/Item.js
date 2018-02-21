const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Определение коллекции и схемы для Items
const Item = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
}, {
  collection: 'items'
});

module.exports = mongoose.model('Item', Item);
