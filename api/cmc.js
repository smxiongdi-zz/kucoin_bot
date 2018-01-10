let fetch = require('node-fetch');

const CoinMarketCapAPI = () => {
    const baseUrl = "https://api.coinmarketcap.com/v1/ticker/";
    return fetch(baseUrl).then(res => res.json());
}

module.exports = CoinMarketCapAPI;
