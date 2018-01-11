const KuCoin = require('kucoin-api');

let kucoin_api = new KuCoin(process.env.KUCOIN_API_KEY, process.env.KUCOIN_API_SECRET);

const KCTrade = (ticker, amount, price, ordertype) => {
    return kucoin_api.createOrder({
        pair: ticker + "-ETH",
        amount: amount,
        price: price,
        type: ordertype
    })
}

module.exports = KCTrade;
