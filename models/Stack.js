const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StackSchema = new Schema({
  title: String,
  cards: [
    {
      prompt: String,
      answer: String
    }
  ]
});

module.exports = Stack = mongoose.model("stack", StackSchema);
