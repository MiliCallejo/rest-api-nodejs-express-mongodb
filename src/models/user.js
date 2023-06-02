const moongose = require('mongoose');

const userSchema = moongose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  mail: {
    type: String,
    required: true
  }
})

module.exports = moongose.model('User', userSchema);