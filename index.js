var esnext = require('esnext');

var createEsnextPreprocessor = function(args, config, logger, helper) {
  config = config || {};

  var log = logger.create('preprocessor.esnext');
  var options = helper.merge({}, args.options || {}, config.options || {});

  return function(content, file, done) {
    log.debug('Processing "%s"', file.originalPath);
    return done(null, esnext.compile(content, options).code);
  };
};

createEsnextPreprocessor.$inject = ['args', 'config.esnextPreprocessor', 'logger', 'helper'];

module.exports = {
  'preprocessor:esnext': ['factory', createEsnextPreprocessor]
};
