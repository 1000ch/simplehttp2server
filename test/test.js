/* eslint-env mocha */
'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var binCheck = require('bin-check');
var BinBuild = require('bin-build');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var tmp = path.join(__dirname, 'tmp');

beforeEach(function (cb) {
  mkdirp(tmp, cb);
});

afterEach(function (cb) {
  rimraf(tmp, {disableGlob: true}, cb);
});

it('rebuild the simplehttp2server binaries', function (cb) {
  this.timeout(50000);

  new BinBuild()
    .src('https://github.com/GoogleChrome/simplehttp2server/archive/2.0.1.tar.gz')
    .cmd('mkdir -p ' + tmp)
    .cmd('sh crosscompile.sh && mv ./simplehttp2server ' + path.join(tmp, 'simplehttp2server'))
    .run(function (err) {
      assert(!err);
      assert(fs.statSync(path.join(tmp, 'simplehttp2server')).isFile());
      cb();
    });
});

it('return path to binary and verify that it is working', function (cb) {
  binCheck(require('../'), ['--help'], function (err, works) {
    assert(!err);
    assert(works);
    cb();
  });
});
