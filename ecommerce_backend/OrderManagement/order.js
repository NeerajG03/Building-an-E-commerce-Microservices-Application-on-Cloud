const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  oid: {
    type: String,
    required: true,
  },
  otime: {
    type: String,
    required: true,
  },
  ototal: {
    type: int,
    required: true,
  },
  ostatus: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
