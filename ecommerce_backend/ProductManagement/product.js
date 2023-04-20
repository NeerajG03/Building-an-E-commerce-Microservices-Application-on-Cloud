const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  pid: {
    type: String,
    required: true,
  },
  pname: {
    type: String,
    required: true,
  },
  pquantity: {
    type: int,
    required: true,
  },
  pprice: {
    type: int,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
