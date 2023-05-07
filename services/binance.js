const Binance = require('binance-api-node').default

const client = Binance({
    apiKey: process.env.APIKEY,
    apiSecret: process.env.SECRETKEY, 
    getTime: () => Date.now(),
}) 

module.exports = client