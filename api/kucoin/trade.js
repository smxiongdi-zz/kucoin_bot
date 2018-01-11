const KuCoin = require('kucoin-api');

let kucoin_api = new KuCoin(process.env.KUCOIN_API_KEY, process.env.KUCOIN_API_SECRET);

const KCTrade = (ticker, amount, price, ordertype) => {
    console.log("Ticker: " + ticker);
    console.log("Amt: " + amount);
    console.log("price: " + price);
    console.log("ordertype: " + ordertype);

    return kucoin_api.createOrder({
        pair: ticker + "-ETH",
        amount: amount.toFixed(4) - .0001,
        price: price,
        type: ordertype
    }).then(console.log).catch(console.error)
}

module.exports = KCTrade;
