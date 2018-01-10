const KCBalance = require("../api/kucoin/balance.js");
const CoinList = require("../coins/coin_list.js");

const db = require("../db/connect/eth_coins_connect.js");

KCBalance().then(
    response => {
        console.log(response);
    },
    error => {
        // alert
    }
);
