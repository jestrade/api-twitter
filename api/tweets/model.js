const mongoose = require('mongoose');

const collection = 'tweets';

const objectSchema = {
  content: { type: String, required: true },
  likes: { type: Number, required: true, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  comments: [
    {
      comment: { type: String },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    },
  ],
};

const options = {
  timestamps: true,
};

const schema = new mongoose.Schema(objectSchema, options);

const Tweet = mongoose.model(collection, schema);

module.exports = Tweet;
