var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  DocSchema = new Schema({
    ownerId: String,
    title: {
      type: String,
      unique: true,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    access: {
      type: String,
      required: true
    },
    dateCreated: {
      type: Date,
      default: Date.now
    },
    lastModified: {
      type: Date,
      default: Date.now
    }
  });

module.exports = mongoose.model('Documents', DocSchema);
