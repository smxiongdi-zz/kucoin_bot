const KuCoin = require('kucoin-api');

let kucoin_api = new KuCoin(process.env.KUCOIN_API_KEY, process.env.KUCOIN_API_SECRET);

const KCOrderBooks = (in_pair) => {
    return kucoin_api.getOrderBooks({
        pair: in_pair //"DBC-ETH"
    })
}


module.exports = KCOrderBooks;
