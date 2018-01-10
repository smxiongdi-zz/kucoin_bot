const mongoose = require("mongoose");

const coinSchema = mongoose.Schema({
    coin_ticker: String,
    current_price: Number,
    // lows in ETH
    hour_low: Number,
    30_low: Number,
    5_low: Number,
    1_low: Number,
    // highs in ETH
    hour_high: Number,
    30_high: Number,
    5_high: Number,
    1_high: Number,
    // owned coin details
    amount: Number,
    buy_at_price: Number,
});

module.exports - mongoose.model("Coin", coinSchema, "eth_coins");
