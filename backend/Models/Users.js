const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  id: {
    type: Number
  },
  search_result: {
    type: String
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('User', UserSchema)