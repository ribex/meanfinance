angular.module('cdfinance').controller("FindController", FindController);

function FindController($http) {
    var vm = this;
    console.log("findController");


    function stocksList() {
        return $http.get('/api/stocks').then(complete).catch(failed);
    };

    stocksList().then(function(response) {
        sendToPage(response);
    });

    function complete(response) {
        return response.data;
    };

    function failed(error) {
        console.log(error.statusText);
    };

    function sendToPage(tickSymbol) {
        var tickSymbols = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: tickSymbol
        });

        $('.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'symbols',
            source: tickSymbols
        });
    }

    vm.find = function() {
        var symbol = vm.symbol
        console.log(symbol)

        $http.get("/api/stocks/" + symbol).then(function(response) {
            console.log("found stock")
            var stockprice = response.data.price
            vm.stockprice = stockprice;
        }).catch(function(error) {
            if (error) {
                vm.error = error;
            }
        })
    }
}