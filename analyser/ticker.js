const KCTicker = require("../api/kucoin/ticker.js");
const PairList = require("../coins/pair_list.js");

const db = require("../db/connect/eth_coins_connect.js");

PairList.map((x) => {
    KCTicker(x.pair).then(
        response => {
            console.log(response);
        },
        error => {
            // alert via email
        }
    )
})
