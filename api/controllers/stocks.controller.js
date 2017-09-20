var mongoose = require('mongoose');
var Stock = mongoose.model('Stock');
var https = require('https');
var stockPrice = require('./shared/stockPrice.js')

module.exports.stocksGetPrice = function(req, res) {
    var symbol = req.params.symbol
    console.log("looking up symbol:", symbol);

    Stock
        .findById(symbol)
        .exec(function(err, stock) {
            if (err) {
                res
                    .status(500)
                    .json(err);
            } else if (!stock) {
                res
                    .status(404)
                    .json({ "message": "Stock symbol invalid" })
            } else {
                //found the stock symbol it is a valid NASDAQ stock symbol pull data
                //from api.
                var price = stockPrice.getPrice(req, res, symbol);

            }
        })

}

module.exports.getAll = function(req, res) {
    console.log('getting all sysmbols')
    Stock
        .find()
        .exec(function(err, syms) {
            if (err) {
                console.log(err);
                res
                    .status(400)
                    .json(err);
            } else {
                console.log('symbols found', syms)
                res
                    .status(200)
                    .json(syms);
            }
        })
}