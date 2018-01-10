const KuCoin = require('kucoin-api');

let kucoin_api = new KuCoin(process.env.KUCOIN_API_KEY, process.env.KUCOIN_API_SECRET);

const KCRates = (in_array) => {
    return kucoin_api.getExchangeRates({
        symbols: in_array
    })
}


module.exports = KCRates;
