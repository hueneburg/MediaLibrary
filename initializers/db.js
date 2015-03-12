module.exports = {
    loadPriority:  1000,
    startPriority: 1000,
    stopPriority:  1000,
    initialize: function(api, next){
        api.db = {};

        var knex = require('knex')({
            client: 'pg',
            connection: {
                host: '127.0.0.1',
                user: 'librarian',
                password: require('../config/db.js').password,
                database: 'mediaLibrary',
                charset: 'utf8'
            }
        });

        api.db.bookshelf = require('bookshelf')(knex);

        api.db.sources = api.db.bookshelf.Model.extend({
            tableName: 'sources'
        });

        next();
    },
    start: function(api, next){
        next();
    },
    stop: function(api, next){
        next();
    }
}