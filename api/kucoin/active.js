const KuCoin = require('kucoin-api');

let kucoin_api = new KuCoin(process.env.KUCOIN_API_KEY, process.env.KUCOIN_API_SECRET);

const KCActive = (in_pair) => {
    return kucoin_api.getActiveOrders({
        pair: in_pair
    })
}


module.exports = KCActive;
