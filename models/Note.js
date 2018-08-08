const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  text: { type: String, required: true },
  Owner: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { _id: false });

const Note = mongoose.model("Article", noteSchema);

module.exports = Note;
