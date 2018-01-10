const KuCoin = require('kucoin-api');

let kucoin_api = new KuCoin(process.env.KUCOIN_API_KEY, process.env.KUCOIN_API_SECRET);

const KCTicker = (in_pair) => {
    return kucoin_api.getTicker({
        pair: in_pair
    })
}


module.exports = KCTicker;
