const KCEth = require("../api/kucoin/eth_rates.js");
const CoinList = require("../coins/coin_list.js");

const db = require("../db/connect/eth_coins_connect.js");

KCEth(["ETH"]).then(
    response => {
        console.log(response.data.rates.ETH.USD);
    },
    error => {
        // alert
    }
);
