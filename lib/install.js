'use strict';

var BinBuild = require('bin-build');
var log = require('logalot');
var bin = require('./');

bin.run(['-version'], function (err) {
  if (err) {
    log.warn(err.message);
    log.warn('simplehttp2server pre-build test failed');
    log.info('compiling from source');

    var builder = new BinBuild()
      .src('https://github.com/GoogleChrome/simplehttp2server/archive/2.0.1.tar.gz')
      .cmd('go build');

    return builder.run(function (err) {
      if (err) {
        log.error(err.stack);
        return;
      }

      log.success('simplehttp2server built successfully');
    });
  }

  log.success('simplehttp2server pre-build test passed successfully');
});
