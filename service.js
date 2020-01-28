var request = require('request');

// technique du callback
function listerClients(callbackEr, callbackFn) {
    request('https://fla-hotel-web-api.herokuapp.com/clients', { json: true }, function (err, res, data) {
        if (err) { callbackEr(err) }
        else {
            callbackFn(data);
        }
    });
}
exports.listerClients = listerClients;