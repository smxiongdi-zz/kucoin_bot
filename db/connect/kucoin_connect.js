const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/kucoin");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error: "));
db.once("open", function() {});

module.exports = db;
