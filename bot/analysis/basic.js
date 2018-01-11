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

    let action = coin.lastPrice >= sell_over ? "SELL" :
        coin.lastPrice <= buy_under ? "BUY" :
        "NONE"

    return action;

}

module.exports = analysePrice;
