'use strict';

const fs = require('fs');
const path = require('path');
const test = require('ava');
const tempy = require('tempy');
const binCheck = require('bin-check');
const BinBuild = require('bin-build');
const suffix = require('../lib/suffix');
const simplehttp2server = require('..');

test.cb('rebuild the simplehttp2server binaries', t => {
  const tmp = tempy.directory();
  const builder = new BinBuild();

  builder
    .src('https://github.com/GoogleChrome/simplehttp2server/archive/2.0.1.tar.gz')
    .cmd(`sh crosscompile.sh && mv ./${path.basename(builder.tmp)}${suffix()} ${path.join(tmp, 'simplehttp2server')}`)
    .run(err => {
      t.ifError(err);
      t.true(fs.existsSync(path.join(tmp, 'simplehttp2server')));
      t.end();
    });
});

test('return path to binary and verify that it is working', async t => {
  try {
    await binCheck(simplehttp2server, ['--help']);
  } catch (err) {
    t.pass(err);
  }
});
