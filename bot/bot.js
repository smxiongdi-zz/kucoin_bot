const CoinList = require("../coins/coin_list.js");
const KCBalance = require("../api/kucoin/balance.js");
const KCTicker = require("../api/kucoin/ticker.js");


CoinList.map((x) => {

})

const buyCoins = (coin) => {
    // api here
    let kucoin_api = new KuCoin();
    let can_spend = 0;
    let myBalance = Balance.find({balance_ticker: "ETH"});
    myBalance.then((x, err) => {
        can_spend = x[0].amt * .01;
        console.log("Spend AMT: " + can_spend);
        console.log("Units    : " + can_spend/coin.lastPrice)

        kucoin_api.createOrder({
            pair: coin.coin_ticker + "-" + x[0].balance_ticker,
            amount: can_spend/coin.lastPrice,
            price: coin.lastPrice,
            type: "BUY"
        }).then((x, error) => {
            // mark as bought / order in progress
            coin.coins_bought = true;
            coin.save();

            createBalance(coin.coin_ticker, can_spend/coin.lastPrice);
        })

    })



    console.log("Buy " + coin.coin_ticker + " @ " + coin.lastPrice);
}

const sellCoins = (coin) => {
    // api here

    console.log("Sell " + coin.coin_ticker + " @ " + coin.lastPrice);
    kucoin_api.createOrder({
        pair: coin.coin_ticker + "-" + x[0].balance_ticker,
        amount: can_spend/coin.lastPrice,
        price: coin.lastPrice,
        type: "SELL"
    }).then((x, error) => {
        // mark as bought / order in progress
        coin.coins_bought = false;
        coin.save();
    })

}

