const mongoose = require("mongoose");

const balanceSchema = mongoose.Schema({
    balance_ticker: String,
    amt: Number,
});

module.exports = mongoose.model("balance", balanceSchema, "balance");
