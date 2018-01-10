const CMC = require("../api/cmc/cmc.js");
const KCBalance = require("../api/kucoin/balance.js");
const KCOrderBooks = require("../api/kucoin/orderbooks.js");
const PairList = require("../coins/pair_list.js");

const db = require("../db/connect/eth_coins_connect.js");

//PairList.map((x) => {
KCOrderBooks("DBC-ETH").then(
    response => {
        console.log(response);
    },
    error => {
        // alert via email
    }
)
//})
