'use strict';

const test = require('ava');
const binCheck = require('bin-check');
const simplehttp2server = require('..');

test('return path to binary and verify that it is working', async t => {
  try {
    await binCheck(simplehttp2server, ['--help']);
    t.pass();
  } catch (err) {
    t.fail(err);
  }
});
