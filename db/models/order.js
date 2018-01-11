const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    order_ticker: String,
    unit_price: Number,
    amt: Number,
    time_made: { type: Date, default: Date.now }
});

module.exports = mongoose.model("order", orderSchema, "eth_orders");
