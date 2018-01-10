const KuCoin = require('kucoin-api');

let kucoin_api = new KuCoin(process.env.KUCOIN_API_KEY, process.env.KUCOIN_API_SECRET);

kucoin_api.getBalance({
    symbol: "ETH"
})
.then((result) =>{
    console.log(result);
})
.catch((error) => {
    console.log(error);
})
