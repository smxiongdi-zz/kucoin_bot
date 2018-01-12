const KuCoin = require('kucoin-api');

let kucoin_api = new KuCoin(process.env.KUCOIN_API_KEY, process.env.KUCOIN_API_SECRET);

const KCCoins = () => {
    return kucoin_api.getCoins()
}


module.exports = KCCoins;
