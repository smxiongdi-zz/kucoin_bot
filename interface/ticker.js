const eth_db = require("../db/connect/eth_coins_connect.js");
const ETHCoin = require("../db/models/eth_coin.js");
const KCTicker = require("../api/kucoin/ticker.js");
const PairList = require("../coins/pair_list.js");

function getTickerInfo() {
    // wipe existing data
    /*
    ETHCoin.remove({}, (error) => {
        console.log("Existing collection removed");
    });
    */
    PairList.map((x) => {
        KCTicker(x.pair).then(
            response => {
                // enter new data
                let myCoin = ETHCoin.find({coin_ticker: response.data.coinType});
                myCoin.then((y, err) => {
                    y.length > 0 ?
                        updateTicker(y[0], response) :
                        updateTicker(new ETHCoin({}), response)
                })
            },
            error => {
                // alert via email
            }
        )
    })
}

function updateTicker(myCoin, response) {
    myCoin.coin_ticker = response.data.coinType;
    myCoin.high = response.data.high;
    myCoin.low = response.data.low;
    myCoin.lastPrice = response.data.lastDealPrice;

    myCoin.save();
}

module.exports = getTickerInfo;
