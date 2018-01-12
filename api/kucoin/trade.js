const KuCoin = require('kucoin-api');

let kucoin_api = new KuCoin(process.env.KUCOIN_API_KEY, process.env.KUCOIN_API_SECRET);

const KCTrade = (ticker, amount, price, precision, ordertype) => {

    console.log("Ticker: " + ticker);
    console.log("Amt: " + amount);
    console.log("price: " + price);
    console.log("precision: " + precision);
    console.log("ordertype: " + ordertype);

    // precDeduct exists to take off rounding errors
    const precDeduct = [0, .1, .01, .001, .0001, .00001, .000001, .0000001, .00000001];

    return kucoin_api.createOrder({
        pair: ticker + "-ETH",
        amount: amount.toFixed(precision) - precDeduct[precision],
        price: price.toFixed(6),
        type: ordertype
    })//.then(console.log).catch(console.error)
}

module.exports = KCTrade;
