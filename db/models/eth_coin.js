const mongoose = require("mongoose");

const coinSchema = mongoose.Schema({
    coin_ticker: String,
    high: Number,
    low: Number,
    lastPrice: Number,
    lastBoughtAtPrice: Number,
    order_in_progress: {type: Boolean, default: false},
    coins_bought: {type: Boolean, default: false}
});

module.exports = mongoose.model("Coin", coinSchema, "eth_coins");
