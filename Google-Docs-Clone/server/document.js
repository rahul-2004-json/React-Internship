const { Schema, model } = require("mongoose");

const DocumentSchema = new Schema({
  _id: String,
  data: Object,
});

const document = model("Document", DocumentSchema);
module.exports = document;
