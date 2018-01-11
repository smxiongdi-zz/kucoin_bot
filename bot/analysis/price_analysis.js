const KuCoin = require("kucoin-api");
const eth_db = require("../../db/connect/kucoin_connect.js");
const ETHCoin = require("../../db/models/eth_coin.js");
const Balance = require("../../db/models/balance.js");

const CoinList = require("../../coins/coin_list.js");

const storeBalance = require("../../interface/balance.js");
const getTickerInfo = require("../../interface/ticker.js");

// make the db entry
// maybe put this directly in cron later
storeBalance();
getTickerInfo();

