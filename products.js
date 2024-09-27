const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  roll_no: Number,
  Branch: String,
  Course: String,
});
module.exports = mongoose.model("products", productSchema);
