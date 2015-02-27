exports.action = {
  name:                   'addSource',
  description:            'addSource',
  blockedConnectionTypes: [],
  outputExample:          {},
  matchExtensionMimeType: false,
  version:                1.0,
  toDocument:             true,

  inputs: {},

  run: function(api, connection, next){

    next(connection, true);
  }
};