exports.action = {
  name:                   'getSources',
  description:            'getSources',
  blockedConnectionTypes: [],
  outputExample:          {},
  matchExtensionMimeType: false,
  version:                1.0,
  toDocument:             true,

  inputs: {
      type: {
          required: true,
          validator: function (param, connection, actionTemplate) {
              return param == 'video' || param == 'photos' || param == 'music';
          }
      }
  },

  run: function(api, connection, next){
    api.db.sources.fetchAll({type:connection.params.type})
        .then(function(sources) {
            for (var index in sources.models) {
                var attributes = sources.models[index].attributes;
                if (attributes.server == 'samba') {
                    var smb = require('smb2');
                    var options = {
                        share: '\\\\' + attributes.ip + '\\' + attributes.share,
                        domain: '',
                        username: attributes.username,
                        password: attributes.password
                    };
                    var client = new smb(options);
                    client.readdir(attributes.path, function(err, files) {
                        if (err) console.log(err);
                        else console.log(files);
                    });
                }
            }
        });

    next(connection, true);
  }
};