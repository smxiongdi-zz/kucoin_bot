const sellCoins = (coin) => {

    console.log("Sell " + coin.coin_ticker + " @ " + coin.lastPrice);

    kucoin_api.createOrder({
        pair: coin.coin_ticker + "-" + x[0].balance_ticker,
        amount: can_spend/coin.lastPrice,
        price: coin.lastPrice,
        type: "SELL"
    }).then((x, error) => {
        // mark as bought / order in progress
    })

}

module.exports = sellCoins;
