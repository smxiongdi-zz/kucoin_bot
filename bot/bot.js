// apis
const CoinList = require("../coins/coin_list.js");
const KCActive = require("../api/kucoin/active.js");
const KCBalance = require("../api/kucoin/balance.js");
const KCTicker = require("../api/kucoin/ticker.js");
const KCTrade = require("../api/kucoin/trade.js");

// db/models
const kucoin_db = require("../db/connect/kucoin_connect.js");
const KCoin = require("../db/models/eth_coin");


CoinList.map((x) => {
    KCBalance(x.ticker).then(
        response => {
            checkActive(x.ticker, response.data.balance)
        }
    )

})

const checkActive = (ticker, balance) => {
    KCActive(ticker+"-ETH").then(
        response => {
            if(response.data.SELL.length == 0 && response.data.BUY.length == 0) {
                // do not execute trade
                checkTrade(ticker);
            }
        }
    )
}

const checkTrade = (ticker) => {
    let can_spend = 0;
    let unit_amt = 0;

    KCBalance("ETH").then(
        response => {
            // get our ticker info here
            // small eth amount for testing
            can_spend = response.data.balance * 0.01;
            // only ETH enabled currently
            KCTicker(ticker+"-ETH").then(
                response => {
                    unit_amt = can_spend / response.data.lastDealPrice;
                    let diff = response.data.high - response.data.low;
                    let sell_over = response.data.high - (.3*diff);
                    let buy_under = response.data.low + (.3*diff);
                    KCBalance(ticker).then(
                        trading => {
                            if(response.data.lastDealPrice <= buy_under) {
                                trading.data.balance == 0 ?
                                    executeBuy(ticker, unit_amt, response.data.lastDealPrice) : ''
                            } else if(response.data.lastDealPrice >= sell_over) {
                                trading.data.balance > 0 ?
                                    executeSell(ticker, trading.data.balance, response.data.lastDealPrice) : ''
                            }
                        }
                    )
                }
            )
        }
    )
}

const executeSell = (ticker, amount, price) => {
    //    console.log("Sell " + ticker + " @ " + price + " " + amount + " units");
    let myCoin = KCoin.find({ticker: ticker});
    myCoin.then((x, err) => {
        if(x[0].bought_price < price) {
            KCTrade(ticker, amount, price - .000001, "SELL");
            x[0].bought_price = 0;
            x[0].save();
        }
    })
}

const executeBuy = (ticker, amount, price) => {
    //    console.log("Buy " + ticker + " @ " + price + " " + amount + " units");
    let myCoin = KCoin.find({ticker: ticker});
    myCoin.then((x, err) => {
        if(x.length > 0) {
            x[0].bought_price = price;
            x[0].save();
        } else {
            myCoin = new KCoin({ticker: ticker, bought_price: price});
            myCoin.save();
        }
        KCTrade(ticker, amount, price + .000001, "BUY");
    })
}
