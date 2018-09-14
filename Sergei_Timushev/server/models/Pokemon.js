const mongoose = require('mongoose');

const Pokemon = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  id: {
    type: Number,
  },
  users: {
    type: Array
  }
});

module.exports = mongoose.model('Pokemon', Pokemon); 