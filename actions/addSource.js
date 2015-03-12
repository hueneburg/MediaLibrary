exports.action = {
    name:                   'addSource',
    description:            'addSource',
    blockedConnectionTypes: [],
    outputExample:          {},
    matchExtensionMimeType: false,
    version:                1.0,
    toDocument:             true,

    inputs: {
        type: {
            required: true,
            validator: function(param, connection, actionTemplate) {
                switch (param) {
                    case 'video':
                        return true;

                    case 'photo':
                        return true;

                    case 'music':
                        return true;

                    default:
                        return false;
                }
            }
        },
        name: {
            required: true
        },
        server: {
            required: true,
            validator: function(param, connection, actionTemplate) {
                switch (param) {
                    case 'samba':
                        return true;

                    case 'local':
                        return true;

                    default:
                        return false;
                }
            }
        },
        ip: {
            required: false,
            default: '127.0.0.1'
        },
        username: {
            required: false,
            default: ''
        },
        password: {
            required: false,
            default: ''
        },
        share: {
            required: false,
            default: ''
        },
        domain: {
            required: false,
            default: ''
        },
        path: {
            required: true
        }
    },

    run: function(api, connection, next) {
        if (connection.params.server == 'samba') {
            api.db.sources.forge({
                type : connection.params.type,
                name: connection.params.name,
                server: connection.params.server,
                ip: connection.params.ip,
                username: connection.params.username,
                password: connection.params.password,
                share: connection.params.share,
                domain: connection.params.domain,
                path: connection.params.path
            }).save().then(function() {
                console.log('saved');
            });
        }
        connection.response.redirectURL = '/';
        connection.rawConnection.responseHeaders.push(['Location', connection.response.redirectURL]);
        connection.rawConnection.responseHttpCode = 301;
        next(connection, true);
    }
};