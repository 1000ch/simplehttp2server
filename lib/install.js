'use strict';

const path = require('path');
const BinBuild = require('bin-build');
const log = require('logalot');
const suffix = require('./suffix');
const bin = require('.');

bin.run(['--version'], err => {
  if (err) {
    log.warn(err.message);
    log.warn('simplehttp2server pre-build test failed');
    log.info('compiling from source');

    const builder = new BinBuild();

    return builder
      .src('https://github.com/GoogleChrome/simplehttp2server/archive/3.1.2.tar.gz')
      .cmd(`mkdir -p ${bin.dest()}`)
      .cmd(`sh crosscompile.sh && mv ./${path.basename(builder.tmp)}${suffix()} ${bin.path()}`)
      .run(err => {
        if (err) {
          log.error(err.stack);
          return;
        }

        log.success('simplehttp2server built successfully');
      });
  }

  log.success('simplehttp2server pre-build test passed successfully');
});
