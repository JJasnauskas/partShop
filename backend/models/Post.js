const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
},{
    collection: 'postss'
});

module.exports = mongoose.model('Post', Post);