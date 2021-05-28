const mongoose = require("mongoose");

const collection = "tasks";

const objectSchema = {
  content: { type: String, required: true },
};

const options = {
  timestamps: true,
};

const schema = new mongoose.Schema(objectSchema, options);

const Task = mongoose.model(collection, schema);

module.exports = Task;
