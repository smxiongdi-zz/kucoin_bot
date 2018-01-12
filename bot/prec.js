const KCCoins = require("../api/kucoin/coins.js");

const precision = KCCoins().then(
    response => {
        response.data.map((z) => {
            /*
            console.log(z.coin);
            console.log(z.tradePrecision);
            console.log("*****");
            */
        })
    }
)

module.exports = precision;
