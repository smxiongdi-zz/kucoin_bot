const KuCoin = require('kucoin-api');

let kucoin_api = new KuCoin(process.env.KUCOIN_API_KEY, process.env.KUCOIN_API_SECRET);

const KCBalance = () => {
    return kucoin_api.getBalance({
        symbol: "ETH"
    })
}


module.exports = KCBalance;
