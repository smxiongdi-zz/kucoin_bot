const mongoose = require("mongoose");

const coinSchema = mongoose.Schema({
    coin_ticker: String,
    // high/low in ETH
    high: Number,
    low: Number,
    // price vars in ETH
    lastPrice: Number,
    lastBoughtAtPrice: Number,
    // price record - {price: ETH, time: Date}
    price_record: [],
});

module.exports = mongoose.model("Coin", coinSchema, "eth_coins");
