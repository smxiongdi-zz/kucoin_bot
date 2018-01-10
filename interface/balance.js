const balance_db = require("../db/connect/kucoin_connect.js");
const Balance = require("../db/models/balance.js");
const KCBalance = require("../api/kucoin/balance.js");

function storeBalance() {
    // wipe existing data
    /*
    ETHCoin.remove({}, (error) => {
        console.log("Existing collection removed");
    });
    */
    KCBalance().then(
        response => {
            // enter new data
            console.log("BALANCE");
            let myBalance = Balance.find({balance_ticker: "ETH"});
            myBalance.then((y, err) => {
                y.length > 0 ?
                    updateBalance(y[0], response) :
                    updateBalance(new Balance({}), response)
            })
        },
        error => {
            // alert via email
        }
    )
}

function updateBalance(myBalance, response) {
    myBalance.balance_ticker = response.data.coinType;
    myBalance.amt = response.data.balance;

    myBalance.save();
}

module.exports = storeBalance;
