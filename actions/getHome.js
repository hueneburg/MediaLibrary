exports.action = {
    name:                   'getHome',
    description:            'getHome',
    blockedConnectionTypes: [],
    outputExample:          {},
    matchExtensionMimeType: false,
    version:                1.0,
    toDocument:             true,

    inputs: {},

    run: function(api, connection, next){
        var fs = require('fs');
        fs.readFile('templates/Home.html', 'utf8', function(err, data) {
            if (err) {
                connection.response = 'An error occurred';
            } else {
                connection.response = data;
            }
            next(connection, true);
        })
    }
};