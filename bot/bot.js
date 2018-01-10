const KuCoin = require("kucoin-api");
const eth_db = require("../db/connect/kucoin_connect.js");
const ETHCoin = require("../db/models/eth_coin.js");
const Balance = require("../db/models/balance.js");

const CoinList = require("../coins/coin_list.js");

const storeBalance = require("../interface/balance.js");
const getTickerInfo = require("../interface/ticker.js");

// make the db entry
// maybe put this directly in cron later
storeBalance();
getTickerInfo();

CoinList.map((x) => {
    let myCoin = ETHCoin.find({coin_ticker: x.coin});

    myCoin.then((y, error) => {
        !y[0].order_in_progress && !y[0].coins_bought ? analysePrice(y[0]) : '';
    })

})

const analysePrice = (coin) => {
    // determine if the price is high enough to sell or low enough to buy

    let high_low_diff = coin.high - coin.low;
    let buy_under = coin.low + (.4*high_low_diff);
    let sell_over = coin.high - (.4*high_low_diff);

    /*
    console.log("COIN     : " + coin.coin_ticker);
    console.log("BUY UNDER: " + buy_under);
    console.log("SELL OVER: " + sell_over);
    console.log("OIP      : " + coin.order_in_progress);
    console.log("CB       : " + coin.coins_bought);
    */

    coin.lastPrice >= sell_over ?
        sellCoins(coin) :
        ''

    coin.lastPrice <= buy_under ?
        buyCoins(coin) :
        ''

}

const buyCoins = (coin) => {
    // api here
    let kucoin_api = new KuCoin();
    let can_spend = 0;
    let myBalance = Balance.find({balance_ticker: "ETH"});
    myBalance.then((x, err) => {
        can_spend = x[0].amt * .05;
    })

    // to do tomorrow
    // add pairings to coin model
    // add order learning to outbid others

    /*
    kc.createOrder({
        pair: 
    })
        */

    console.log("Buy " + coin.coin_ticker + " @ " + coin.lastPrice);
}

const sellCoins = (coin) => {
    // api here

    console.log("Sell " + coin.coin_ticker + " @ " + coin.lastPrice);
}
