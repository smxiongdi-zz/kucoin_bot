const CMC = require("../api/cmc.js");

CMC().then(
    response => {
        console.log(response);
    }
)

