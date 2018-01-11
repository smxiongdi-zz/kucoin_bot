const mongoose = require("mongoose");

const coinSchema = mongoose.Schema({
    ticker: String,
    bought_price: Number,
});

module.exports = mongoose.model("Coin", coinSchema, "eth_coins");
