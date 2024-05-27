const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
  title: { type: String },
  description: { type: String },
  filename: { type: String },
  originalname: { type: String },
  nimetype: { type: String },
  size: { type: Number },
  created_at: { type: Date, default: Date.now() },
});

module.exports = model('image', imageSchema);
